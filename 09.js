// En este desafío, crearás un programa que implemente el cifrado César, una técnica simple de cifrado
// de sustitución en la que cada letra en el texto original es reemplazada por una letra cierto número
// de posiciones más adelante en el alfabeto. Aquí están los requerimientos:
// -
// -
// -
// -
// Crear una variable para almacenar el mensaje a cifrar.
// Crear una variable para almacenar el desplazamiento. Este es el número de posiciones que
// cada letra del mensaje será desplazada en el alfabeto.
// Cifra el mensaje. Para cada letra del mensaje, encuentra la letra que está desplazada en el
// alfabeto y reemplaza la original por ella. Ten en cuenta que debes tratar de manera especial
// los espacios y otros caracteres no alfabéticos.
// Imprime el mensaje cifrado.

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
let message = "hola estoy ocupado";
let position = 3;

function cifrado(message){
    let messageArray = message.split("");
    messageArray.forEach((el, index) => {
        alphabet.forEach((elemen, indx) =>{
            if(el == elemen){
                let pos = indx + 3;
                if(indx == 27){
                    pos = 2;
                }
                if(indx == 26){
                    pos = 1;
                }
                if(indx == 25){
                    pos = 0;
                }
                if(el == ""){
                    console.log("_");
                }
                console.log(alphabet[pos]);
                // console.log(el, elemen);
            }
        })
        // console.log(index);
    });
    // console.log(messageArray);
}

cifrado(message);
