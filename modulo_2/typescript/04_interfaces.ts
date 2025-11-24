interface usuario {
    id: number;
    nombre: string;
    correo: string;
}

const usuariuo1: usuario = {
    id: 1,
    nombre: "Mateo",
    correo: "mateoalba1234@gmail.com"
}
console.log(usuariuo1);
console.log(usuariuo1.nombre);

interface producto {
    id: number;
    nombre: string;
    precio: number;
}

const producto1: producto = {
    id: 101,
    nombre: "Laptop",
    precio: 1500
}

const producto2: producto = {
    id: 102,
    nombre: "Smartphone",
    precio: 800
}

console.log(producto1);
console.log(producto1.precio);