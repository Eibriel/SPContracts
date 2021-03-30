const SimpleToken = artifacts.require('DummyERC20');

module.exports = async function (deployer) {
  await deployer.deploy(SimpleToken);
};
