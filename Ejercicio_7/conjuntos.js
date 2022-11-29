//Ejercicio 7.1.

//Set con los nombres de mi familia

const setFamilia = new Set (["Andrés E.", "Susana", "Carmen", "Andrés"])
console.log(setFamilia)

//modifica el set original - añadiendo tu nombre (duplicado) (debería darte lo mismo)

setFamilia.add("Carmen")
console.log(setFamilia)

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

setFamilia.add("JavaScript")
console.log(setFamilia)
