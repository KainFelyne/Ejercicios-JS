/*
Sintaxis simple:
switch (evaluación) {
    case n:
        //codigo
        breack;
    case n2:
        //codigo
        break;
    default:
        //codigo
}

Sintaxis multiple:
switch (evaluación){
    case n:
    case n2:
    case n3:
    case n4:
        //codigo
        break;
    case n5:
    case n6:
        //codigo
        break;
    default:
        //codigo
}
*/

//Sintaxis simple
let num = 2;

switch(num){
    case 1: 
        console.log(`num tiene el valor 1`);
    break;
    case 2: 
        console.log(`num tiene el valor 2`);
    break;
    
    default: 
        console.log(`num no vale ni 1 ni 2`);

}

//Sintaxis multiple

switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`num es impar`);
    break;
    case 2:
    case 4:
        console.log(`num es par`);
    break;
}