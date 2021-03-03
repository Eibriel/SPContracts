// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts-upgradeable/presets/ERC721PresetMinterPauserAutoIdUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/math/SafeMathUpgradeable.sol";

import {NativeMetaTransaction} from "../../common/NativeMetaTransaction.sol";
import {ContextMixin} from "../../common/ContextMixin.sol";


contract MetaX is
    ERC721PresetMinterPauserAutoIdUpgradeable,
    NativeMetaTransaction,
    ContextMixin
{
    using SafeMathUpgradeable for uint256;

    uint256 private _tokenCount;
    uint256 private _startTime;
    uint256 private _endTime;
    //
    uint256 private _multPrice;
    uint256 private _refundByCatch;
    //
    uint8 private _maxVotes;
    //
    uint16 private _totalArtworkAmount;
    uint32 private _totalTokenAmount;

    // Mapping from address to vote count
    mapping (address => uint8) private _accountVoteCount;

    // Mapping from token id to minter
    mapping (uint256 => address) private _artworkMinterAccount;

    // Mapping from token id to boolean -> true if arwork is minted
    mapping (uint256 => bool) private _artworkMinted;

    // Mapping from address to votes array
    mapping (address => uint256[10]) private _accountVoteArtwork;

    // Mapping from address to boolean -> true if refund was used
    mapping (address => bool) private _accountRefundUsed;


    function initialize(string memory name, string memory symbol, string memory baseURI, string memory domainSeparator) initializer public {
        __ERC721PresetMinterPauserAutoId_init(name, symbol, baseURI);

        _initializeEIP712(domainSeparator);
        _tokenCount = 0;
        //
        _startTime = block.timestamp;
        _endTime = _startTime.add(2592000);
        _multPrice =      5000000000000000000; // 5 Matic
        //
        _maxVotes = 10;
        //
        _totalArtworkAmount = 10000;
        _totalTokenAmount = 1000;
    }

    function setBaseURI(string memory baseURI, uint256 id) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "MetaX: must have admin role to change uri");

        _setBaseURI(baseURI);
    }

    function setPrice(uint256 multPrice) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "MetaX: must have admin role to change uri");

        _multPrice = multPrice;

        emit PriceSet(multPrice);
    }

    function getMetaverse(uint256 id) public view returns(string memory) {
        // Check if id is within expected limits
        return string(abi.encodePacked(baseURI(), id.toString(), ".json"));
    }

    function mint(address to) public override {
        require(false, "MetaX: mint is not allowed");
        // Nobody can call mint()
    }

    function getPrice() public view returns(uint256 price, bool willUseRefund) {
        //
        bool willUseRefund = false;
        // If user didn't used the refund
        if (!_accountRefundUsed[_msgSender()]) {
            // Iterate over votes
            for (uint i=0; i<_accountVoteCount[_msgSender()]; i++) {
                if (_artworkMinterAccount[_accountVoteArtwork[_msgSender()][i]] == _msgSender()) {
                    continue;
                }
                // If the voted artwork was minted
                if (_exists(_accountVoteArtwork[_msgSender()][i])) {
                    willUseRefund = true;
                    break;
                }
            }
        }
        //
        uint256 tmpPrice = _multPrice.mul(5000);
        if (_tokenCount < 400) {
            tmpPrice = _multPrice.mul(10);
        } else if (_tokenCount < 800) {
            tmpPrice = _multPrice.mul(25);
        } else if (_tokenCount < 950) {
            tmpPrice = _multPrice.mul(45);
        } else if (_tokenCount < 990) {
            tmpPrice = _multPrice.mul(85);
        } else if (_tokenCount < 1000) {
            tmpPrice = _multPrice.mul(150);
        }
        if (!willUseRefund) {
            // Price cut in half
            tmpPrice = tmpPrice.mul(2);
        }
        //
        return (tmpPrice, willUseRefund);
    }


    /**
    * @dev Get price, substracting (and updating) the refund.
    */
    function _getPrice() private returns(uint256 price) {
        (uint256 tmpPrice, bool willUseRefund) = getPrice();

        // Mark refund as used
        if (willUseRefund) {
            _accountRefundUsed[_msgSender()] = true;
        }

        return tmpPrice;
    }

    /**
    * @dev Casts a vote on an artwork.
    * @param id ID of the artwork
    */
    function vote(uint256 id) external {
        // To keep gas low it will not check duplicated votes
        require(!paused(), "MetaX: vote while paused");
        require(!_artworkMinted[id], "MetaX: artwork already minted");
        require(_tokenCount < _totalTokenAmount, "MetaX: contract mint limit reached");
        require(_accountVoteCount[_msgSender()] < _maxVotes, "MetaX: max votes reached");
        require(id >= 0 && id < _totalArtworkAmount, "MetaX: metaverse id does not exists");

        _accountVoteArtwork[ _msgSender() ][ _accountVoteCount[_msgSender()] ] = id;
        _accountVoteCount[_msgSender()] += 1;

        emit Vote(id, _msgSender());
    }


    /**
    * @dev Mints a new artwork from an id.
    * @param id ID of the artwork
    */
    function mintArtwork(uint256 id)
        external
        payable
        price(_getPrice())
        returns(uint256 index)
    {
        require(!paused(), "MetaX: token mint while paused");
        require(!_artworkMinted[id], "MetaX: metaverse id is already minted");
        require(_tokenCount < _totalTokenAmount, "MetaX: contract mint limit reached");
        require(id >= 0 && id < _totalArtworkAmount, "MetaX: metaverse id does not exists");

        _tokenCount = _tokenCount.add(1);

        _artworkMinterAccount[id] = _msgSender();

        _artworkMinted[id] = true;

        _mint(_msgSender(), id);

        return id;
    }


    /*
    * @dev Remove all Ether from the contract, and transfer it to account of owner
    */
    function withdrawBalance() external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "MetaX: must have admin role to withdraw");
        uint256 balance = address(this).balance;
        _msgSender().transfer(balance);

        emit Withdraw(balance);
    }


    // Modifiers


    /**
    * @dev modifier Associete fee with a function call. If the caller sent too much, then is refunded, but only after the function body.
    * This was dangerous before Solidity version 0.4.0, where it was possible to skip the part after `_;`.
    * @param _amount - ether needed to call the function
    */
    modifier price(uint256 _amount) {
        require(msg.value >= _amount, "MetaX: Not enough Ether provided.");
        _;
        if (msg.value > _amount) {
            _msgSender().transfer(msg.value.sub(_amount));
        }
    }


    // Events


    /**
    * @dev Emits when owner take ETH out of contract
    * @param balance - amount of ETh sent out from contract
    */
    event Withdraw(uint256 balance);

    /**
    * @dev Emits when a new price is set
    * @param multPrice - a multiplier for the price
    */
    event PriceSet(uint256 multPrice);

    /**
    * @dev Emits when an artwork is voted
    * @param id - an artwork id
    * @param account - an account address
    */
    event Vote(uint256 id, address account);

}
