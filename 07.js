// 7. Validador de Dirección de Correo Electrónico
// En este desafío, crearás un programa que valide una dirección de correo electrónico. Aquí están los
// requerimientos:
// -
// -
// -
// Crear una variable para almacenar la dirección de correo electrónico. Esta será la dirección
// de correo electrónico que tu programa comprobará.
// Comprobar si la dirección de correo electrónico es válida. Para ser válida, una dirección de
// correo electrónico debe tener exactamente un símbolo de arroba (@), al menos un punto
// después del símbolo de arroba, y al menos un carácter antes del símbolo de arroba y
// después del punto. Este es un chequeo básico y no cubre todas las posibilidades de formatos
// de correo electrónico válidos, pero servirá para este desafío.
// Imprime un mensaje indicando si la dirección de correo electrónico es válida o no.

let correo = "md3r@.com";
let arroba = 0;
let punto = 0;
let caracterAntes = 0;
let caracterDespues = 0;
let acorreo = correo.split("");
let indexArroba=0;
let indexPunto=0;

//foreach necesario para saber el índice del arroba y del punto
acorreo.forEach((el, index) =>{
    if(el=="@"){
        indexArroba=index;
    }
    if(el=="."){
        indexPunto=index;
    }
});

acorreo.forEach((el, index) =>{
    if(el=="@"){
        indexArroba=index;
        arroba += 1;
    }
    if((typeof(el)=="string" || (typeof(el)=="number")) && (index<indexArroba)){
        caracterAntes += 1;
    }
    if((typeof(el)=="string" && index>indexPunto)){
        caracterDespues += 1;
    }
    if((el == ".") && (index>indexArroba)){
        indexPunto=index;
        punto += 1;
    }
});

if(arroba!=0 && caracterAntes!=0 && caracterDespues!=0 && punto!=0){
    console.log("El correo cumple con las condiciones");
}else{
    console.log("El correo no cumple con las condiciones");
}


