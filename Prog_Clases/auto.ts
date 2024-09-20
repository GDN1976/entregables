// Clase Ruedas
class Ruedas {
    tipo: string;
    tamaño: number;

    // Constructor que inicializa el tipo y tamaño de las ruedas
    constructor(tipo: string, tamaño: number) {
        this.tipo = tipo; // Tipo de ruedas (e.g., Deportivas, Todo terreno)
        this.tamaño = tamaño; // Tamaño de las ruedas en pulgadas
    }
}

// Clase Motor
class Motor {
    potencia: number;
    tipo: string;

    // Constructor que inicializa la potencia y el tipo de motor
    constructor(potencia: number, tipo: string) {
        this.potencia = potencia; // Potencia del motor en caballos de fuerza (HP)
        this.tipo = tipo; // Tipo de motor (e.g., V8, Eléctrico)
    }
}

// Clase Auto
class Auto {
    marca: string;
    modelo: string;
    ruedas: Ruedas;
    motor: Motor;

    // Constructor que inicializa la marca, modelo, ruedas y motor del auto
    constructor(marca: string, modelo: string, ruedas: Ruedas, motor: Motor) {
        this.marca = marca; // Marca del auto (e.g., Ford)
        this.modelo = modelo; // Modelo del auto (e.g., Mustang)
        this.ruedas = ruedas; // Objeto de la clase Ruedas
        this.motor = motor; // Objeto de la clase Motor
    }

    // Método para mostrar los detalles del auto en la consola
    mostrarDetalles(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
        console.log(`Motor: ${this.motor.tipo} con ${this.motor.potencia} HP`);
        console.log(`Ruedas: ${this.ruedas.tamaño} pulgadas, Tipo: ${this.ruedas.tipo}`);
    }
}

// Instanciando las clases
const misRuedas = new Ruedas('Deportivas', 18); // Creando un objeto Ruedas
const miMotor = new Motor(300, 'V8'); // Creando un objeto Motor
const miAuto = new Auto('Ford', 'Mustang', misRuedas, miMotor); // Creando un objeto Auto

// Mostrando los detalles del auto
miAuto.mostrarDetalles(); // Llamando al método para imprimir los detalles en la consola
