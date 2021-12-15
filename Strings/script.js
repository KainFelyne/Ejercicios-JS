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

//*indexOf() -> Devuelve la posición en la que se encuentra el parametro indicado. Si no lo encuentra devuelve -1
console.log("*indexOf");
console.log(cadena.indexOf('m'));

//*replace(valor a buscar, valor nuevo) -> Remplaza el valor de la cadena que indiquemos y pone el valor nuevo
console.log(cadena.replace('m', 'M'));
console.log(cadena.replace('Hola', 'Adios'));

//*substring(inicio[,final]) -> Extrae los caracteres desde el inicio hasta el final
console.log("*substring*");
console.log(cadena.substring(1, 6));
console.log(cadena.substring(1, 6-3));

//*slice(inicio[,fin]) -> Igual que substring pero admite valores negativos. Los valores negativo van del final al principio
console.log("*slice*");
console.log(cadena.slice(0, -3));
console.log(cadena.substring(3));
console.log(cadena.slice(-2));

//*trim() -> Elimina los espacios al principio y al final de una cadena

let cadena2 = "   Estoy trabajando con strings    ";

console.log("*trim*");
console.log(cadena2);
console.log(cadena2.trim());

//*startsWith(valor [,inicio]) -> Sirve para comprobar si la cadena empieza con el valor inicado. Devuelve true o false.
console.log("*startsWith*");
console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("m", 5));


//*endsWith(valor [,longitud]) -> Sirve para comparar si la cadena termina con el valor indicado.
console.log("*endsWith*");
console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a', 4));
console.log(cadena.endsWith('mundo'));


//*includes(valor[,inicio]) -> Indica si el string contiene el parametro indicado, devolviendo true o false
console.log('*includes*');
console.log(cadena.includes('n'));
console.log(cadena.includes('a', 4)); //Buscar a partir de la posición indicada

//*repeat(valor) -> Repite el número de veces que indiquemos.
console.log("*repeat*");

let cadena3 = "Adios mundo ";

console.log(cadena3.repeat(3));

//*template strings
console.log("Template strings");

let nombre = "Alberto";

let apellido = "Torres";

let edad = 32;

console.log("Hola " + nombre+ " " + apellido + ". Tienes " + edad + " años." ) //normal

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`) // template string
console.log(`Hola ${nombre} ${apellido}. El año que viene tendras ${edad+1} años.`) // template string (Se puede agregar cualquier operación de JS)