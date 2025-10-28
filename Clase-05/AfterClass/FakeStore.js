const url = 'https://fakestoreapi.com/products';

async function traerProductos () {
    try{
        const response = await fetch(url , {
            method: 'GET',
        })
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log(`ERROR AL TRAER LOS PRODUCTOS - ${e}`)
    }
};

async function traerUnitario (id) {
    try{
        const response = await fetch(`${url}/${id}` , {
            method: 'GET',
        })
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log(`ERROR AL TRAER PRODUCTO - ${e}`)
    }
};

async function crearProducto (producto) {
    try{
        const response = await fetch(url , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(producto)
        })
        const data = await response.json();
        console.log(`el producto agregado: ${data.id}`);
    } catch (e) {
        console.log(`ERROR AL CREAR PRODUCTO - ${e}`)
    }
};

async function actualizarProducto (producto) {
    try{
        const response = await fetch(`${url}/${producto.id}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(producto)
        })

        const data = await response.json();
        console.log(data);

    }catch (e){
        console.log(`ERROR, PRODUCTO NO ACTUALIZADO - ${e}`)
    }
}

async function eliminarProducto (id) {
    try{
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })

        const data = await response.json();
        console.log(data);

    }catch(e) {
        console.log(`ERROR AL ELIMINAR PREODUCTO - ${e}`)
    }
}

crearProducto({"id": 82,
"title": "Probando",
"price": 354,
"description": "es una prueba para ver si funciona",
"category": "Prueba",
"image": "http://example.com"
});
//traerProductos();
//traerUnitario(14);
//eliminarProducto (7);
/*actualizarProducto ({"id": 4,
"title": "Probando",
"price": 354,
"description": "es una prueba para ver si funciona",
"category": "Prueba",
"image": "http://example.com"
});*/