//OBJETOS LITERALES:
const persona = {
    //CLAVE : 'VALOR'
    nombre: 'Juan',
    edad: 25,
    pais: 'Argentina',
    //METODOS
    saludar: function() {
        console.log(`Hola! Mi nombre es ${this.nombre} de ${this.edad} años`); //el this. es para usar parametros del mismo objeto, como si dentro de si mismo se llama this y para acceder a sus propiedades se auto llama
   }
};

//Para llamar a la función dentro
persona.saludar();

//OBJETOS FUNCIONALES: función constructora + cración de instancias para crear objetos nuevos usando 'NEW'
//Función constructora: 
function Persona (nombre, edad, pais) {
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;
    this.saludar = function() {
        console.log(`Hola! Me llamo ${this.nombre} y tengo ${this.edad} años`);
    };
};
//Creación de personas con instancias:
const persona1 = new Persona('Lorena', 38, 'Albania'); //le pasamos los argumentos necesarios para la función
const persona2 = new Persona('Paz', 97, 'Mexico');
//Para acceder al metodo:
persona1.saludar();
persona2.saludar();

//DESTRUCTURING OPERATOR - DESESTRUCTURANDO OBJETOS
//Extraemos propiedades del objeto
//declaramos las variables y nombramos entre {} cuales queremos tomar y aclaramos de que objeto queremos tomarlas
const {nombre , edad} = persona;
//despues se utilizan como una variable más:
console.log(nombre);
console.log(edad);

//se puede cambiar el nombre del parámetro - solo al parametro que se corresponde con la instancia, no modifica el nombre del constructor
const {pais: origen} = persona1;
console.log(origen);
console.log(persona2.pais);

//SPREAD OPERATOR - ACUMULADOR
//Combinamos objetos:
const direccion = {
   ciudad: 'Santa Fe',
   pais: 'Rumania',
};
//si tiene dos parametros con el mismo nombre pero distinto valor, los unifica y toma el del ultimo que pasamos
const personaCompleta = {...direccion , ...persona };
console.log(personaCompleta);

//Copiamos objetos:
const copiaPersona = { ...persona };
console.log(copiaPersona);