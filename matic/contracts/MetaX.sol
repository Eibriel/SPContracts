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

    // Mapping from artwork id to voting address
    mapping (uint256 => address) private _artworkVote;

    // Mapping from artwork id to boolean
    mapping (uint256 => bool) private _artworkVoteExists;

    // Mapping from address to vote count
    mapping (address => uint8) private _accountVoteCount;

    // Mapping from address to amount of refunded money
    mapping (address => uint256) private _accountRefundAmount;


    function initialize(string memory name, string memory symbol, string memory baseURI, string memory domainSeparator) initializer public {
        __ERC721PresetMinterPauserAutoId_init(name, symbol, baseURI);

        _initializeEIP712(domainSeparator);
        _tokenCount = 0;
        //
        _startTime = block.timestamp;
        _endTime = _startTime.add(2592000);
        _multPrice =      10000000000000000000; // 10 Matic
        _refundByCatch =   1000000000000000000; // 1 Matic
        //
        _maxVotes = 100;
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

    function getPrice() public view returns(uint256 price) {
        if (_tokenCount < 400) {
            return _multPrice.mul(10);
        } else if (_tokenCount < 800) {
            return _multPrice.mul(25);
        } else if (_tokenCount < 950) {
            return _multPrice.mul(45);
        } else if (_tokenCount < 990) {
            return _multPrice.mul(85);
        } else if (_tokenCount < 1000) {
            return _multPrice.mul(150);
        }
        // Just in case
        return _multPrice.mul(5000);
    }


    /**
    * @dev Get price, substracting (and updating) the refund.
    */
    function _getPrice() private returns(uint256 price) {
        uint256 _price = getPrice();

        if (_accountRefundAmount[_msgSender()] > 0) {
            if (_accountRefundAmount[_msgSender()] > _price) {
                _price = 0;
                _accountRefundAmount[_msgSender()] -= _price;
            } else {
                _price = _price.sub(_accountRefundAmount[_msgSender()]);
                _accountRefundAmount[_msgSender()] = 0;
            }
        }

        return _price;
    }

    /**
    * @dev Casts a vote on an artwork.
    * @param id ID of the artwork
    */
    function vote(uint256 id) external {
        require(!_artworkVoteExists[id], "MetaX: vote already exists");
        require(_accountVoteCount[_msgSender()] < _maxVotes, "MetaX: max votes reached");
        _artworkVote[id] = _msgSender();
        _artworkVoteExists[id] = true;
        _accountVoteCount[_msgSender()] += 1;
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
        require(!_exists(id), "MetaX: metaverse id is already minted");
        require(_tokenCount < _totalTokenAmount, "MetaX: contract mint limit reached");
        require(id >= 0 && id < _totalArtworkAmount, "MetaX: metaverse id does not exists");

        _tokenCount = _tokenCount.add(1);

        if (_artworkVoteExists[id]) {
            _accountRefundAmount[_artworkVote[id]] += _refundByCatch;
        }

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

}
