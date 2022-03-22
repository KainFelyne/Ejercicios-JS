const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')
const link = document.getElementById('link')

//input.addEventListener('keyup', (e) =>{
    //console.log(e);
    //console.log(e.key);
    //console.log(e.path[0]);
//})

/*
window.addEventListener('click', (e) => {  ->  objeto global window
    console.log(e)
})
*/

/*
button.addEventListener('click', (e) =>{
    console.log(e.target)
})
*/

/* GALLERY****
const gallery = document.getElementById ('gallery')

gallery.addEventListener('click', (e) =>{
    console.log(e.target.textContent)
    e.target.classList.add('red')
})
*/

/*
*/


link.addEventListener('click', (e) => {
    e.preventDefault()
    button.click()
    console.log('Dirigiendo a google')
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log('El formulario se ha enviado')
})

button.addEventListener('click', () =>{
    input.value = 'Has hecho click'
})