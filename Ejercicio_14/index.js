// Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón"

const botonAlerta = document.querySelector("#btn")

botonAlerta.addEventListener("click", () => {
    alert("Click en el botón")
})

$("button").click(function() {
    console.log("Hola, estoy utilizando jQuery")
})
