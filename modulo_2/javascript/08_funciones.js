console.log("FUNCIONES");
console.log("Funcion simple");    

function saludar() {
    console.log("Hola, bienvenido a la programación");
}

saludar();
saludar();
saludar();  


console.log("Función con parámetros");
function suma(a, b) {
    return a + b;
}
console.log("La suma es: ", suma(5, 10));

console.log("Función flecha");
const funcionFlecha = () => {;
    console.log("LEL SALUDO FLECHA ES  ");
}
funcionFlecha();
const multiplicacion= (n,m) => {
    return n * m;
}
console.log( multiplicacion(5, 10));


console.log("Función con retorno directo");
const cuadrado = x => x * x;
console.log(cuadrado(6));

console.log("Función con parametros por defecto");
function division(z, k = 3) {
    return z / k;
}
console.log("La división es: ", division(40,8));
console.log("La división es: ", division(40));
