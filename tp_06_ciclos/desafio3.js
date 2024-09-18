function siguienteNumero(valor) {
    for (let i = 1; i <= 10; i++) {
        console.log(valor + i);
    }
}

siguienteNumero(4);

function saltoDeTres() {
    for (let i = 1; i <= 57; i += 3) {
        console.log(i);
    }
}

saltoDeTres();

function sumarNumeros() {
    let sumar = 0;
    for (let i = 0; i <= 100; i++) {
        suma += i;
    }
    console.log('La sumatoria  de los números del 0 al 100 es: ' + suma);
}

sumarNumeros();

function filtrarPares(array) {
    return array.filter(num => num % 2 === 0);
}
const numeros =  [1, 2, 3, 4, 5, 6, 7,135,570, 90, 3, 7,  9, 10];
const pares = filtrarPares(numeros);
console.log(pares);

