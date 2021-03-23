const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const MetaX = artifacts.require('MetaX');
const MetaXV2 = artifacts.require('MetaXV2');

module.exports = async function (deployer) {
  const existing = await MetaX.deployed();
  const instance = await upgradeProxy(existing.address, MetaXV2, { deployer, unsafeAllowCustomTypes: true });
  console.log("Upgraded", instance.address);
};
