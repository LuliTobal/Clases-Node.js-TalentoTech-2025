class auto {
    constructor(marca, modelo, anio, color, kilometro) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.kilometro = kilometro;
    };

    mostrarMayores2028(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}, Color: ${this.color}`)
    }
};

const vehiculos = [
  { marca: "Toyota", modelo: "Corolla", año: 2019, color: "Gris", km: 45000 },
  { marca: "Ford", modelo: "Focus", año: 2017, color: "Azul", km: 72000 },
  { marca: "Chevrolet", modelo: "Cruze", año: 2020, color: "Rojo", km: 31000 },
  { marca: "Volkswagen", modelo: "Golf", año: 2018, color: "Blanco", km: 58000 },
  { marca: "Honda", modelo: "Civic", año: 2021, color: "Negro", km: 15000 },
  { marca: "Nissan", modelo: "Sentra", año: 2016, color: "Plata", km: 89000 },
  { marca: "BMW", modelo: "Serie 3", año: 2019, color: "Azul Marino", km: 40000 },
  { marca: "Audi", modelo: "A4", año: 2022, color: "Gris Oscuro", km: 12000 },
  { marca: "Peugeot", modelo: "208", año: 2018, color: "Rojo Vino", km: 65000 },
  { marca: "Renault", modelo: "Kangoo", año: 2020, color: "Blanco", km: 27000 }
];

const vehiculo = vehiculos.map (vehiculo => new auto(vehiculo.marca, vehiculo.modelo, vehiculo.año, vehiculo.color, vehiculo.km));

console.log(vehiculo)