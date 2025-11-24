function saludar() {
    return "¡Hola, mundo desde una funcion!";
}
console.log(saludar());
function suma() {
    return 3 + 7;
}
console.log(suma());
function sumarOpcional(numero1, numero2) {
    return numero1 + (numero2 ? numero2 : 15);
}
console.log(sumarOpcional(19, 6)); // Usa el valor por defecto para numero2
console.log(sumarOpcional(10)); // Usa el valor proporcionado para numero2
