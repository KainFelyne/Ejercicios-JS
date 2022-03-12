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

let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']

let newUsers = ['marta', 'jaime', 'laura']

users.push(...newUsers)

console.log(users)