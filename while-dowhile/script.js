//** Bucles

/*
    Indeterminados - No sabemos el número de veces que se va a ejecutar el codigo.
    
    Bucle while:
    while (condición){
        codigo a ejecutar
    }

    Bucle do while:
    do{
        codigo a ejecutar
    }
    while (condición)
*/

let pass = '';

//#WHILE#


/*while(pass != 'hola'){
    pass = prompt('Introduzca su contraseña')
}

console.log('Bucle finalizado');
*/

//##DOWHILE

do{
    pass = prompt('Introduzca su contraseña');
}
while (pass != 'hola');

console.log('Bucle finalizado');