const logger = require("./logger");

const miFuncion = val => {
    if (typeof val === "number") {
        return 2*val
    }
    throw new Error ("El valor debe ser de tipo número")
}

const número = "fddndn";

try {
    console.log("Está ejecutándose de manera correcta")
    const doble = miFuncion(número)
    console.log(doble)
} catch(e) {
    logger.error( )
    //console.error(`./logger.error()`)
} finally {
    console.log("Este mensaje se va a ejecutar siempre")
}