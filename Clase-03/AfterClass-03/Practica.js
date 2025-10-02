//leemos un txt que contiene información a transformar en un array de objetos
//Inicializamos el proyecto, creamos el package.json y definimos como vamos a usar las librerias (conveniente "module")
//Importamos librerias fs (para leer archivos), path(para armar ruta), fileURLToPath(para saber donde estamso parados)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
//accedemos al archivo .txt
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);//genera la ruta hasta un punto antes de este donde estamos parados

const filePath = path.join(__dirname, 'Datos.txt')//a la ruta generada, al estar en el mismo nivel, directamente le sumamos el nombre del archivo, no necesitamos movernos entre carpetas
//leemos el archivo
fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) {
        console.log(`Se ha producido un error: ${error}`)
    }else{ //manejamos la info para crear el array de objetos
        const lineas = data.trim().split('\r\n'); //creamos por cada salto de linea una posición de un array lineas
        const propiedades = lineas[0].split(','); //agarramos la primer linea y la subdividimos, para obtener las propiedades del objeto

        const lineasUsuarios = lineas.slice(1); //creamos un nuevo array desde la posición 1 del array de lineas, para que no incluya los nombres de las propiedades del objeto
        const usuarios = lineasUsuarios.map(usuario => { //hacemos un map del array de las lineas con la info de los usuarios, por cada linea (p/c usuario):
            const datos = usuario.split(','); //extrae los datos generando un nuevo array con la información, usando la , como divisor de cada elemento
            let objeto = {} //creamos un vacio que vamos a iterar
            propiedades.forEach((propiedad, index) => { //usamos el forEach para iterar el array donde estan los nombres de las propiedades del objeto, por cada propiedad en posición index:
                objeto[propiedad] = datos[index].trim() //va a tomar el objeto declarado, le va a decir que en esa vuelta el objeto llama a la propiedad correspondiente y le da el valor del dato del usuario en la misma posición index
            });
            return objeto;
        })

        console.log(usuarios);
    }
});

