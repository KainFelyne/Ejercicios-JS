let num = 0;

//Condicional simple
console.log("*Condicional simple*");
if (num > 0){ 
    console.log(`${num} es mayor que 0`);
    console.log(`${num} es un númerto positivo`);
}
//Condicional compuesta
console.log("*Condicional compuesta*");
if (num > 0){
    console.log(`${num} es mayor que 0`);
    console.log(`${num} es un número positivo`);
}
else{
    console.log(`${num} es menor que 0`);
    console.log(`${num} es un número negativo`);
}

//Condicionales multiples
console.log("*Condicionales multiples*");
if (num > 0){
    console.log(`${num} es mayor que 0`);
    console.log(`${num} es un número positivo`);
}
else if (num < 0) {
    console.log(`${num} es menor que 0`);
    console.log(`${num} es un número negativo`);
}
else{
    console.log(`${num} es igual a 0`);
}


//Operadores logicos (&& and) (|| ó)
let num1 = 0;
let num2 = 0;
console.log("*********************");
console.log("*Operadores logicos*");

if (num1 > 0 && num2 > 0) console.log(`${num1} y ${num2} son mayores que 0`);

//Anidado de if
if (num1 > 0){
    if (num2 >0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }
    else if (num2 < 0){
        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
    }
    else{
        console.log(`${num1} es mayor que 0 y ${num2} es igual a 0`);
    }
}
else if (num1 < 0){
    if (num2 > 0){
        console.log(`${num1} es menor que 0 y ${num2}es mayor que 0`);
    }
    else if (num2 < 0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }
    else{
        console.log(`${num1} es menor que 0 y ${num2} es igual a 0`);
    }
}
else{
    if (num2 > 0){
        console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
    }
    else if (num2 < 0){
        console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);
    }
    else{
        console.log(`${num1} y ${num2} son iguales a 0`);
    }
}

let word = "Brownie";

if (word.length > 4){
    console.log(`${word} tiene mas de 4 letras`);
}
else if (word.length < 4){
    console.log(`${word} tiene menos de 4 letras`);
}
else{
    console.log(`${word} tiene 4 letras`);
}