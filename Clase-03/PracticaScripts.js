//en scripts vamoas a crear uno con nombre "start" y la indicación de que ee comando corre este archivo: "node Practica.js"

console.log('Hola Mundo, corrido con script creado')

//CREACION DE SCRIPTS INTERACTIVOS MEDIANTE PROCESS

//declaramos variable que va a guardar lo que venga desde el comando
//esto va a leer el comando de consola pero le va a quitar las dos primeras palabras .slice(2), trayendo solo los argumentos para definir su accionar
//crea un array donde cada palabra se encuentra en una posición
const argumentos = process.argv.slice(2); //elimina el node/npm y el nombre de archivo

if(argumentos[0] == 'saludar'){ //comando de consola: node PracticaScripts.js saludar Luli
    console.log('Hola', argumentos[1]);
}else if(argumentos[0] == 'despedirse'){ //comando de consola: node PracticaScripts.js despedirse Juancito
    console.log('Chau', argumentos[1]);
}else{
    console.log('comando inexistente')
}
