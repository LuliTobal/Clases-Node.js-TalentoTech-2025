//importamos la libreria filesystem
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

//cramos la ruta al documento json
//obtenemos el directorio actual y navegamos hasta el json
const __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName);
const filePath = path.join(__dirname, 'productos_db.json');

//leemos el archivo -- hasta acá obtenemos la info en formato json
async function leerBD() {
    try{
        const data = fs.readFileSync(filePath, 'utf-8');
        const productos = await JSON.parse(data); //data es formato json, por lo que lo pasamos a objeto de js
        return productos;
    }catch (error){
        console.log('se produjo un error al intentar leer el archivo', error)
    }
};

//logica para agregar un producto nuevo
async function agregarNuevo(product) {
    //const data = await JSON.stringify(producto); //convertimos el bjeto literal producto en lenguaje json
    const baseDatos = await leerBD();
    baseDatos.push(product);
    const baseActualizada = JSON.stringify(baseDatos, null, 2);
    fs.writeFileSync(filePath, baseActualizada, 'utf-8')
    return product;
};

export async function obtenerProductos() {
    const productos = await leerBD();
    return productos;
};
//agregadooo
export async function agregarProducto(producto) {
    const baseActualizada = await agregarNuevo(producto);
    return baseActualizada;
};