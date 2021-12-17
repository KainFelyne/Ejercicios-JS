//###OBJETO MATH###


//**Metodos

console.log(Math.E);
console.log(Math.PI);

let num = 5.9;
let num2 = 2;
//*Math.abs() -> Devuelve el valor absoluto.
console.log("**Math.abs()**")
console.log(Math.abs(num));

//*Math.ceil() -> Devuelve el entero mas grande
console.log("**Math.ceil()**")
console.log(Math.ceil(num));

//*Math.floor() -> Devuelve el entero mas pequeño
console.log("**Math.floor()**")
console.log(Math.floor(num));

//*Math.pow() -> Devuelve la potencia de x elevado a y
console.log("**Math.pow()**")
console.log(Math.pow(2, 3));

//*Math.random() -> Devuelve un nùmero aleatoreo entre 0 y 1
console.log("**Math.random()**")
console.log(Math.random());
console.log(Math.random()*100);

//*Math.round() -> Devuelve el valor de un nùmero redondeado al entero màs cercano.
console.log("**Math.round()**")
console.log(Math.round(15.4));
console.log(Math.round(15.5));
console.log(Math.round(Math.random()*100));
//console.log(math.random() * (max - min) + min); Formula para obtener un nùmero aleatoreo entre un nùmero minimo y un maximo.
console.log(Math.round(Math.random() * (10 - 5) + 5 ));

//*Math.sign() -> Devuelve el signo del valor, que indica si es positvo, negativo o cero
console.log("**Math.sign()**")
console.log(Math.sign(-5));
console.log(Math.sign(5));
console.log(Math.sign(0));

//*Math.sqrt() -> Devuelve la raiz cuadrada del valor.
console.log("**Math.sqrt()**")
console.log(Math.sqrt(5));
