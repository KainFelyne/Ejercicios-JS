/*
    Eventos de ratón:
        click - Cuando pulsamos el botón izquierdo del ratón.
        dbclick - Cuando pulsamos 2 veces seguidas el botón izquierdo del ratón.
        mouseenter - Cuando entramos en la zona que tiene el evento.
        mouseleave - Cuando salimos de la zona que tiene el evento.
        mousedown - Cuando pulsamos y no soltamos el botón izquierdo del ratón.
        mouseup - Cuando soltamos el botón izquierdo del ratón.
        mousemove - Cuando movemos el ratón.

    Eventos de teclado:
        keydown - Cuando pulsamos una tecla.
        keyup - Cuando soltamos una tecla.
        keypress - Cuando pulsamos una telcla y no la soltamos.
*/

const button = document.getElementById('button')
const box = document.getElementById('box')

//CLICK**********


/*
button.addEventListener('click', ()=> {
    console.log('CLICK'); 
})
*/

button.addEventListener('dblclick',() => {
    console.log('Doble CLICK')
})

box.addEventListener('mouseleave', () => {
    box.style.background = 'red'
})

box.addEventListener('mouseenter', () => {
    box.style.background = 'blue'
})