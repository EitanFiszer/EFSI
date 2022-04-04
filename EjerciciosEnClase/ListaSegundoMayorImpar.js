let listaNumeros = [11,33,2,-1,110,99,8]

let listaImpares=listaNumeros.filter(checkEven);
let numerosOrdenados = listaImpares.sort((a, b) => b - a);

function checkEven(num) {
    return num%2!=0;
}

console.log(numerosOrdenados[1]);