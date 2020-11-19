pragma solidity ^0.6.0;

import "@openzeppelin/contracts-upgradeable/presets/ERC1155PresetMinterPauserUpgradeable.sol";
import {NativeMetaTransaction} from "./common/NativeMetaTransaction.sol";
import {ContextMixin} from "./common/ContextMixin.sol";

contract SoapPunkCollectiblesChild is
    ERC1155PresetMinterPauserUpgradeable,
    NativeMetaTransaction,
    ContextMixin
{
    bytes32 public constant DEPOSITOR_ROLE = keccak256("DEPOSITOR_ROLE");
    mapping (uint256 => bool) public withdrawnTokens;

    function initialize(string memory newuri, address childChainManager) initializer public {
        __ERC1155PresetMinterPauser_init(newuri);

        _setupRole(DEPOSITOR_ROLE, childChainManager);

        _initializeEIP712("SoupPunkCollectibles");
     }

     function setURI(string memory newuri) public {
         require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "SoapPunkCollectibles: must have admin role to change uri");

         _setURI(newuri);
     }


     // Disable minting
     function mint(address to, uint256 id, uint256 amount, bytes memory data) public virtual {
         //require(hasRole(MINTER_ROLE, _msgSender()), "ERC1155PresetMinterPauser: must have minter role to mint");

         //_mint(to, id, amount, data);
     }

     function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public virtual {
         //require(hasRole(MINTER_ROLE, _msgSender()), "ERC1155PresetMinterPauser: must have minter role to mint");

         //_mintBatch(to, ids, amounts, data);
     }


     //Child

     /**
     * @notice called when tokens are deposited on root chain
     * @dev Should be callable only by ChildChainManager
     * Should handle deposit by minting the required tokens for user
     * Make sure minting is done only by this function
     * @param user user address for whom deposit is being done
     * @param depositData abi encoded ids array and amounts array
     */
    function deposit(address user, bytes calldata depositData)
        external
    {
        require(hasRole(DEPOSITOR_ROLE, _msgSender()), "SoapPunkCollectibles: must have depositor role to make deposit");
        (
            uint256[] memory ids,
            uint256[] memory amounts,
            bytes memory data
        ) = abi.decode(depositData, (uint256[], uint256[], bytes));
        require(user != address(0x0), "ChildERC1155: INVALID_DEPOSIT_USER");
        _mintBatch(user, ids, amounts, data);
    }

    /**
     * @notice called when user wants to withdraw single token back to root chain
     * @dev Should burn user's tokens. This transaction will be verified when exiting on root chain
     * @param id id to withdraw
     * @param amount amount to withdraw
     */
    function withdrawSingle(uint256 id, uint256 amount) external {
        _burn(_msgSender(), id, amount);
    }

    /**
     * @notice called when user wants to batch withdraw tokens back to root chain
     * @dev Should burn user's tokens. This transaction will be verified when exiting on root chain
     * @param ids ids to withdraw
     * @param amounts amounts to withdraw
     */
    function withdrawBatch(uint256[] calldata ids, uint256[] calldata amounts)
        external
    {
        _burnBatch(_msgSender(), ids, amounts);
    }

}
