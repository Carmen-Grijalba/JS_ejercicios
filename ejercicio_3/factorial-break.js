//calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 10;
var i = factorial-1;


while(factorial){
    factorial *= i;
    i--;
    if (i <= 1) break;
}
console.log(factorial);