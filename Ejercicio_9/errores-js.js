//Control de Errores

const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //return false
    //palabra clave throw
    throw new Error("El valor debe ser de tipo número")
}

//const elDoble = miFuncion("jdjsksas")
const número = 4;

//palabra clave try = intentar ejecutar el código, que puede fallar
//palabra clave catch = en caso de que falle que haga lo siguiente

try {
    //Código que puede fallar
    console.log("Esta ejecutándose de manera correcta")
    const doble = miFuncion(número)
    console.log(doble)
} catch(e) {
    //en caso de que falle quiero que ejecutes:
    console.error ("ERROR!") //los errores mejor pasarlos por console.error()
    console.error(`El valor de e es: ${e}`) //así podemos gestionar el error y controlarlo
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}

//InternalError = lo lanza el intérprete cuando hay un problema interno
//SyntaxError = cuando hay un error de sintaxis
//TypeError = si introducimos un tipo de dato que no espera
//RangeError = si intentamos acceder a alguna posición que está sobrepasando su ámbito
//ReferenceError = cuando no existe la referencia a la que intentamos acceder

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error