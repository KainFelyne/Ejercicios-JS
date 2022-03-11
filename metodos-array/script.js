/*
Arrays - Metodos

.from(iterable) - Convierte en array el elemento iterable

.sort.([callback]) - Ordena los elementos de un array alfabeticamente (valor Unicode), si le pasamos un callback los ordena en función a un algoritmo que le pasemos.

.forEach(callback(currentValue,[index])) - Ejecuta la función indicada una vez por cada elemento del array.

.some(callback) - Comprueba si al menos un elemento del array cumple la condición.

.every(callback) - Comprueba si al menos un elemento del array cumple la condición.

.map(callback) - Transfeorma todos los elementos del array y devuelve un nuevo array.

.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

.reduce(callback) - Reduce todos los elementos del array a un unico valor
*/




//****.from****

//let word = 'Hola mundo'

//console.log(Array.from(word))
//console.log(word.split(''))



//****.sort****

/*
const letters = ['b', 'c', 'z', 'a']
console.log(letters.sort())

const numbers = [700, 4, 100, 9, 3, 7, 2, 1, 0, 200]
console.log(numbers.sort((a, b)=>a-b))
console.log(numbers.sort((a, b)=>b-a))
*/



//*****.forEach******

/*
const numbers = [32, 1, 78, 22, 50]

numbers.forEach((number,index)=> 
console.log(`${number} esta en la posición ${index}`))
*/





//*****.some******

/*
const words = ['HTML', 'CSS', 'JS', 'PHP']

console.log(words.some(word => word.length > 10))
console.log(words.every(word => word.length > 1))
*/




//*****.map******

/*
const numbers = [32, 1, 78, 22, 50]

const numbers2 = numbers.map((number) => number*2)

console.log(numbers2)
*/


//*****.filter******


/*
const numbers = [32, 1, 78, 22, 50]

const numbers2 = numbers.filter(number=>number > 40)

console.log(numbers2)
*/




//*****.reduce******

/*
const numbers = [3, 1, 8, 2, 5]


console.log(numbers.reduce((a,b)=> a+b))
*/

const users = [
    {
        name: 'user1',
        online: true
    },
    {
        name: 'user2',
        online: true
    },
    {
        name: 'user3',
        online: false
    },
    {
        name: 'user4',
        online: true
    },
    {
        name: 'user5',
        online: false
    },
    {
        name: 'user6',
        online: true
    },
]

const usersOnLine = users.reduce((cont, user)=> {
    if (user.online) cont++
    return cont
}, 0)

console.log(`Hay ${usersOnLine} usuarios conectados`)