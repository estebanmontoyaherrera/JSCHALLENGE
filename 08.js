// En este desafío, vas a crear un programa que calcula cuánto deberías dejar de propina en un
// restaurante. Aquí están los requerimientos:
// -
// -
// -
// -
// Crear una variable para almacenar el total de la factura.
// Crear una variable para almacenar el porcentaje de propina que quieres dejar. Esto podría
// ser un número fijo (por ejemplo, siempre podrías dejar el 15% de propina), o podrías
// ajustarlo dependiendo de la calidad del servicio.
// Calcula la propina. La propina se calcula como factura * porcentaje / 100.
// Imprime la propina. Finalmente, imprime la propina calculada.

function propina(factura, percentPropina){
    let prop = factura*(percentPropina/100);
    return prop;
}

console.log("La propina es de: ", propina(2500, 10));