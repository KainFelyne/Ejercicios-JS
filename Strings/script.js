//###STRNGS###

let cadena = "Hola mundo";

//PROPIEDADES

//length -> Devuelve la longitud de la cadena

console.log(cadena.length);

//METODOS
//Los metodos devuelven cadenas nuevas

//*toUpperCase() -> La cadena se muestra en mayúsculas
console.log(cadena.toUpperCase());
console.log(cadena);

let cadenaMayus = cadena.toUpperCase();

console.log(cadenaMayus);

//*toLowerCase() -> La cadena se muestra en minusculas
console.log(cadenaMayus.toLowerCase());

//+indexOf() -> Devuelve la posición en la que se encuentra el parametro indicado. Si no lo encuentra devuelve -1
console.log(cadena.indexOf('m'));

//*replace(valor a buscar, valor nuevo) -> Remplaza el valor de la cadena que indiquemos y pone el valor nuevo
console.log(cadena.replace('m', 'M'));
console.log(cadena.replace('Hola', 'Adios'));