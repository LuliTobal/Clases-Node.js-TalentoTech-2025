//CORRESPONDIENTE A PRESENTACIÓN CLASE 3 - VIDEO CLASE 2

//EJERCICIO CON ARRAY

//Crear array con 10 num
let numeros = [];

for (let index = 0; index < 10; index++) {
    const numero = parseFloat((Math.random()*1000).toFixed(0));
    numeros.unshift(numero);
}

console.log(`Estos son los numeros: ${numeros}`);     

//Usando un metodo de array calcular el valor del IVA

let ivas = numeros.map(numero => parseFloat((numero - (numero * 0.79)).toFixed(2)));

console.log(`Estos son los valores de los ivas: ${ivas}`);

//Mostrar el valor con IVA

numeros.forEach((numero, index) => {
    let precioConIva = (numero + ivas[index]).toFixed(2); // Agregamos toFixed para controlar los decimales
    //console.log(precioConIva);
    console.log(`El precio es $${numero} - con IVA incluido: $${precioConIva}`);
});

//EJERCICIO OBJETOS:
//Crear una array con 10 objetos, donde cada uno represente un automovil: Marca, Modelo, Año, Color
const autos = [];

class auto {
    constructor(marca, modelo, anio, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    };

    mostrarMayores2028(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}, Color: ${this.color}`)
    }
}; 

autos.push( new auto('Toyota', 'Corolla', 2020 , 'Blanco')),
autos.push( new auto('Ford', 'Fiesta', 2018 , 'Azul')),
autos.push( new auto('Volkswagen', 'Golf', 2021 , 'Rojo')),
autos.push( new auto('Chevrolet', 'Cruze', 2019 , 'Negro')),
autos.push( new auto('Honda', 'Civic', 2022 , 'Gris')),
autos.push( new auto('Peugeot', '208', 2020 , 'Naranja')),
autos.push( new auto('Renault', 'Clio', 2017 , 'Verde')),
autos.push( new auto('Nissan', 'Sentra', 2021 , 'Plateado')),
autos.push( new auto('Fiat', 'Argo', 2019 , 'Azul')),
autos.push( new auto('Kia', 'Rio', 2022 , 'Blanco')),
//console.log(autos);
//Usar metodo de array para imprimir todos los datos de los automoviles de años mayor a 2018
autos.forEach((auto) => {
    if (auto.anio >= 2018) {
        auto.mostrarMayores2028();
    }
});

//crear una funcion que recorra el array - usar destructuring para obtener color - función debe acetar un color y devolver cuantos tienen ese color

function contarColores( colorAContar, lista) {
    
    let contador = 0;
    lista.forEach((auto) => { //un forEach que recorre todo el array
        const { color } = auto; //por cada auto en la posición en la que está, toma el dato color
        if (colorAContar == color) { //compara el color que tomó
            contador ++; //si coincide con el buscado aumenta el valor del contador
        }   
    })
    
    console.log(`En total son ${contador} autos de color ${colorAContar}`) //una vez que recorre todo el array y que sale del forEach imprime por cosola la info

};
contarColores('Blanco', autos);