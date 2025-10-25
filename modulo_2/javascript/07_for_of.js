console.log("CICLO O BUCLES")
console.log("FOR OF")

const nombres = ["Ana", "Luis", "Carlos", "María"]
for (const nombre of nombres) {
    console.log("Hola ",nombre)
};



const nombre = "Ana"
for (const letra of nombre) {
    console.log("Letra ",letra)
};

const numeros = [10, 20, 30, 40, 50]
let mayor = numeros[0];
for (const numero of numeros)
{
    if (numero > mayor) {
        mayor = numero;
    }
}
console.log("Número mayor: ", mayor);


const persona = {
    nombre: "Leo",
    edad: 25,
    profesion: "Ingeniero"
}
for (const clave in persona) {
    console.log("clave:", clave, ":", persona[clave]);
}

const libros = 
    {  titulo: "amor",
        Autor: "rosa",
        año: 2020
}
    suma_claves= 0;
    for (const clave of libros) {
        suma_claves++;
    }
    console.log( suma_claves);