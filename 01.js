// En este desafío, crearás un programa que calcula el Índice de Masa Corporal (BMI, por sus siglas en
//     inglés) a partir del peso y la altura de una persona. Aquí están los requerimientos:
//     -
//     -
//     -
//     -
//     Crear dos variables para almacenar el peso (en kilogramos) y la altura (en metros). Estos
//     serán los datos de entrada para tu programa.
//     Calcula el BMI. El BMI se calcula con la fórmula peso / altura^2.
//     Imprime el BMI. Finalmente, imprime el BMI calculado.
//     Interpreta el BMI. Según los estándares de la Organización Mundial de la Salud, un BMI
//     menor a 18.5 se considera bajo peso, entre 18.5 y 24.9 se considera normal, entre 25 y 29.9
//     se considera sobrepeso, y 30 o más se considera obesidad. Imprime un mensaje
//     correspondiente al rango en el que se encuentra el BMI calculado.

const readline = require('readline');
let interfaceCapture = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

interfaceCapture.question("Cúal es su peso actual (en kilogramos)?: ", function(peso){
    interfaceCapture.question("Cúal es su altura (en metros) ?: ", function(altura){
    let bmi = Math.round(peso/(Math.pow(altura, 2)));
    console.log("su peso es: " + peso + "kg" + " y su altura es: " + altura + "m");
    console.log("Su BMI es de: " + bmi);
    if(bmi < 18.5){
        console.log("Su bmi se considera bajo");
    }else if(bmi >= 18.5 && bmi <= 24.9){
        console.log("Su bmi se considera normal");
    }else if(bmi >= 25 && bmi <=29.9){
        console.log("Su bmi se considera con SOBREPESO");
    }else if(bmi >= 30){
        console.log("Su bmi se considera con OBESIDAD");
    }

    interfaceCapture.close();

   });
});
