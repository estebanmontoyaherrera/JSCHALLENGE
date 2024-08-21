// En este desafío, crearás una simple agenda telefónica. Aquí están los requerimientos:
// -
// -
// -
// -
// Crear un objeto para almacenar los contactos de la agenda telefónica. Cada contacto estará
// representado por un par de propiedades: el nombre de la persona y su número de teléfono.
// Añadir algunos contactos a la agenda. Cada contacto debe ser añadido como una nueva
// propiedad del objeto de la agenda. El nombre de la persona será la clave, y el número de
// teléfono será el valor.
// Crea una variable que almacene el nombre de un contacto para buscar.
// Buscar un contacto en la agenda. Si el contacto existe, imprime su número de teléfono. Si no
// existe, imprime un mensaje indicando que el contacto no se encontró.

// var readline = require('readline');
// var interfaceCapture = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

class contacto {
    nombre; 
    telefono;
    constructor(name, tel){
        this.nombre=name;
        this.telefono=tel;
    }

}
class agenda {
    contactos = [];

    constructor(){
        console.log("Agenda creada");
    }

    almacenar(contact){
        this.contactos.push(contact);
        console.log("Contacto almacenado con exito");
    }
    verContactos(){
        console.log("Mostrando contactos guardados en la agenda: ");
        this.contactos.forEach((el)=>console.log(el));
    }
    buscarContacto(nombre){
        let flag = false;
        console.log("Buscando contacto...");
        this.contactos.forEach((el, index)=>{
            if(el.nombre==nombre){
                console.log("Teléfono: " + el.telefono);
                flag=true;
            }
        })
        if(flag==false){
            console.log("El contacto no se pudo encontrar");
        }
    }
}

let age = new agenda();
let contacto1 = new contacto("Miguel", 2142617);
let contacto2 = new contacto("Ana", 1345);
let contacto3 = new contacto("Laura", 76686);
let contacto4 = new contacto("Juan", 2435);
let contacto5 = new contacto("Alguien", 97897);
let contacto6 = new contacto("Rodrigo", 345345);

age.almacenar(contacto1);
age.almacenar(contacto2);
age.almacenar(contacto3);
age.almacenar(contacto4);
age.almacenar(contacto5);
age.almacenar(contacto6);

age.verContactos();
age.buscarContacto("Miguel");


