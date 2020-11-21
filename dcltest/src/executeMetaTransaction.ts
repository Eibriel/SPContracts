const domainType = [
    { name: "name", type: "string" },
    { name: "version", type: "string" },
    { name: "chainId", type: "uint256" },
    { name: "verifyingContract", type: "address" }
];

const metaTransactionType = [
    { name: "nonce", type: "uint256" },
    { name: "from", type: "address" },
    { name: "functionSignature", type: "bytes" }
];

const parentChainId = 5
const contractAddress = "0xd6C120F1eca107B4c32a04b1fEb35ca9FFA9002a"

let domainData = {
    name: "MetaToken",
    version: "1",
    chainId: parentChainId,
    verifyingContract: contractAddress
};

export const executeMetaTransaction = async (functionSignature, contract, userAddress, provider) => {
    //const accounts = await web3.eth.getAccounts();
    //let userAddress = accounts[0];
    let nonce = await contract.methods.getNonce(userAddress).call()

    let message = {
        nonce: parseInt(nonce),
        from: userAddress,
        functionSignature: functionSignature
    }

    const dataToSign = JSON.stringify({
      types: {
        EIP712Domain: domainType,
        MetaTransaction: metaTransactionType
      },
      domain: domainData,
      primaryType: "MetaTransaction",
      message: message
    });
    log(domainData);
    log(userAddress)
    provider.send(
      {
        jsonrpc: "2.0",
        id: 999999999999,
        method: "eth_signTypedData_v4",
        params: [userAddress, dataToSign]
      },
      function(error, response) {
        log(`User signature is ${response.result}`);

        log("TODO: Send response to Server!")
      }
    );
  };
