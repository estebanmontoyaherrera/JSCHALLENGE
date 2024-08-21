// Conversor de temperaturas
// En este desafío, crearás un programa que pueda convertir grados Celsius a Fahrenheit y viceversa.
// Aquí están los requerimientos:
// -
// -
// -
// Crea dos variables para almacenar la temperatura en grados Celsius y Fahrenheit:
// - Una variable (por ejemplo, temperaturaCelsius) representará la temperatura en grados
// Celsius.
// - Otra variable (por ejemplo, temperaturaFahrenheit) representará la temperatura en
// grados Fahrenheit.
// Calcula y almacena la conversión de la temperatura:
// - Para convertir de Celsius a Fahrenheit, usa la fórmula F = C * 9/5 + 32 y almacena el
// resultado en temperaturaFahrenheit.
// - Para convertir de Fahrenheit a Celsius, usa la fórmula C = (F - 32) * 5/9 y almacena el
// resultado en temperaturaCelsius.
// Imprime las temperaturas convertidas:
// - Imprime la temperatura en grados Fahrenheit.
// - Imprime la temperatura en grados Celsius.

export const readline = require('readline');
export let interfaceCapture = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

console.log("1. Farenheit a Celsius");
console.log("2. Celsius a Farenheit");

interfaceCapture.question("Ingrese el número de la opción a la que desea convertir la temperatura: ", function(cv){
    interfaceCapture.question("Ingrese la temperatura por favor: ", function(tp){
        if(cv == 1){
            let c = Math.round((tp -32) * (5/9));
            console.log(tp + "F° = " + c + "C°");
        }else if(cv == 2){
            let f = Math.round((tp * (9/5)) + 32);
            console.log(tp + "C° = " + f + "F°" );
        }else{
            console.log("Opción no disponible");
            interfaceCapture.close();
        }
        interfaceCapture.close();

    });
});