console.log("OPERADORES EN JAVASCRIPT");
console.log("OPERADORES ARITMÉTICOS");

const numero1 = 15;
const numero2 = 5;

const suma = numero1 + numero2;
console.log(`${numero1} + ${numero2} = ${suma}`);

const resta = numero1 - numero2;
console.log(`${numero1} - ${numero2} = ${resta}`);

const multiplicacion = numero1 * numero2;
console.log(`${numero1} * ${numero2} = ${multiplicacion}`);

const division = numero1 / numero2;
console.log(`${numero1} / ${numero2} = ${division}`);

const modulo = numero1 % numero2;
console.log(`${numero1} % ${numero2} = ${modulo}`);

const potencia = numero1 ** numero2;
console.log(`${numero1} ** ${numero2} = ${potencia}`);

console.log("OPERADORES DE COMPARACIÓN");

const numero3 = "5";
const numero4 = 5;

console.log(`Igualdad débil (${numero3} == ${numero4}) : ${numero3 == numero4}`);
console.log(`Igualdad estricta (${numero3} === ${numero4}) : ${numero3 === numero4}`);
console.log(`Desigualdad débil (${numero3} != ${numero4}) : ${numero3 != numero4}`);
console.log(`Desigualdad estricta (${numero3} !== ${numero4}) : ${numero3 !== numero4}`);
console.log(`Mayor que (${numero3} > ${numero4}) : ${numero3 > numero4}`);
console.log(`Menor que (${numero3} < ${numero4}) : ${numero3 < numero4}`);
console.log(`Mayor o igual que (${numero3} >= ${numero4}) : ${numero3 >= numero4}`);
console.log(`Menor o igual que (${numero3} <= ${numero4}) : ${numero3 <= numero4}`);


//const numero3 = 10;
//const numero4 = 5;

console.log("OPERADORES LÓGICOS");

console.log(`AND ("Y") (${numero3} >= ${numero4}) && (${numero3} <= ${numero4}) = ${numero3 >= numero4 && numero3 <= numero4}`);
console.log(`OR ("O") (${numero3} == ${numero4}) || (${numero3} < ${numero4}) : ${numero3 == numero4 || numero3 < numero4}`);
console.log(`! "NEGACIÓN" !(${numero3} == ${numero4}) : ${!(numero3 == numero4)}`);
console.log(`(${numero3} != ${numero4} && ${numero3} >= ${numero4}) : ${numero3 != numero4 && numero3 >= numero4}`); 
console.log(`(${numero3} >= ${numero4} && ${numero3} === ${numero4}) : ${numero3 >= numero4 && numero3 === numero4}`); 
console.log(`(${numero3} > ${numero4} || ${numero3} !== ${numero4}) : ${numero3 > numero4 || numero3 !== numero4}`); 
console.log(`(${numero3} != ${numero4} || ${numero3} >= ${numero4}) : ${numero3 != numero4 || numero3 >= numero4}`);

console.log(`(${numero3 != numero4 && numero3 >= numero4 && numero3  >= numero4}`);
console.log(`(${numero3 >= numero4 && numero3 === numero4 && numero3 !== numero4} `);
console.log(`(${(numero3 != numero4 || numero3 >= numero4) && numero3 >= numero4} `);
console.log(`(${numero3 > numero4 || numero3 === numero4 && numero3 !== numero4} `);
console.log(`(${(numero3 != numero4 || (numero3 >= numero4 && numero3 !== numero4))} `);


