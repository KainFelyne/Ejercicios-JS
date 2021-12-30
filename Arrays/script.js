/**
 * Nos permite almacenar varios datos y agruparlos.
 * Se pueden llenar con cualquier  tipo de dato valido en JS. Y deben ir separados por comas.
 * Se pueden mezclar tipos de datos, pero no es recomendable.
 * Se declaran con llaves cuadradas o corchetes [].
 * Pueden declararse vacíos o con un contenido ya establecido.
 * Pueden añadirse o eliminarse elementos en el momento que queramos.
 */

let numeros = [1,2,3,4,5];
console.log(numeros);
console.log(numeros[4]);
console.log(numeros[1] + numeros[3]);


let palabras = ['Hola', 'estamos', 'en', 'Udemy'];
console.log(palabras);
console.log(palabras[3]);
console.log(palabras[2].length);
console.log(`La palabra ${palabras[1]} tiene ${palabras[1].length} letras`);