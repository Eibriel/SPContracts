const MaticPOSClient = require('@maticnetwork/maticjs').MaticPOSClient

const HDWalletProvider = require('@truffle/hdwallet-provider')

const fs = require('fs');
const privateKey = fs.readFileSync("../.secret").toString().trim();
const infuraKey = fs.readFileSync("../.infurakey").toString().trim();
const maticvigilKey = fs.readFileSync("../.maticvigil").toString().trim();

//const parentProvider = () => new HDWalletProvider(privateKey, 'https://goerli.infura.io/v3/'+infuraKey)
//const maticProvider = () => new HDWalletProvider(privateKey, 'https://rpc-mumbai.maticvigil.com/v1/'+maticvigilKey)

rootToken = "0xC899419eA2f5e678a71a18678c6B1f3e92Bc4CCD"
from = "0x05C351382dB8D770207F319D96ac1184c3717edE"
from = "0x2ED13b61a35f99B420eA15C34053af79503f275e"
tokenId = 0
amount = 1

// for mumbai testnet
const maticPOSClient = MaticPOSClient({
  network: "testnet",
  version: "mumbai",
  parentProvider: 'https://goerli.infura.io/v3/'+infuraKey,
  maticProvider: 'https://rpc-mumbai.maticvigil.com/v1/'+maticvigilKey,
  parentDefaultOptions: { from },
});

//matic.setWallet(privateKey)

async function app ()  {
    await maticPOSClient.approveERC1155ForDeposit(rootToken);


    await maticPOSClient.depositSingleERC1155ForUser(
      rootToken,
      from,
      tokenId,
      amount,
      { from, gasPrice: "10000000000" }
    );

}

app()
