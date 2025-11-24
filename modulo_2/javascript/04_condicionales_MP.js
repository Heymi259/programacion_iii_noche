console.log("CONDICIONALES EN JAVASCRIPT - MENÚ DE RESTAURANTE");

// IF simple: verificar si hay mesas disponibles
console.log("CONDICIONALES IF");
let mesasDisponibles = 5;

if (mesasDisponibles > 0) {
    console.log("Tenemos mesas disponibles, bienvenido al restaurante.");
} else {
    console.log("Lo sentimos, no hay mesas disponibles.");
}

// IF ELSE: verificar contraseña del administrador del sistema
console.log("CONDICIONALES IF ELSE");
const password = "chef2025";
if (password === "chef2025") {
    console.log("Acceso al sistema de pedidos concedido.");
} else {
    console.log("Acceso denegado. Contraseña incorrecta.");
}

// IF anidado: verificar edad y si puede pedir bebidas alcohólicas
console.log("CONDICIONALES ANIDADAS");
const edadCliente = 20;
const quiereAlcohol = true;

if (edadCliente >= 18) {
    console.log("El cliente es mayor de edad.");
    if (quiereAlcohol) {
        console.log("Puede ordenar bebidas alcohólicas.");
    } else {
        console.log("Prefiere bebidas sin alcohol.");
    }
} else {
    console.log("El cliente es menor de edad, solo puede ordenar bebidas sin alcohol.");
}

// IF ELSE IF: promociones según edad
if (edadCliente < 12) {
    console.log("Promoción: Menú infantil con descuento.");
} else if (edadCliente >= 60) {
    console.log("Promoción: Menú especial para adultos mayores.");
} else {
    console.log("Menú regular disponible.");
}

// SWITCH: menú según el día de la semana
console.log("CONDICIONALES SWITCH");
const dia = "viernes";
switch (dia) {
    case "lunes":
        console.log("Menú especial: Lunes de pasta.");
        break;
    case "martes":
        console.log("Menú especial: Martes de tacos.");
        break;
    case "miércoles":
        console.log("Menú especial: Miércoles de pizza.");
        break;
    case "jueves":
        console.log("Menú especial: Jueves de sushi.");
        break;
    case "viernes":
        console.log("Menú especial: Viernes de parrillada.");
        break;
    case "sabado":
    case "domingo":
        console.log("Menú especial de fin de semana: Buffet libre.");
        break;
    default:
        console.log("Día no válido, no hay menú especial.");
        break;
}