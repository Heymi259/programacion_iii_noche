console.log("CONDICIONALES EN JAVASCRIPT");
console.log("CONDICIONALES IF");
let temeperatura = 45;

if (temperatura > 30) {
    console.log("Hace frío");
}

console.log("CONDICIONALES IF ELSE");
const password = "admin123";
if (password === "admin123") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

console.log("CONDICIONALES ANIDADAS");
const edad = 20;
const tieneLicencia = true;
if (edad >= 18) {
    console.log("Eres mayor de edad");
    if (tieneLicencia) {
        console.log("Tienes licencia de conducir");
    } else {
        console.log("No tienes licencia de conducir");
    }
} else {
    console.log("Eres menor de edad");
}

if (edad < 18 && tieneLicencia) {
    console.log("Puedes conducir");
} else if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir libremente");
} else {
    console.log("No puedes conducir");
}

console.log("CONDICIONALES SWITCH");
const dia = "lunes";
switch (dia) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
        console.log("Día laborable");
        break;
    case "sabado":
    case "domingo":
        console.log("Día no laborable");
        break;
    default:
        console.log("Día no válido");
        break;
}

