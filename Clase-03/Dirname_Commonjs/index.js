//CON Common.js

const fs = require("fs") //importamos el modulo nativo fs para leer archivos
const path = require("path") //tambien es un modulo de node.js

//guardamos la ruta al archivo ejemplo.txt en una variable - __dirname = C:\Users\lulit\Desktop\Practica\TalentoTech\Node.js 2025\Clase-03\Dirname
const filePath = path.join(__dirname,'data','ejemplo.txt') //crea la ruta del archivo, __dirname (la ruta al archivo donde estaamos), 'data' (que busque la carpeta data), 'ejemplo.txt' (nombre del archivo al que quiere acceder)

//si la carpeta data estuviera fuera de la de Dirname, estuviera en la carpeta clase-03 tengo que formar la ruta para que vaya para atras, como con cd usamos ..
//quedaria:
//const filePath = path.join(__dirname,..,'data','ejemplo.txt')

//consoleamos __dirname y la ruta para ver como quedaron
//console.log(`la ruta actual __dirname: ${__dirname}`)
//console.log(`la ruta quedó de la siguiente manera: ${filePath}`)

//el metodo para el modulo espera: una ruta(filePath), tipo de archivo ("utf8") y va a traer un error y/o informacion en caso de que este bien y hacemos la función flecha para manejar el error o leer la info de data
fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`info que nos llega del archivo: ${data}`)
    }
});