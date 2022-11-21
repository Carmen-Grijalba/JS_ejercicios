/*Ejercicio 2
Crea un nuevo archivo js que contenga una lista con los siguientes elementos
- nombre (string)
- edad (number)
- ¿eres desarrollador? (boolean)
- fecha nacimiento (date)
- libro favorito (objeto con propiedades: titulo, autor, fecha, url)*/

const lista1 = ["Carmen Grijalba", 27, false]
const cumple = new Date(1994, 11, 29);
const fecha_libro = new Date(1974, 4);
const libro = {
    titulo: "Los desposeídos",
    autor: "Ursula K. Le Guin",
    fecha_libro,
    url: "https://es.wikipedia.org/wiki/Los_despose%C3%ADdos"
}

const lista = [lista1, cumple, libro];
console.log(lista)