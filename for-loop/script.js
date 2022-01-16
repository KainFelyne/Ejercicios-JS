//** for loop

//Su sintaxis se compone de 3 partes:
//  Iniciación de la variable
//  Numero de vueltas
//  Incremento o decremento

/*
    for(let i = 0; i <= 3; i++){
        codigo a ejecutar
    }
*/
console.log(`**Incremento**`);

for(let i = 0; i <= 10; i++){
    console.log(i);
}

console.log(`**Decremento**`);
for(let j = 10; j >= 0; j--){
    console.log(j);
}


console.log(`*****************************`);

let numbers = [10, 20, 30, 40, 50, 60];

for(let k = 0; k < numbers.length; k++){
    console.log(`k vale ${k} y su valor en el array es: ${numbers[k]}`);
}