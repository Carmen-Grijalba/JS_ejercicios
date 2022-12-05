//Crea un archivo JS que contenga las siguientes líneas

//Una cadena de texto con tu Nombre

let nombre = "Carmen"
console.log(nombre)

//Otra cadena de texto con tu Apellido

let apellido = "Grijalba"
console.log(apellido)

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = (`${nombre} ${apellido}`)
console.log(estudiante) 

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = (`${nombre.toUpperCase()} ${apellido.toUpperCase()}`)
console.log(estudianteMayus)

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = (`${nombre.toLowerCase()} ${apellido.toLowerCase()}`)
console.log(estudianteMinus)


//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let num_letras = (estudiante.length)
console.log(num_letras)

//Una variable que contenga la primera letra del Nombre

let primera_letra = (nombre.charAt(0))
console.log(primera_letra)

//Otra variable que contenga la última letra del Apellido

let ultima_letra = (apellido.slice(-1))
console.log(ultima_letra)

//Una cadena de texto que elimine los espacios de la variable "estudiante"

let sin_espacios = (estudiante.replace(/ /g, ""))
console.log(sin_espacios)

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

if (estudiante.includes(`${nombre}`)) {
	console.log("Nombre contenido en Estudiante")
}else {
	console.log("Nombre no contenido en Estudiante")
}
