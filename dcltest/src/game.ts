import * as matic from "./matic"


/// --- Spawn a cube ---

// create the entity
const cube = new Entity()

engine.addEntity(cube)

// add a transform to the entity
cube.addComponent(new Transform({ position: new Vector3(8, 2, 8) }))

// add a shape to the entity
cube.addComponent(new BoxShape())

cube.addComponent(
    new OnClick(async () => {
        const myWallet = "0x05C351382dB8D770207F319D96ac1184c3717edE"
        const balance = await matic.balance(myWallet, 0, "goerli")
        log(balance)
        await matic.sendMana(myWallet, 0, 2, true, "goerli").then(
    		() => {
                log("Sent!")
            }
    	)

    })
)
