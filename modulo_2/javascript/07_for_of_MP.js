console.log("CICLOS O BUCLES - MENÚ DE RESTAURANTE");

const clientes = ["Ana", "Luis", "Carlos", "María"];
for (const cliente of clientes) {
    console.log("Bienvenido/a al restaurante,", cliente);
}


const plato = "Pizza";
for (const letra of plato) {
    console.log("Letra del plato:", letra);
}

const precios = [10, 20, 30, 40, 50];
let precioMayor = precios[0];
for (const precio of precios) {
    if (precio > precioMayor) {
        precioMayor = precio;
    }
}
console.log("El precio más alto en la carta es:", precioMayor);


const pedido = {
    cliente: "Leo",
    edad: 25,
    plato: "Hamburguesa",
    bebida: "Coca-Cola"
};
for (const clave in pedido) {
    console.log("Detalle del pedido:", clave, ":", pedido[clave]);
}


const menuEspecial = {
    titulo: "Buffet de fin de semana",
    chef: "Rosa",
    año: 2025
};
let totalCampos = 0;
for (const clave in menuEspecial) {
    totalCampos++;
}
console.log("El menú especial tiene", totalCampos, "detalles registrados.");