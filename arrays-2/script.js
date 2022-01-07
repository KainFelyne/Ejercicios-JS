let numbers = [1,2,3,4,5];

let number = 3;
// Array.isArray
console.log("**Array.isArry**");
console.log(Array.isArray(numbers));
console.log(Array.isArray(number));

//Eliminar elemento
// .shift() -> Elimina el primer elemento del array
// . pop() -> Elimina el ultimo elemento del array

console.log("**.shift()**")
console.log(numbers);
numbers.shift();
console.log(numbers);
console.log("**.pop()**");
numbers.pop();
console.log(numbers);

//Añadir elemento
// .unshift() -> Añade uno o mas elemento al inicio
// .push() -> Añade uno o mas elementos al final

let numbers2 = [6, 7, 8, 9];

console.log("**.push()**");
console.log(numbers2);
numbers2.push(10);

console.log("**.unshift()**");
console.log(numbers2);
numbers2.unshift(5);
console.log(numbers2);

let newLength = numbers2.push(11);

console.log(numbers2);
console.log(newLength);

let newLength2 = numbers2.unshift(4);
console.log(numbers2);
console.log(newLength2);

/* 
indexOf() -> Devuelve el primer indice del elemento que coincida con el valor especificado, ó -1 si el valor no es encontrado.
*/

console.log("**.indexOf()**");
console.log(numbers2.indexOf(8));

/*
 *  .lastIndexOf() -> Devuelve el ultimo indice del elemento que coincida con el valor especificado, ó -1 si ninguno es encontrado.
 */

console.log("**.lastIndexOf()**");
console.log(numbers2.lastIndexOf(11));

/*
.reverse() -> invierte el orden de los elementos del array.
*/

console.log("**.reverse**");
numbers2.reverse()
console.log(numbers2);


/*
.join('separador') -> Devuelve el string con el separador que indiquemos. Por defecto son comas.
*/


console.log("**.join**");
console.log(numbers2.join(' - '));

/**
 * .splice(a, b, items) -> Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
 * a - Indice de inicio
 * b - Número de elementos (opcional)
 * Items - Elementos a añadir en el caso de que se añadan.
 */

console.log("**.splice()**");
console.log(numbers2);
numbers2.splice(6); // Elimina desde la posición 6 hasta el final.
console.log(numbers2);
numbers2.splice(1, 2); // Elimina desde la posición 1 el número de valores que le indiquemos.
console.log(numbers2);
numbers2.splice(1, 1, 13); //Si b es un valor diferente de 0, elimina el número de valores que indiquemos en b, y añade los valores de items a partir de la posición a (Si b vale 0 añade los elementos a partir de la posición a, y  no elimina ninguno)
console.log(numbers2);

/**
 * .slice(a,b) -> Extrae elementos de un array desde el índice a hasta el indice b. Si no existe b lo hace hasta el final. Si no existe a y b, hace una copia del original.
 */

console.log("**.slice()**");
console.log(numbers2);
console.log(numbers2.slice(1,3));
