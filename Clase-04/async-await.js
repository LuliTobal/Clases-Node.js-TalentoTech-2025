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
};

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