//CLASES BASE
//Usa palabra class
class Persona {
    //función constructora, le pasamos por param los valores y dentro creamos como un objeto
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //Metodos y funciones por fuera del constructor
    saludar(){
        console.log(`Hola! Mi nombre es ${this.nombre}, tengo ${this.edad} años`);
    }
};

//CLASE DERIVADA - USANDO HERENCIA: las nuevas clases van a tener las características de la que se extienden ademas de las propias
class Estudiante extends Persona {
    constructor(nombre, edad, curso) { //me entra por parametro, lo que corresponde a la clase base se lo paso como argumentos
        super(nombre, edad); //llama al costructor de la clase padre
        this.curso = curso;//Esta es la propia
    };
    //metodo de la clase 
    estudiar() {
        console.log(`El estudiante ${this.nombre} se encuentra cursando ${this.curso}`)
    };
};
//Instanciando Estudiante
const estudiante1 = new Estudiante('Tomas', 54, 'Matemática aplicada');
const estudiante2 = new Estudiante('Fatima', 29, 'Urbanismo');
//tambien tienen acceso a los metodos heredados
estudiante1.estudiar();
estudiante1.saludar();

estudiante2.saludar();
estudiante2.estudiar();