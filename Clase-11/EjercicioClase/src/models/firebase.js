//archivo que vamos a usar para probar las funciones
//documentacion de firebase: https://firebase.google.com/docs/firestore/manage-data/add-data?hl=es-419
import { db } from "../data/data.js";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"; //importamos metodos para consultas en firebase

//para obtener producto por id
async function obtenerProducto(id) {
    const docRef = doc(db, 'products', 'vZiFFb09wGjJShoaaUcZ'); //crea la referencia a un documento en especifico, primero pasamos la ref a la base de datos completa (db), despues a que collección quiero acceder (products) y el id del objeto al que quiero acceder
    const docSnap = await getDoc(docRef); //respuesta a la busqueda del documento, intenta obtener la info del documento.. va el await porque es una funcion asincronica la peticion a la bd de firbase porque tengo que esperar que me devuelva algo

    if(docSnap.exists()) { //una vez qu termina la busqueda del documento le pregunto si existe el doc al que quise acceder (.exists())
        console.log('Document data:', docSnap.data()); //si devuelve true accedo a la info a traves del .data()
    } else { //si no existe el doc me devuelve ese msj
        console.log('No such document!')
    }
};

//para obtener todos los productos
async function obtenerProductos() {
    const collectionSnap = await getDocs(collection(db, 'products')); //hace el snapshot de la colleción, crea la referencia usando collection() y obtiene todos los docs
    collectionSnap.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
    });
};

//para agregar un producto nuevo
async function agregarProducto(producto) { //pasamos el objeto ya creado
    try {
        //para crear con creación de id automática
        const docRef = await addDoc(collection(db, 'products'), producto); //creamos una referencia del la bd usamos el metodo addDoc, traemos la colección como está(pasamos el acceso a la base de datos (bd), el nombre de la colleción a la que se va a agregar (products)) y pasamos el elemento a agragar que pasamos por params (producto)
            
            //para crear con id propio
            //si el producto no existe se crea uno nuevo, si el id coincide con otro, se sobre escribe con la info nueva al menos que se especifique que deben combinarse
            /* para combinar tesnemos que guardar el objeto en una variable y despues pasarlo en el metodo junto con {merge: true}
            ej:
            const product = doc(db, 'products', <id existente>);
            setDoc(product, {<claveACombinar>: '<nuevoValor>'}, {merge: true};
            
            ej: agregar nvo par clave valor:
            const product = doc(db, 'products', <id existente>);
            setDoc(product, {<claveNueva>: '<valor>'}, {merge: true};*/
        console.log('Doc ID:', docRef.id)
    } catch (error) {
        console.log('el producto no se puede crear', error)
    }
};

async function editarProducto(producto) {
    try {
        //opcion con elementos pasado por param:
        await updateDoc(doc(db, 'products', producto.id), {
            price: producto.price,
            name: producto.name
        });
        /*opcion manual:
        const docEditar = doc(db, 'products', 'ATYHs7i8dHD3I8oEO1fB') //traigo el documento que voy a editar con el id
        await updateDoc(docEditar, {
            name: 'lapiz' //le paso la clave que voy a querer modificar y el nuevo valor que va a guardar
        });

        para eliminar un campo: entre los corchetes
        <clave/campo>: deleteField();
        */
    } catch (error) {
      console.log('no se pudo editar el producto')  
    };
};

async function eliminarProducto(id) {
    try{
        await deleteDoc(doc(db, 'products', id)); //le pasamos al metodo delete la referencia del documento que queremos eliminar
        console.log('el producto se eliminó con exito')
    } catch (error) {
        console.log('No pudo eliminarse el producto')
    };
};

obtenerProducto();
obtenerProductos();
//agregarProducto({category: "libreria", name: "lapicera", price: 524, productID: 2});
//editarProducto({id: 'GzPbfjd8xzAIuPN4VpmB', price: 287, name: "lapiz"});
//eliminarProducto('id que se obtiene de la bd');

//docSnap se llama asi porque es como un snapshot (una foto) del documento en el moento que hago la peticición