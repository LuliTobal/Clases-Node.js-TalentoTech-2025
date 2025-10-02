//Crear un nuevo proyecto mediante npm init -y
//Configurar un script en el package.json que ejecute este archivo automaticamente
console.log('Primer item hecho - Programa en funcionamiento')

//implementar un sistema simple para procesar comandos desde la terminal
const argumentos = process.argv.slice(2);


if (argumentos[0] == 'GET') {
    console.log('Toma un dato');
} else if (argumentos[0] == 'POST') {
    console.log(`Recibimos la información correctamente: ${argumentos.slice(1)}`);
} else if (argumentos[0] == 'PUT'){
    console.log(`Modificamos el item con ID: ${argumentos[1]}`)
} else if (argumentos[0] == 'DELETE'){
    console.log(`El articulo ${argumentos[1]} ha sido eliminado exitosamente`)
} else {
    console.log('Comando no reconocido, sepa disculpar')
}
//Comando GET que imprima "Toma un dato"
//Comando POST(data) que imprima: "Recibimos la información correctamente y trae: ${data}"
//Comando PUT(id) que imprimia:"Modificamos el item con ID: ${id} satisfactoriamente"
//Comando DELETE(id) que imprima: "item ${id} ha sido eliminado"
