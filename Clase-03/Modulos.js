// CON CommonJS - los modulos que requiero aunque no se utilice se van a compilar igual

//para exportar funciones - suponiendo que esta en un archivo calculos.js
function sumar (a,b) {
    return a + b;
};

function restar (a, b) {
    return a - b;
};

module.exports = {sumar, restar}; //para exportar las funciones

//Para importar las funciones y usarlas en otro archivo - suponiendo que esta en otro archivo <archivoDondeUsaLasFunciones>.js
const {sumar, restar} = require('./calculos.js') //declaro las variables que voy a usar y las requiero del archivo donde estan declaradas

//las llamamos como cualquier otra funcion
console.log(sumar(2.8));
console.log(restar(9,6));

////////

//CON ES_Modules
//para exportar suponiendo que esta en un archivo calculos.js

export function suma(a,b){
    return a + b;
};

export function resta(a,b){
    return a - b;
};

//Para importar las funciones y usarlas en otro archivo - suponiendo que esta en otro archivo <archivoDondeUsaLasFunciones>.js
import {suma , resta} from './calculos.js';

//las usamos como cualquier otra
console.log(suma(4,5));
console.log(resta(3,1));