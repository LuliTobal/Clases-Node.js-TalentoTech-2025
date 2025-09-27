//Funciones (declaración de funciones, HOF: higher order functions)

//FUNCION DECLARADA:

function declarada() {
    console.log('Esta es la función declarada')
};
//como se llama a la función:
declarada();

//
//FUNCION EXPRESADA: tambien conocida como función anonima, se declara dentro de una variable
const expresada = function(){
    console.log('Esta es la función expresada')
};
//como se la llama:
expresada();

//
//FUNCION FLECHA / ARROW FUNCTION:
const flecha = () => {
    console.log('Esta función es flecha')
};
//como la llamamos:
flecha();

//
//PARAMETROS Y ARGUMENTOS
function sumar (num1, num2) { //PARAMETROS son las variables listadas en la declaración de la func
    return resultado = num1 + num2;
}
//Cuando la llamamos le pasamos como ARGUMENTO los valores que reciben parametros
console.log(sumar(17,47));

//
//HOF: Higher Order Functions - Funciones Callback
function operaciones (numA, numB, operacion){ //por el parametro operacion le pasamos una funcion como argumento
    return operacion(numA,numB);
};

//Cuando la llamamos le pasamos como argumento la función a ejecutar con los otros datos
console.log(operaciones(25, 32, (a,b) => a + b))
console.log(operaciones(46, 13, (a,b) => a - b))
//operaciones recibe: el 1er numero, el segund numero y la funcion
//una vez que le llega esa info, manda como argumento el valor de numA y numB a la funcion para que se ejecute
//y ahi pasa al siguiente plano hasta que responda y vuelva al hilo
// te permite elegir que va a hacer con los parametros que recibe, inclusive podria ser una funcion declarada o expresada