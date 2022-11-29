//Ejercicio 7.3.

//La fecha de hoy

const fecha_hoy = new Date()
console.log(fecha_hoy)

//La fecha de tu nacimiento

const fecha_nacimiento = new Date(1994,11,29)
console.log(fecha_nacimiento)

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

let result = fecha_hoy > fecha_nacimiento
console.log(result)

//Una variable que contenga el día de tu nacimiento

let día = fecha_nacimiento.getDate()
console.log(día)

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

let mes = fecha_nacimiento.getMonth()+1
console.log(mes)

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let anyo = fecha_nacimiento.getFullYear()
console.log(anyo)
