//declaramos la función, y le pasamos por parametros una función declarada fuera
function taskAsync(callback) {
    setTimeout( function() {
        console.log(`Tarea asincrónica completada`);//una vez pasados los 3 seg, se ejecuta esta linea y despues la función que entro como callback
        callback(); //llamada a la función asincrónica se quejecuta despues porque esta ordenado así dentro de la funcion
    }, 3000)//esta función se va a resolver 3000 milesimas de segundo despues
};

console.log(`Tarea a ejecutarse primero`);
taskAsync(function(){ //llamado y pase de función callback
    console.log('Fin de la tarea')//funcion que se pasa como argumento a ejecutar asyncrónicamente
});
