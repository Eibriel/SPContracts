const Web3 = require("web3")
const HDWalletProvider = require('@truffle/hdwallet-provider')
const sigUtil = require("eth-sig-util")
const configSP = require("./SoapPunkCollectiblesChild_abi");
const configMX = require("./MetaX_abi");
const configMA = require("./MANA_abi");
//const Biconomy = require("@biconomy/mexa");
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');

const cors = require('cors');


const app = express()
app.use(cors())
const port = 3058

var jsonParser = bodyParser.json()

const contractAddressSP = "0xa8CDbdCbF23ed4cB8d72330E201D2EA8b6F68BC5"
// const contractAddressMX = "0x8aC976B71E38745a6b30c836da5D6aAD4Ba8BdEc" // Broken contract
const contractAddressMX = "0xcBA48Ba6e0F484EDFF0A21Fa6C1bBb92384dCD2F"
const contractAddressMA = "0x4dA830330048be6380f102a83d3B94ea318bc598"

const privateKey = fs.readFileSync("../.secret").toString().trim();
const maticvigilKey = fs.readFileSync("../.maticvigil").toString().trim();

const maticProvider = new HDWalletProvider(privateKey, 'https://rpc-mumbai.maticvigil.com/v1/'+maticvigilKey)

const web3 = new Web3(maticProvider);

const ethers = require('ethers');
let mnemonic = privateKey;
let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);

const account = web3.eth.accounts.privateKeyToAccount(mnemonicWallet.privateKey);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;


const contractMA = new web3.eth.Contract(configMA.contract.abi, contractAddressMA);
const contractSP = new web3.eth.Contract(configSP.contract.abi, contractAddressSP);
const contractMX = new web3.eth.Contract(configMX.contract.abi, contractAddressMX);


app.post('/metatransactions/souppunk/*', jsonParser, (req, res) => {
    console.log(req.body)

    const recovered = sigUtil.recoverTypedSignature_v4({
      data: JSON.parse(dataToSign),
      sig: response.result
    });
    console.log(`Recovered ${recovered}`);
    let tx = contractSP.methods
      .executeMetaTransaction(userAddress, functionSignature, r, s, v)
      .send({
        from: userAddress
      });
    console.log(tx);

    res.send('Hello World! ' + req.url)
})

app.post('/metatransactions/metax', jsonParser, (req, res) => {
    console.log(req.body)
    const userAddress = req.body.params[0]
    const functionSignature = req.body.params[1]
    const r = req.body.params[2]
    const s = req.body.params[3]
    const v = req.body.params[4]

    console.log("AD:", maticProvider.addresses[0]);
    let currentContract
    if (req.body.eibriel) {
        currentContract = contractMX
    } else {
        currentContract = contractMA
    }

    currentContract.methods
          .executeMetaTransaction(userAddress, functionSignature, r, s, v)
          .send({from: maticProvider.addresses[0], gasPrice: 1000000000, gas: 189220})
          .on('transactionHash', function(hash){
            console.log('transactionHash')
            console.log(hash)
            res.send({txHash: hash})
        }).on('confirmation', function(confirmationNumber, receipt){
            console.log('confirmation')
            console.log(confirmationNumber)
            console.log(receipt)
            //res.send(receipt)
        }).on('receipt', function(receipt){
            console.log('receipt')
            //console.log(receipt)
        }).on('error', function(error, receipt) {
            console.log('error')
            //console.log(error)
            //res.send(error)
        });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
