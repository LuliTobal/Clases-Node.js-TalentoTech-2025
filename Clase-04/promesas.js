//PROMESAS:
// 2 estados: resuelto o rejected
// 3 metodos: .then() .catch() .finally()

//declaramos función que contiene el proceso
function ejemploPromesa(){ //esta función retorna una nueva promesa
    return new Promise(function (resolve, reject){ // esta promesa tiene un callback puede ser tambien una función flecha: (res, rej) => {}
        setTimeout(() => { //le seteamos el tiempo de respuesta
            numero = Math.random();
            if(numero < 0.5) {
                resolve(`tarea asincrónica finalizada - numero: ${numero}`) 
            } else {
                reject(new Error(`Ha fallado la tarea asincrónica, numero: ${numero}`)) //Si algo falla en el proceso devuelve el rechazo
            }
        }, 3000)
    }) 
}

//para llamar a la promesa:
ejemploPromesa().then((data) => { //llamamos al metodo then y traemos por data la info de la promesa
    console.log(data); //en este caso consoleamos la info que trae, tanto si fue resuelta como si no
}).catch((error) => { //para manejar errores
    console.log(error);
}).finally(() => {
    console.log(`ejecución de la promesa finalizada`)
});

//Asi NO se la llama solo, se puede hacer con uso de ASYNC/AWAIT que explicamos abajo
const data = ejemploPromesa()
console.log(data)

//ASYNC/AWAIT:
//Le decimos con async que esa función en algun momento del proceso va a mandar a la cola queue una parte
//Sabe cual es el proceso por el uso de await
async function ejemploAsyncAwait() {
    try {
        const data = await ejemploPromesa()
        const data1 = await ejemploPromesa()
        const data2= await ejemploPromesa()
        console.log (`data: ${data}, data1 ${data1}, data2 ${data2}`)
    }catch(e){
        console.log(e)
    }
    
}

//cuando la llamemos:
ejemploAsyncAwait() //va a llamar a la funcion, una vez que llegue al await va a mandar esto al queue y una vez que reciba data se ejecuta