const functions = require('./proy_modules/functions.js');
const readline = require('readline');
const colors = require('colors');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa un número para generar la tabla de multiplicar: ", function(numeroIngresado) {
    const numero = parseInt(numeroIngresado);
    functions.tablaDeMultiplicarConColor(numero);
    rl.close();
});
