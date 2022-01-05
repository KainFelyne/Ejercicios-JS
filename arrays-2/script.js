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
