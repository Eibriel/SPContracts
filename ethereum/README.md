# SPContracts
Contracts for the SoupPunk project.

`npm install @openzeppelin/contracts-upgradeable`

`npm install --save-dev @openzeppelin/truffle-upgrades`

`truffle develop`

`migrate --reset --compile-all --network goerli`

`run verify SoapPunkCollectibles --network goerli`



### Goerli
```
truffle console --network goerli


mycontract = await SoapPunkCollectibles.deployed()

await mycontract.grantRole(web3.utils.sha3("MINTER_ROLE"), "0x05C351382dB8D770207F319D96ac1184c3717edE")

await mycontract.grantRole(web3.utils.sha3("DEFAULT_ADMIN_ROLE"), "0x05C351382dB8D770207F319D96ac1184c3717edE")

await mycontract.mint("0x05C351382dB8D770207F319D96ac1184c3717edE", 0, 10, "")

(await mycontract.balanceOf("0x05C351382dB8D770207F319D96ac1184c3717edE", 0)).toString()
```

`0x5db5918e5fb26e3a3837A7F9552Ce12AEAC5368c`


### Mumbai
```
truffle console --network mumbai

migrate --reset --compile-all
```
