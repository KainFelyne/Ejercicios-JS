/*
    DOM - Crear e insertar elementos

    Crear un elemento - document.createElemet(element)
    Escribir texto en un elemento - element.textContent = texto
    Escribir HTML en un elemento - element.innerHTML = código HTML

    Añadir un elemnto al DOM - parent.appendChild(element)
    Fragmentos de código - document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Nuevo día']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const daysSelect = document.getElementById('daysSelect')


/*
daysList.appendChild(itemList)


console.log(itemList)

*/

title.innerHTML = 'DOM - <span>Crear e insertar elementos I</span>'

const fragment = document.createDocumentFragment()

/*
for (const day of days){
    const itemList = document.createElement('li')
    itemList.textContent = day
    fragment.appendChild(itemList)
}
*/

for (const day of days){
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

//console.log(fragment.textContent)

//daysList.appendChild(fragment)

daysSelect.appendChild(fragment)