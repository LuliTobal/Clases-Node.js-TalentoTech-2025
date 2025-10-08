// // API de Rick and Morty
// // Obtener lista de personajes
// // usando fetch, catch y finally procesarla respuesta 

const urlApi = 'https://rickandmortyapi.com/api/character'

/* Primera parte del ejercicio:
fetch (urlApi, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}).then((res) => {
    const data = res.json();
    return data;
}).then((data) => {
    console.log(data);
}).catch ((e) => {
    console.log(`Ha ocurrido un erro:` + e)
}).finally(() => {
    console.log('Fetch finalizado')
})
/*

/*
// // Hacer lo midmo pero consumir la api usando async y await
// // manejo de try y catch
fetch(urlApi, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}).then(async (res) => { // le avisamos que es una función asincrónica
    const data = await res.json(); //le decimos que data espere que se complete el proceso de traer la info y la guarde en la variable
// // devolver un array con los primeros 5 resultados
    const cincoPrimeros = data.results.slice(0,5); //generamos un nuevo array recortando solo los 5 primeros de data.results
    cincoPrimeros.forEach((pers) => { //hacemos un forEach que recorra el array creado con la porción de data
        console.log(pers)
    });
}).catch((e) => { //si devuelve algun error lo agarramos
    console.log(e) //y lo mostramos
}).finally(() => {
    console.log(`fetch finalizado`) //el final del proceso
});
*/

// O se puede tambien hacer el fetch dentro de una función async
async function cincoPersonajes() {
    try{
        const res = await fetch(urlApi, {"method": "GET"});
        const data = await res.json();
        const cincoPrimeros = data.results.slice(0,5);
        cincoPrimeros.forEach((pers) => {
            console.log(pers)
        });
    } catch(e) {
        console.log(e);
    };
};
 cincoPersonajes();

