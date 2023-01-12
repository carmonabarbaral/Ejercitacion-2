//  Funciones + Condicionales I: Crear funciones con condicionales (if, if-else, switch).

// Ej. 12: Que retorne _true_ si dos numeros son iguales, de lo contario devuelve _false_.

function comparacion(numero1,numero2) {
if (numero1===numero2) {
   return true
  } else {
    return false
  }
}
comparacion(12,17)
  //Ej. 13: Que retorne _true_ si dos strings tienen la misma longitud, de lo contrario devuelve _false_.
function probando(nombre1,nombre2) {
if (nombre1.length ===nombre2.length){
return true
} else {
    return false
}
}
probando ("alma","luca")
//Ej. 14: Que retorne _true_ si el numero pasado por parametro es mayor a 10, de lo contrario devuelve _false_.

function Messi(x) {
    if (x >10) {
        return true
    }else {
        return false
    }
}
Messi (15)
//Ej. 15: Que retorne _true_ si el numero pasado por parametro es par, de lo contario devuelve _false_.


function pares(y) {   
 if (y%2===0){
    return true;
 } else {
    return false
 }
}
pares (19)

// Ej. 16: Que retorne _true_ si el numero pasado por parametro es impar, de lo contario devuelve _false_.
function imapres(i) {
    if (i%2!==0){
        return true;
     } else {
        return false
     } 
}
imapres(14)

// Ej. 17: Crear una funcion que reciba un numero. Va a retonar una cadena de texto que indique si es negativo o positivo.

// Si es positivo va a retornar => 'Es positivo'.

// Si es negativo va a retornar => 'Es negativo'.

// 
function positivos(n) {
    if (n>0){
        return "es positivo";
     } else {(n>0)
        return "es negativo"
     } 
}
positivos (-10);

//  Funciones + Metodos: Crear funciones usando metodos.

// Ej. 18: Crear una funcion que retorne redondeado hacia arriba el numero pasado por parametro.

function redondeoMayor(r) {
   return Math.ceil(r)
}
redondeoMayor (18.52)

// Ej. 19: Crear una funcion que retorne redondeado hacia abajo el numero pasado por parametro.
function redondeoMenor(m) {
    return Math.floor (m)
}
redondeoMenor(12.89)

// Ej. 20: Crear una funcion que retorne un numero aleatorio.

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

let numeroA = Math.floor(getRandomArbitrary(0, 19));
console.log (numeroA);

//  Funciones + Condicionales II: Crear funciones con condicionales (if, if-else, switch).

// Ej. 21: Crear una funcion que reciba 2 numeros por paramatro y devuelva el valor mas alto. Si son iguales que devuelva un string que diga 'Son iguales'.

function S(x,y) {
    if (x>y) {
        return x
    }else (x===y)
    return ("son iguales");
}
S (25,19)

// Ej. 22: Crear una funcion que verifique si una persona puede entrar a un lugar. Si tiene 18 años o mas que retorne un texto que diga 'Puede ingresar', de lo contario que diga 'No puede ingresar'.
function MayorDeEdad(e) {
    if (e>=18) {
       return "Puede ingresar";
    }else "NO puedes beber"
}
MayorDeEdad(25);
// Ej. 23: Evaluamos un estado recibido por parametro, si el estado es igual a 1, devolvemos un texto que diga "Conexion fuerte", si es igual a 2 
//retornamos un texto que diga "Conexion debil", de lo contrario retornamos 'Fuera de linea'
function Estado(c) {
    if (c=1) {
        return "conexión fuerte"
    }  else if (c=2)
    return "conexión debil";
    else "fuera de linea";
      
}
Estado (1)

// Ej. 24: Evaluamos si el numero recibido es 5 o 10, si es alguno de esos retoramos true, de lo contario retornamos false.
function Numerito(n) {
    if (n===5 ||n===10) {
     return true   
    }else 
    return false
}
Numerito (10);
// Ej. 25: Retornamos true si el numero recibido es mayor a 10 y menor a 50, de lo contrario retornamos false.
function MegustanMayores(d) {
    if (d>=10 && d<=50) {
        return true
    }else
    return false
}
    MegustanMayores(70)
    // Ej. 26: Retornamos true si el numero recibido es positivo, de lo contario retornamos false.
    function negativos(f) {
        if (f>0) {
            return true
        }else
        return false
    }
    negativos(5);

    // Ej. 27: Retornar 'Soy verdadero' si el valor recibido por parametro es true y 'Soy falso' si recibis false.
    function laVerdad(v) {
        if (v===36){
        return ("soy verdadero y joven")
        }else
        return  ("soy falso")
    }
    laVerdad(32);
    // Ej. 28: Crear una funcion que retorne 'Es divisible' si el numero es divisible por 3, si no lo es debe devolver 'No es divisible'. Pista: el modulo debe ser 0;
    function divisible(z) {
        if (z%3===0) {
            return "es divisible"
        }else 
        return "no es divisible"
    }
    divisible(33);
    // Ej. 29: Crear una funcion que muestre por consola los numeros del 1 al 10.
    const numeros = [0,1,2,3,4,5,6,7,8,9,10];
    for (let i=0; i<numeros.length;i++){
        console.log(numeros[i]);
    }
    // Ej. 30: Crear una funcion que muestre una alerta con los numeros del 1 al 10.
    const Primarios = [0,1,2,3,4,5,6,7,8,9,10];
    for (let i=0; i<numeros.length;i++){
        alert(numeros[i]);
    }