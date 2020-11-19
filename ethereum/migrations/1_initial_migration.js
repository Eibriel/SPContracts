const Migrations = artifacts.require("Migrations");


module.exports = function (deployer, network, accounts) {
    console.log(network);
    console.log(accounts[0]);
    deployer.deploy(Migrations);
};
