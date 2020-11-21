const Web3 = require("web3")
const sigUtil = require("eth-sig-util")
const config = require("SoapPunkCollectiblesChild_abi");
const fs = require('fs');

const express = require('express')
const app = express()
const port = 3058

const contractAddress = "0xd6C120F1eca107B4c32a04b1fEb35ca9FFA9002a"

const biconomyAPIKey = fs.readFileSync("../.biconomy").toString().trim();

//const parentChainId = 5
const maticProvider = "https://rpc-mumbai.matic.today"

const biconomy = new Biconomy(
    new Web3.providers.HttpProvider(maticProvider),
        {
            apiKey: biconomyAPIKey,
            debug: true
        }
    );

const getWeb3 = new Web3(biconomy);

const contract = new getWeb3.eth.Contract(config.contract.abi, contractAddress);

app.get('/metadata/souppunk/v1/*.json', (req, res) => {
    //console.log(req)
    res.send('Hello World! ' + req.url)
})


app.post('/metatransactions/souppunk/v1/*', (req, res) => {
    //console.log(req)

    const recovered = sigUtil.recoverTypedSignature_v4({
      data: JSON.parse(dataToSign),
      sig: response.result
    });
    console.log(`Recovered ${recovered}`);
    let tx = contract.methods
      .executeMetaTransaction(userAddress, functionSignature, r, s, v)
      .send({
        from: userAddress
      });
    console.log(tx);

    res.send('Hello World! ' + req.url)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
