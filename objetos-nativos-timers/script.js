/*
    Objeto window - Es el objeto global, de el descienden todos los objetos
        alert()
        prompt()
        confirm()
*/

//alert('Hola Ely')

/*
addEventListener('click', (e) =>{
    console.log(e)
})
*/

/*
if (confirm('¿Acepta?')){
    console.log('Aceptado')
}
else{
    console.log('No aceptado')
}
*/




/*
    Objeto console - Es el objeto que contiene la consola del navegador
        console.log()
        console.dir()
        console.error()
        console.table()
*/


const button = document.getElementById('button')
//console.log(button)
//console.dir(button)
//console.error('Error')

/*
const persona = {
    name: 'Ely',
    age: 32,
    email: 'ely@ely.com'
}

console.table(persona)

const numbers = [1, 2, 3, 4]
console.table(numbers)
*/

/*
    Objeto location - Es el objeto que tiene la barra de dierecciones
        location.href
        location.protocol
        location.host
        location.pathname
        location.hash
        location.reload()
*/


/*
console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash)
//location.reload())
*/

//location.href = 'https://google.com' <- Redirigir a otra pagina

/*
    Objeto history
    back()
    forward()
    go(n | -n)
    length
*/

//history.back() -> Dirige a la pagina anterior
//history.forward() -> Dirige a la pagina siguiente
//history.(n | -n) -> Dirige al numero de pagina indicado
//history.length -> Muestra el numero de paginas visitadas

/*
    Objeto date
*/


//const date = new Date()
//console.log(date.getDay())
//console.log(date.getDate())
//console.log(date)



/*
    Timers
        
        setTimeout(() => {code}, delay-in-miliseconds) - Hace que se ejecute la función despues del delay. Si lo referenciamos mediamente una variable/constante. Podemos parar con clearTimeOut(referencia)

        setInterval(() => {code}, delay-in-miliseconds) - Hace que se ejecute la función 
*/

/*
button.addEventListener('click', () => {
    //setTimeout(saludar, 3000)
    setTimeout(() => {
        console.log('Adios')
    }, 3000)
})
*/

const saludar = ()=> {
    console.log('Hola')
}


/*
const timeOut = setTimeout(() => {
    console.log('Adios')
}, 3000);

button.addEventListener('click', () => {
    clearTimeout(timeOut)
})
*/

button.addEventListener('click', () => {
    setInterval(saludar,3000)
})