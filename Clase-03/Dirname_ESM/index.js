//para usar ESModules tenemos que setear en el package.json que vamos a usar ese tipo de manejo de modulos
//tenemos que poner "type" : "module" en el archivo .json

//importamos libreria de node
import { fileURLToPath } from "url"; 
import path from "path";
import fs from "fs";
//declaramos la variable que contiene el nombre del archivo en el que estamos parados
const __fileName = fileURLToPath(import.meta.url); //trae la ruta del archivo actual
//console.log(`dentro de la variable folName encontramos: ${__fileName}`);
const __dirname = path.dirname(__fileName); // .dirname es un metodo de la libreria path que usando el nombre del archivo obtiene la ruta absoluta -- hasta donde esta ubicado este archivo
//console.log(`dentro de la variable dirname encontramos: ${__dirname}`)

const filePath = path.join(__dirname,'data','texto.txt');

//el metodo para el modulo espera: una ruta(filePath), tipo de archivo ("utf8") y va a traer un error y/o informacion en caso de que este bien y hacemos la función flecha para manejar el error o leer la info de data
fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`info que nos llega del archivo: ${data}`)
    }
});