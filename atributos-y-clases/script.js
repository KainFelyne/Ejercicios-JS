/*
    Atributos
        element.getAttribute('attribute')
        element.setAttribute('attribute', value)

    Clases
        element.classList.add('class','class',...)
        element.classList.remove('class','class',...)
        element.classList.toggle('class'[,force])
        element.classList.contains('class')
        element.classList.replace('oldClass','newClass')

    atributos directos
    id
    value
*/

const title = document.getElementById('title')
const name = document.getElementById('name')


//console.log(name.getAttribute('type'));

//name.setAttribute('type','date')

/*
title.classList.add('main-title', 'other-title')
title.classList.remove('other-title')
if (title.classList.contains('title')){
    console.log('title tiene la clase title')
}
else{
    console.log('title no tiene la clase title')

}
*/

//title.classList.replace('title', 'titulo')

//console.log(name)
//console.log(title.textContent)
//console.log(title.innerHTML)
console.log(name.value)