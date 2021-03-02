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

    uint256 private _metasCount;
    uint256 private _lastSaleTime;
    //
    uint256 private _price;
    uint256 private _minPrice;
    uint256 private _multPrice;
    uint256 private _increaseBySecond;
    uint256 private _refundByCatch;
    //
    uint8 private _maxVotes;
    //
    uint16 private _totalMetaAmount;
    uint8 private _totalTokenAmount;

    // Mapping from token to vote
    mapping (uint256 => address) private _tokenVote;

    mapping (uint256 => bool) private _tokenVoteExists;

    // Mapping from address to vote count
    mapping (address => uint8) private _accountVoteCount;

    // Mapping from address to amount of refunded money
    mapping (address => uint256) private _accountCatchRefund;


    function initialize(string memory name, string memory symbol, string memory baseURI, string memory domainSeparator) initializer public {
        __ERC721PresetMinterPauserAutoId_init(name, symbol, baseURI);

        _initializeEIP712(domainSeparator);
        _metasCount = 0;
        //
        _lastSaleTime = block.timestamp;
        _price =    1000000000000000000000;
        _minPrice =  500000000000000000000;
        _multPrice =  10000000000000000000;
        _increaseBySecond = 10000;
        _refundByCatch = 200000000000000000000;
        //
        _maxVotes = 100;
        //
        _totalMetaAmount = 10000;
        _totalTokenAmount = 100;
     }

     function setBaseURI(string memory baseURI, uint256 id) external {
         require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "MetaX: must have admin role to change uri");

         _setBaseURI(baseURI);
     }

     function setPrices(uint256 price, uint256 minPrice, uint256 multPrice, uint256 increaseBySecond) external {
         require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "MetaX: must have admin role to change uri");

         _price = price;
         _minPrice =  minPrice;
         _multPrice = multPrice;
         _increaseBySecond = increaseBySecond;

         emit PriceSet(price, minPrice, multPrice, increaseBySecond);
     }

     function getMetaverse(uint256 id) public view returns(string memory) {
         // Check if id is within expected limits
         return string(abi.encodePacked(baseURI(), id.toString(), ".json"));
     }

     function mint(address to) public override {
         require(false, "MetaX: mint is not allowed");
         // Nobody can mint
     }

     function getPrice() public view returns(uint256 price) {
         uint256 bside = _price.add(_metasCount.mul(_multPrice)); // B side of the function
         if (block.timestamp <= _lastSaleTime) {
             return bside;
         }
         uint256 timeDiff = block.timestamp.sub(_lastSaleTime); // Time diff

         if (timeDiff > bside) {
             return _minPrice;
         }
         uint256 timePrice = bside.sub(timeDiff.mul(_increaseBySecond));

         //timePrice = _price + (_metasCount * _multPrice)) - ()(block.timestamp - _lastSaleTime) * _increaseBySecond)

         if (timePrice < _minPrice) {
             timePrice = _minPrice;
         }

         return timePrice;
     }


     function _getPrice() private returns(uint256 price) {
         uint256 timePrice = getPrice();

         if (_accountCatchRefund[_msgSender()] > 0) {
             if (_accountCatchRefund[_msgSender()] > timePrice) {
                 timePrice = 0;
                 _accountCatchRefund[_msgSender()] -= timePrice;
             } else {
                 timePrice = timePrice.sub(_accountCatchRefund[_msgSender()]);
                 _accountCatchRefund[_msgSender()] = 0;
             }
         }

         return timePrice;
     }


     function vote(uint256 id) external {
        /*require(!_tokenVotes[id][_msgSender()], "MetaX: Vote already exists");
        _tokenVotes[id][_msgSender()] = true;
        _accountVotes[_msgSender()][id] = true;*/
        require(!_tokenVoteExists[id], "MetaX: vote already exists");
        require(_accountVoteCount[_msgSender()] < _maxVotes, "MetaX: max votes reached");
        _tokenVote[id] = _msgSender();
        _accountVoteCount[_msgSender()] += 1;
        _tokenVoteExists[id] = true;
     }


    /**
    * @dev Creates Marble NFT Candidate. This candidate will go through our processing. If it's suitable, then Marble NFT is created.
    * @param id URI of resource you want to transform to Marble NFT
    */
    function mintMetaverse(uint256 id)
        external
        payable
        price(_getPrice())
        returns(uint256 index)
    {
        require(!paused(), "MetaX: token mint while paused");
        require(!_exists(id), "MetaX: metaverse id is already minted");
        require(_metasCount < _totalTokenAmount, "MetaX: contract mint limit reached");
        require(id >= 0 && id < _totalMetaAmount, "MetaX: metaverse id does not exists");

        _metasCount = _metasCount.add(1);

        _lastSaleTime = block.timestamp;

        if (_tokenVoteExists[id]) {
            _accountCatchRefund[_tokenVote[id]] += _refundByCatch;
        }

        _mint(_msgSender(), id);

        return id;
    }


     /**
    * @dev Emits when owner take ETH out of contract
    * @param balance - amount of ETh sent out from contract
    */
    event Withdraw(uint256 balance);

    event PriceSet(uint256 price, uint256 minPrice, uint256 multPrice, uint256 increaseBySecond);


    /*
    * @dev Remove all Ether from the contract, and transfer it to account of owner
    */
    function withdrawBalance() external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "MetaX: must have admin role to withdraw");
        uint256 balance = address(this).balance;
        //msg.sender.transfer(balance);
        _msgSender().transfer(balance);

        // Tell everyone !!!!!!!!!!!!!!!!!!!!!!
        emit Withdraw(balance);
    }


    /**
    * @dev modifier Associete fee with a function call. If the caller sent too much, then is refunded, but only after the function body.
    * This was dangerous before Solidity version 0.4.0, where it was possible to skip the part after `_;`.
    * @param _amount - ether needed to call the function
    */
    modifier price(uint256 _amount) {
        require(msg.value >= _amount, "MetaX: Not enough Ether provided.");
        _;
        if (msg.value > _amount) {
            //msg.sender.transfer(msg.value.sub(_amount));
            _msgSender().transfer(msg.value.sub(_amount));
        }
    }


    /*modifier updateUp() {
        if (getNextUp() == 0) {
            _lastUpTime = block.timestamp;
        }
    }*/

}
