let frutas = ['pera', 'manzana', 'uva'];
const verduras = ['tomate', 'esparragos', 'zanahoria']

console.log(frutas); //todo el array
console.log(frutas[2]); //para acceder a la info de un espacio del array, el del indice 2 (uva)
console.log(frutas.length) //para conocer el largo del array
console.log(frutas[frutas.length-1])// para acceder al último valor del array

//metodos para agregar al final y al inicio
frutas.push('frutilla'); //agrega al final
frutas.unshift('banana'); //agrega al inicio del array, pasa a ser indice [0]
//vuelvo a llamar al array
console.log(frutas);

//metodos para eliminar al final y al inicio
frutas.pop(); //elimina el ultimo dato
frutas.shift(); //elimina el primer dato
//vuelvo a llamar al array
console.log(frutas);

//
//METODOS:
//
//.join: une los elementos del array en una cadena de texto, por () le pasamos si queremos que haya algun separador
console.log('usando el .join: '+ frutas.join('/'));

//.map: iteración del array
console.log('usando el .map, todas a mayusculas: ' + frutas.map(fruta => fruta.toUpperCase()));

//.filter: compara cada elemento con la condicion
console.log('usando .filter filtramos las frutas que tienen 4 o mas letras: ' + frutas.filter(fruta => fruta.length >= 4));

//.concat: le concatena otro array
console.log('Concatenamos array frutas y array verduras usando .concat: ' + frutas.concat(verduras))

//.reduce: toma un elemento del array y ejecuta una operación, el dato resultante lo acumula en una variable (acum)  
const reducido = frutas.reduce((acum, item) => acum + ' | ' + item);
console.log(reducido);

//
//ITERACIÓN DE ARRAYS: FOREACH & FOR OF
//
//FOREACH:
frutas.forEach((fruta, index) => {
    //console.log(`La fruta ${fruta} se encuentra en la posicion ${index}`)
    console.log(`Fruta num ${index + 1}: ${fruta}`)
});

//FOR OF:
for (const verdura of verduras){
    console.log(`Verdura: ${verdura}`)
};