console.log("WHILE");
let i = 1;
while (i <= 100) {
    console.log("Contador: " + i);
    i++;
}


let valores =[3, 4, 2, 4, 5];
let indice = 0;

while (valores[indice] > 0) {
    console.log("Valor valido: ", valores[indice]);
    indice++;
}

let n=1
while (n < 10) {
    if (n % 2 !== 0) {
    console.log(n, ` es impar:`);
    }
    n++;
}

let x = 1;
do {
    console.log("interaccion", x);
    x++;
} while (x < 5);


let Contador = 1;
suma = 0;
do {
    suma += Contador;
    Contador++;
} while (Contador <= 5);
console.log("La suma es: " + suma);

let reduccion = 10;
do {
    console.log("Reducción: ",  reduccion);
    reduccion -- ;
} while (reduccion >= 0);


let multiplicacion = 1;
do 
while (multiplicacion <= 10) {
    console.log(`6 x ${multiplicacion} = ${6 * multiplicacion}`);
    multiplicacion++;
} while (multiplicacion <= 10) 

        

