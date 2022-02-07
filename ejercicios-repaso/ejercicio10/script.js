/*
Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/


const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

const color = prompt(`Introduce un color`).toLowerCase();

if (colores.indexOf(color) !== -1){
    console.log(`Tu color se encuentra en el array`)
}
else{
    console.log(`Tu color no se encuentra en el array`)
}