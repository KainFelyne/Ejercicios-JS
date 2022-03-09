/*
Arrays - Metodos
.from(iterable) - Convierte en array el elemento iterable

.sort.([callback]) - Ordena los elementos de un array alfabeticamente (valor Unicode), si le pasamos un callback los ordena en función a un algoritmo que le pasemos.

.forEach(callback(currentValue,[index])) - Ejecuta la función indicada una vez por cada elemento del array.

.some(callback) - Comprueba si al menos un elemento del array cumple la condición.

.every(callback) - Comprueba si al menos un elemento del array cumple la condición.

.map(callback) - Transfeorma todos los elementos del array y devuelve un nuevo array.



*/

let word = 'Hola mundo'

console.log(Array.from(word))