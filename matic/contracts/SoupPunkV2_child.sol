pragma solidity ^0.6.0;

import "@openzeppelin/contracts-upgradeable/presets/ERC1155PresetMinterPauserUpgradeable.sol";
import {NativeMetaTransaction} from "../../common/NativeMetaTransaction.sol";
import {ContextMixin} from "../../common/ContextMixin.sol";

contract SoapPunkCollectiblesChildV2 is
    ERC1155PresetMinterPauserUpgradeable,
    NativeMetaTransaction,
    ContextMixin
{
    bytes32 public constant DEPOSITOR_ROLE = keccak256("DEPOSITOR_ROLE");
    mapping (uint256 => bool) public withdrawnTokens;

    function initialize(string memory newuri, string memory domainSeparator, address childChainManager) initializer public {
        __ERC1155PresetMinterPauser_init(newuri);

        _setupRole(DEPOSITOR_ROLE, childChainManager);

        _initializeEIP712(domainSeparator);
     }

     /*function setURI(string memory newuri, uint256 id) public {
         require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "SoapPunkCollectibles: must have admin role to change uri");

         emit URI(newuri, id);

         _setURI(newuri);
     }*/


     // Disable minting
     function mint(address to, uint256 id, uint256 amount, bytes memory data) public override {
         // No account can mint
         require(false, "SoapPunkCollectibles: cannot mint on child contract");
     }

     function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public override {
         // No account can mint
         require(false, "SoapPunkCollectibles: cannot mint on child contract");
     }

     // Disable burning
     function burn(address account, uint256 id, uint256 value) public override {
         // No account can burn
         require(false, "SoapPunkCollectibles: cannot burn on child contract");
     }

     function burnBatch(address account, uint256[] memory ids, uint256[] memory values) public override {
         // No account can burn
         require(false, "SoapPunkCollectibles: cannot burn on child contract");
     }

     //Child

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
