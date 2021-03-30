const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const MetaXV2 = artifacts.require('MetaXV2');
const MetaXV3 = artifacts.require('MetaXV3');

module.exports = async function (deployer) {
  const existing = await MetaXV2.deployed();
  const instance = await upgradeProxy(existing.address, MetaXV3, { deployer, unsafeAllowCustomTypes: true });
  console.log("Upgraded", instance.address);
};
