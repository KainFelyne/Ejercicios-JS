/*
Operador ternario
(condición) ? true: false

(condición) ?
    (primera sentencia,
    segunda sentencia)
    :
    (primera sentencia,
    segunda sentencia)
*/

let num = 8;

(num % 2 == 0) ? console.log(`${num} es un número par`) : console.log(`${num} es un número impar`) ;


//Multiples sentencias
console.log(`*Multiple*`);

(num % 2 == 0) ?
        (
            console.log(`${num} es par`),
            console.log(`${num} no es non`)            
        )
        :
        (
            console.log(`${num} es non`),
            console.log(`${num} no es par`)
        )