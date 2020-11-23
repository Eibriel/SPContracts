const bip39 = require('bip39')
const hdkey = require('ethereumjs-wallet/hdkey')

//export const mnemonics = packageJSON.config.mnemonics

module.exports = async function generateFirstWallets ({
  //mnemonics = packageJSON.config.mnemonics,
  mnemonics = "clock radar mass judge dismiss just intact mind resemble fringe diary casino",
  n = 10,
  hdPathIndex = 0
}) {
    const seed = await bip39.mnemonicToSeed(mnemonics)
    const hdwallet = await hdkey.fromMasterSeed(seed)
    const result = []
    for (let i = 0; i < n; i++) {
        const node = await hdwallet.derivePath(`m/44'/60'/0'/0/${i + hdPathIndex || 0}`)
        result.push(await node.getWallet())
    }

    return result
}
