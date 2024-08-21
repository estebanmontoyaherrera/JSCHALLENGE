// Juego de Adivinanzas
// En este desafío, vas a crear un simple juego de adivinanzas. Aquí están los requerimientos:
// -
// -
// -
// -
// Genera un número aleatorio entre 1 y 10: Este será el número que el jugador debe adivinar.
// Crea una variable para almacenar la suposición del jugador: Para este desafío, puedes
// asignar un valor fijo a esta variable. Sin embargo, en un programa real, probablemente
// obtendrías este valor de alguna entrada del usuario.
// Comprueba si la suposición del jugador es correcta:
// - Si el jugador adivina el número, imprime un mensaje de felicitación.
// - Si la suposición es demasiado alta, imprime un mensaje que indique que la suposición es
// demasiado alta.
// - Si la suposición es demasiado baja, imprime un mensaje que indique que la suposición es
// demasiado baja.
// Permite al jugador tener un máximo de 3 intentos para adivinar el número. Si no adivinan el
// número en 3 intentos, informa al jugador que ha perdido y revela el número.

const readline = require('readline');
let interfaceCapture = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});
let num_random=Math.floor(Math.random() * (10-1+1)+1);
// let inputs = [];
let count = 1;

function askQuestion() {
    if (count < 4) {
        console.log("Intento " + count);
        interfaceCapture.question('Ingresa un número: ', (res) => {
            //inputs.push(res);
            if(res < num_random){
                console.log("Número demasiado bajo");
            }
            if(res > num_random){
                console.log("Número demasiado alto");
            }
            if(res == num_random){
                console.log("Felicitaciones! adivinaste el número");
                interfaceCapture.close();
                count = 5;
            }
            count++;
            askQuestion();
        });
    }else if(count==4){
        interfaceCapture.close();
        console.log("El número a adivinar era: " + num_random);

    }
}
// console.log("El número random es: " + num_random);
console.log("Tienes 3 intentos para adivinar el número entre 1 y 10");
askQuestion();



