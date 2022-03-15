/*
document.getElementById('id') - Accede a un elemento a través de su id

document | element .qerySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document | element .qerySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

//const title = document.getElementById('title')

//console.log(title);

//title.textContent = 'DOM - Accediendo a nodos'

const paragraph = document.querySelector('.paragraph')

const span = paragraph.querySelector('span')

console.log(span.textContent)


const paragraphs = document.querySelectorAll('.paragraph')
const paragraphsSpread = [...document.querySelectorAll('.paragraph')]
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))


//paragraphs[2].style.color = 'red'

//paragraphsSpread.map(p => p.style.color = 'blue')

paragraphsArray.map(p => p.style.color = 'blue')

//console.log(paragraphs)