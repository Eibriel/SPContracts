pragma solidity ^0.6.0;

import "@openzeppelin/contracts-upgradeable/presets/ERC1155PresetMinterPauserUpgradeable.sol";

contract SoapPunkCollectibles is
    ERC1155PresetMinterPauserUpgradeable
{

    function initialize(string memory newuri) override initializer public {
        __ERC1155PresetMinterPauser_init(newuri);
     }

     function setURI(string memory newuri, uint256 id) public {
         require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "SoapPunkCollectibles: must have admin role to change uri");

         emit URI(newuri, id);

         _setURI(newuri);
     }

}
