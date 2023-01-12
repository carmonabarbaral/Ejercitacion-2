//  Variables y Constantes: Crear variables y almacear valores

// Ej. 1: Crear 5 _variables_ que contengan un _string_.

let dia = "martes";
let mes = "Enero";
let signo = "Tauro";
let nombre= "Barbara";
let ocupacion = "docente";

//Ej. 2: Crear 5 _variables_ que contengan un _número_.//
 let edad = 36;
 let dni = 40152654;
 let cantidadHijos = 1;
 let mascotas = 1;
 let hermanos = 2;

// Ej. 3: Crear 5 _variables_ que contengan un valor _booleano_.//

let argentinaCampeon = true;
let franciaFinalista = true;
let franciaCampeon = false; 
let muchoFrio = false;
let teamVerano = true; 

//  Funciones: Crear funciones

// Ej. 4: Que _retorne_ una string que llega por parámetro. La función puede tener cualquier nombre.

function Bienvenido () {
    return ("Bienvenido"+persona);
}
let persona = "Bruno";
alert (Bienvenido());

// Ej. 5: Que _retorne_ la suma de dos números que llegan por parámetro.
 function suma(a,b) {
    return a+b ;
 }
let total = suma(150,30);
console.log  (total);
// Ej. 6: Que _retorne_ la resta de dos números que llegan por parámetro.
function resta(a,b) {
    return a-b;
}
let total2 = resta (1000,850);
console.log (total2);

// Ej. 7: Que _retorne_ la multiplicacion de dos numeros.
function multiplicacion(a,b) {
    return a*b;
}
let total3 = multiplicacion (125,3);
console.log (total3);

//Ej. 8: Que _retorne_ la division entre dos numeros.
function division(a,b) {
    return a/b;
}
let total4= division(800,2);
console.log (total4);

// Ej. 9: Que _retorne_ el resto de la division entre dos numeros.
function modulo(a,b) {
    return a%b;
}
let resultado5 = modulo (15,2);
console.log (resultado5);

//Ej. 10: Crear una funcion que retorne la union de dos nombres que van a llegar por parametro
const hola = (nombre, apellido) => {
    console.log(`hola ${nombre}  ${apellido} bienvenido?.`);
  };
  
  hola("Barbara", "Carmona");

//Ej. 11: Suponiendo que cada dolar vale 300 pesos, crear una funcion que reciba un parametro en pesos y retorne su valor en dolar.

// Ejemplo, si recibe function cambioDolar(numero) debe retornar => numero \ 300

function CambioDelDia(p) {
    return p/300
}
CambioDelDia (50000)
