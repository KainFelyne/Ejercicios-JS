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
const result = document.getElementById('results');

let a = prompt('Introduce el primer numero');
let b = prompt('Introduce el segundo numero');
let c = prompt('Introduce el tercer numero');

numbers.textContent = `Los números introducidos son: ${a}, ${b}, ${c}`;