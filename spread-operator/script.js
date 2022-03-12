//****spread operator****

/*
const numbers = [30, 1, 4, 32, 98, 55, 34]
console.log(...numbers)
*/

/*
const addNumber = (a, b, c) => {
    console.log (a + b + c)
}

addNumber(1, 2, 3)
*/

//Añadir un array a otro array

/*
let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']

let newUsers = ['marta', 'jaime', 'laura']

users.push(...newUsers) // se puede usar unshift para agregarlos al principio

console.log(users)
*/



//Copiar array
 
/*
let arr1 = ['1', '2', '3', '4']
let arr2 = [...arr1]

console.log(arr2)
*/

//Concatenar arrays

/*
let arr1 = ['1', '2', '3', '4', '5']
let arr2 = ['6', '7', '8']

//let arrConcat = arr1.concat(arr2)
let arrConcat = [...arr1, ...arr2]

console.log(arrConcat)
*/

// Enviar un número indefinido de argumento a una función (parametro REST)

const restParms = (...numbers) => {
    console.log(numbers)
}

restParms()