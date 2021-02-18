pragma solidity ^0.6.0;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155ReceiverUpgradeable.sol";

import {NativeMetaTransaction} from "../../common/NativeMetaTransaction.sol";
import {ContextMixin} from "../../common/ContextMixin.sol";

contract SoapPunkAlchemy is ERC1155ReceiverUpgradeable {
    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    function initialize(string memory domainSeparator, address alchemyManager) initializer public {
        __ERC1155Receiver_init();

        _setupRole(MANAGER_ROLE, alchemyManager);

        _initializeEIP712(domainSeparator);
     }

     /**
     * @notice rejects single transfer
     */
     function onERC1155Received(
         address,
         address,
         uint256,
         uint256,
         bytes calldata
         ) external override returns (bytes4) {
             // TODO missing revert?
             return 0;
     }

     /**
    * @notice accepts batch transfer
    */
    function onERC1155BatchReceived(
        address,
        address,
        uint256[] calldata,
        uint256[] calldata,
        bytes calldata
        ) external override returns (bytes4) {
            return ERC1155Receiver(0).onERC1155BatchReceived.selector;
    }


    /**
     * @notice Lock ERC1155 tokens for deposit, callable only by manager
     * @param depositor Address who wants to deposit tokens
     * @param depositReceiver Address (address) who wants to receive tokens on child chain
     * @param rootToken Token which gets deposited
     * @param depositData ABI encoded id array and amount array
     */
    function lockTokens(
        address depositor,
        address depositReceiver,
        address rootToken,
        bytes calldata depositData
    )
        external
        override
        only(MANAGER_ROLE)
    {
        // forcing batch deposit since supporting both single and batch deposit introduces too much complexity
        (
            uint256[] memory ids,
            uint256[] memory amounts,
            bytes memory data
        ) = abi.decode(depositData, (uint256[], uint256[], bytes));
        emit LockedBatchERC1155(
            depositor,
            depositReceiver,
            rootToken,
            ids,
            amounts
        );
        IERC1155(rootToken).safeBatchTransferFrom(
            depositor,
            address(this),
            ids,
            amounts,
            data
        );
    }


     // This is to support Native meta transactions
     // never use msg.sender directly, use _msgSender() instead
     function _msgSender()
         internal
         override
         view
         returns (address payable sender)
         {
             return ContextMixin.msgSender();
     }

}
