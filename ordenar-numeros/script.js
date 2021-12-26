/*
Ordena 3 números de mayor a menor
Permutaciones con 3 elementos
Posibilidades 3! = 3*2*1 = 6
abc = 123
acb = 132
bac = 213
bca = 231
cab = 312
cba = 321
 */

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('Introduce el primer numero');
let b = prompt('Introduce el segundo numero');
let c = prompt('Introduce el tercer numero');

numbers.textContent = `Los números introducidos son: a${a}, b${b}, c${c}`;

if (a >= b && a >= c){
    if (b > c){
        result.textContent = `Los números de mayor a menor son: ${a}, ${b}, ${c}`;
    }
    else{
        result.textContent = `Los números de mayor a menor son: ${a}, ${c}, ${b}`;
    }
}
else if (b >= a && b >= c){
    if (a > c){
        result.textContent = `Los números de mayor a menor son: ${b}, ${a}, ${c}`;
    }
    else{
        result.textContent = `Los números de mayor a menor son: ${b}, ${c}, ${a}`;
    }
}
else if (c >= a && c >= b){
    if (a > b){
        result.textContent = `Los números de mayor a menor son: ${c}, ${a}, ${b}`;
    }
    else{
        result.textContent = `Los números de mayor a menor son: ${c}, ${b}, ${a}`;
    }
}