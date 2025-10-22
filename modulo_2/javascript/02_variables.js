console.log("VARIABLES EN JAVASCRIPT");
var saludo1="Hola mundo con variables en Java Script";
var saludo2="Hola mundo modificado";
console.log(saludo1);

console.log(saludo1+ ""+ saludo2);
console.log(`$(saludo1) $(saludo2) $(4+5)`);
let numero = 24;
const angulo = 45;
console.log(numero, angulo);


console.log("TIPOS DE DATOS");
var nombre="Mateo Alba";
console.log("string", typeof(nombre));
var tiponumero=45;
console.log("number", typeof(tiponumero));
var tipobooleano=true;
console.log("Tipo boolean", typeof(tipobooleano));
var tipoindefinido;undefined;
console.log("Tipo indefinido", typeof(tipoindefinido));
var tiponull=null;
console.log("Tipo null", typeof(tiponull));
var tiposimbolos=Symbol("mi simbolo");
console.log("Tipo simbolo", typeof(tiposimbolos));
var tipobigenter=9007199254740991n;
console.log("Tipo bigenter", typeof(tipobigenter));


const persona = {
    nombre: "Mateo Alba",
    edad: 24,
}

console.log("OBJETOS EN JAVASCRIPT", typeof(persona));
console.log(persona);
console.log(persona.edad);
console.log(persona.nombre);