/*
    Eventos de ratón:
        click - Cuando pulsamos el botón izquierdo del ratón.
        dbclick - Cuando pulsamos 2 veces seguidas el botón izquierdo del ratón.
        mouseenter - Cuando entramos en la zona que tiene el evento.
        mouseleave - Cuando salimos de la zona que tiene el evento.
        mousedown - Cuando pulsamos el botón izquierdo del ratón.
        mouseup - Cuando soltamos el botón izquierdo del ratón.
        mousemove - Cuando movemos el ratón.

    Eventos de teclado:
        keydown - Cuando pulsamos una tecla.
        keyup - Cuando soltamos una tecla.
        keypress - Cuando pulsamos una telcla y no la soltamos.
*/

const button = document.getElementById('button')
const input = document.getElementById('input')
const box = document.getElementById('box')

//CLICK**********



button.addEventListener('click', ()=> {
    console.log('CLICK'); 
})


button.addEventListener('dblclick',() => {
    console.log('Doble CLICK')
})


/*
box.addEventListener('mouseenter', () => {
    box.classList.replace('red',    'green')
})

box.addEventListener('mouseleave', () => {
    box.classList.replace('green', 'red')
    
})
*/

/*
box.addEventListener('mousedown', () =>{
    console.log('Has pulsado en la caja')
})

box.addEventListener('mouseup', () =>{
    console.log('Has soltado en la caja')
})
*/

/*
box.addEventListener('mousemove', () =>{
    console.log('Estas moviendo el ratón en la caja')
})
*/

input.addEventListener('keydown', () =>{
    console.log('Has pulsado una tecla')
})



input.addEventListener('keyup', () =>{
    console.log('Has soltado una tecla')
})


input.addEventListener('keypress', () =>{
    console.log('estas soltando una tecla')
})