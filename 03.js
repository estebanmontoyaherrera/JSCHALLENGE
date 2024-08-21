// Generador de Nombres de Usuario
// Para este desafío, crearás un programa que generará un nombre de usuario único a partir de un
// nombre y un apellido. Aquí están los requerimientos:-
// -
// -
// Crea dos variables para almacenar el nombre y el apellido. Estos serán los datos de entrada
// para tu programa.
// Genera el nombre de usuario. Un enfoque común para la generación de nombres de usuario
// es combinar partes del nombre y el apellido y añadir un número al final. Por ejemplo,
// podrías tomar las tres primeras letras del nombre, las tres primeras letras del apellido, y un
// número aleatorio para crear un nombre de usuario.
// Imprime el nombre de usuario. Finalmente, imprime el nombre de usuario generado para
// mostrar el resultado de tu programa.

const readline = require('readline');
let interfaceCapture = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

interfaceCapture.question("Ingresa tus nombres: ", function(names){
    interfaceCapture.question("Ingresa tus apellidos: ", function(surnames){
        let name = names.split("");
        let surname = surnames.split("");
        let name3 = [];
        let surname3 = [];
        for(let i = 0; i<4; i++){
            name3[i]=name[i];
            surname3[i]=surname[i];
        }
        let finalName = name3.concat(surname3);
        console.log(finalName.join(""));
        interfaceCapture.close();
    })
})