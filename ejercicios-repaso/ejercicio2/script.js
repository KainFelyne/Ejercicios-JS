/*
Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2. rectángulo = b * h. círculo = π * r2 (pi * radio al cuadrado)
 */

let figura = prompt('Introduce la figura para calcular su area (triangulo, rectangulo o circulo)');

let b;

let h;

let r;

const pi = 3.1416

if (figura == 'triangulo'){

    b = parseInt(prompt(`Introduce la base`));
    h = parseInt(prompt(`Introduce la altura`));;

    resultado.textContent = `El area del triangulo es: ${(b*h)/2}`;

    console.log(`El area del triangulo es: ${(b*h)/2}`);
}
else if (figura == 'rectangulo'){

    b = parseInt(prompt(`Introduce la base`));
    h = parseInt(prompt(`Introduce la altura`));;

    resultado.textContent = `El area del rectangulo es: ${b*h}`;
    console.log(`El area del rectangulo es: ${b*h}`);
}
else if (figura === 'circulo'){

    r = parseInt(prompt(`Introduce el radio`));;

    resultado.textContent = `El area del circulo es: ${pi*r*r}`;

    console.log(`El area del circulo es: ${pi*r*r}`)
}

else{

    alert('Figura no valida');
    console.log(`Fugura no valida`);
}