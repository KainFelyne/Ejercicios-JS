/*
    1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/

let nombre = prompt('Introduce tu nombre');

let edad = prompt('Introduce tu edad'); // parseInt(prompt()); -> convertir string a número

const result = document.getElementById('result');

result.textContent = `Hola ${nombre}, tienes ${edad} años, y el año que viene tendrás ${++edad} años.`;