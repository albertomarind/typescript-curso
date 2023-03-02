//Tipado básico
let numero: number = 0;
let nombre: string = 'Jose';
let esCasado: boolean = false;
let nulo: string | null = null;
let indefinido: string | undefined = undefined;

//Tipado en arreglos
let numeros: number[] = [1, 2, 3, 4, 5];
let numeros2: Array<number> = [1, 2, 3, 4, 5];

//Tipo any
let datosAleatorios: any[] = [1, 'nombre', true];


//Tipo unknown
/*
* Posibles valores de typeof
"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"
* */

let objeto: unknown;
if (objeto && typeof objeto === 'object') {
    objeto.toString();
}

function sumar(num1: unknown, num2: unknown) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
}


//Tipado en objetos
let persona: { nombre: string, edad: number };
persona = {
    nombre: 'Juan',
    edad: 16
};

//Tipado de objetos mas complejos
let persona1: {
    nombre: string,
    edad: number,
    pasatiempos: string[],
    mascota: {
        nombre: string,
        edad: number
    }
};

persona1 = {
    nombre: 'Jesus',
    edad: 36,
    pasatiempos: [
        'Videojuegos',
        'Natación',
        'Football'
    ],
    mascota: {
        nombre: 'Firulais',
        edad: 5
    }
};

//Propiedades opcionales en objetos
let datosPersonales: {
    telefono: string,
    correo: string,
    direccion?: {// Se agrega un signo de interrogación
        calle: string;
        ciudad: string;
        estado: string
    }
};

datosPersonales = {
    telefono: '123-45-78',
    correo: 'micorreo@correo.com'
};

//Parametros opcionales en funciones
function mostrarAlerta(titulo: string, descripcion?: string) {
    if (descripcion) {

    }
}

mostrarAlerta('Titulo');

//Parametros y valores de retorno
function restar(num1: number, num2: number): number {
    return num1 - num2;
}

function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}

function mostrarMensaje2(mensaje: string): string | never {
    if (mensaje) {
        return mensaje;
    } else {
        throw new Error('Cadena vacia');
    }
}

function mostrarMensajes(mensajes: string[]): void {
    mensajes.forEach((mensaje: string) => {
        console.log(mensaje);
    });
    mensajes.forEach(function (mensaje: string) {
        console.log(mensaje);
    });
}

//Uso de tipado con callbacks ()=>void

function obtenerUsuarioDeApi(callback: (usuario: { nombre: string, edad: number }) => void) {
    setTimeout(() => {
        let usuario: { nombre: string, edad: number } = {
            nombre: 'Pedro',
            edad: 15
        };
        callback(usuario);
    }, 3000);
}

obtenerUsuarioDeApi((usuario: { nombre: string, edad: number }) => {
    console.log(usuario);
});

//Tuplas
let futbolista1: [nombre: string, numero: number] = ['Ronaldo', 7];
let futbolista2: [string, number] = ['Messi', 10];
let temperatura: [number, string, number, string] = [20, 'C', 23, 'F'];
let campoFormulario: [string, { maxlength: number, required: boolean }] = [
    'text',
    {
        maxlength: 25,
        required: true
    }
];

//Ejemplo:
function crearCampoInputFormulario(campo: [string, { maxlength: number, required: boolean }]) {
    const input: HTMLInputElement = document.createElement('input') as HTMLInputElement;
    input.type = campo[0];
    input.maxLength = campo[1].maxlength;
    input.required = campo[1].required;
    return input;
}

crearCampoInputFormulario(['password', {maxlength: 20, required: true}]);

//Enums (Grupos de constantes etiquetadas)
enum Rol {
    Usuario, //Usuario = 0
    Capturista, //Capturista = 1
    Administrador, //Abajo = 2
}

if (Rol.Usuario === 0) {

}

enum Direccion {
    Norte = 5,
    Sur = 6,
    Este = 7,
    Oeste = 8
}

enum TeclaMovimiento {
    Arriba = 'W',
    Derecha = 'D',
    Abajo = 'S',
    Izquierda = 'A'
}

//Ejemplo
let persona4: {
    correo: string,
    rol: Rol
};

persona4 = {
    correo: 'persona@correo.com',
    rol: Rol.Administrador
};

if (persona4.rol === Rol.Administrador) {
    console.log('Eres un administrador')
}

switch (persona4.rol) {
    case Rol.Usuario :
        console.log('Eres un usuario');
        break;
    case Rol.Capturista :
        console.log('Eres un capturista');
        break;
    case Rol.Administrador :
        console.log('Eres un administrador');
        break;
    default:
        console.error('Rol incorrecto');
}

//Union type
let valorNumerico: number | string;
valorNumerico = 5;
valorNumerico = "16";

function multiplicar(num1: number | string, num2: number | string): number {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 * num2;
    } else {
        return Number(num1) * Number(num2);
    }
}

//Literal types
const genero: 'masculino' | 'femenino' = "masculino";

let rol1: 'usuario' | 'capturista' | 'administrador' | 0 | 1 | 2;

//Ejemplo
function mostrarRol(rol: 'usuario' | 'capturista' | 'administrador' | 0 | 1 | 2): void {
    console.log('Tu rol es: ' + rol);
}

mostrarRol('capturista');
mostrarRol(2);

//Ejemplo:
function comparar(a: number, b: number): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

//Type aliases

type Coordenada = {
    lat: number;
    lng: number;
};

interface Coordenada1 {
    lat: number;
    lng: number;
}

function mostrarCoordenadas(coordenada: Coordenada) {
    console.log(coordenada.lat, coordenada.lng);
}

type Genero = 'masculino' | 'femenino';
const genero1: Genero = 'femenino';

type OnlyRol = 'usuario' | 'capturista' | 'administrador' | 0 | 1 | 2;
let rol2: OnlyRol;

function mostrarOnlyRol(rol: OnlyRol) {
    console.log('Tu rol es: ' + rol);
}

mostrarOnlyRol('usuario');
mostrarOnlyRol(2);


//Interfaces

interface Persona {
    nombre: string;
    apellido: string;
    fechaNacimiento?: Date;

    nombreCompleto(): string;
}

interface Profesor extends Persona {
    aplicarExamen(): void;
}

interface Evaluador {
    evaluarProfesor(profesor: Profesor): boolean;
}

interface Director extends Profesor, Evaluador {
    despedirProfesor(): void;
}


let director: Director = {
    nombre: 'Ricardo',
    apellido: 'Lopez',
    nombreCompleto(): string {
        return this.nombre + this.apellido;
    },
    despedirProfesor() {
        console.log('Despedir');
    },
    aplicarExamen(): void {
        console.log('Aplicar examen');
    },
    evaluarProfesor(profesor: Profesor): boolean {
        return true;
    }
};

// Type assertions
let input: HTMLInputElement = document.getElementById('id') as HTMLInputElement;
//input.value

let persona10 = { // No importa si es let o const, marcaria error si cambio la referencia o un valor de las prop
    nombre: 'Jose',
    edad: 18
} as const;

//Marcaria error
//persona10 = {};
//persona10.edad = 35;
//persona10.nombre ='Maria';
