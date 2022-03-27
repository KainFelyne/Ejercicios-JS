/*

    Insertar y eliminar elementos II

    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento referencia

    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)
    
    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)

    positions:
        beforebeing - Antes de que empiece (hermano anterior)
        afterbeing - Despues de que empiece (primer hijo)
        beforeend - Antes de que acabe (ùltimo hijo)
        afterend - Despuès de que acabe (hermano siguiente)
    
    parent.replaceChild(newChild, oldChild) - Reemplazar un hijo
*/


const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = 'New element'

//list.insertBefore(newElement, list.children[1])

//list.children[0].insertAdjacentElement('beforebegin', newElement)
//list.insertAdjacentElement('afterbegin', newElement)
//list.insertAdjacentElement('beforeend', newElement)
//list.children[0].insertAdjacentElement('afterend', newElement)
//list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
//list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')

//list.replaceChild(newElement, list.children[1])


//JQUERY****

//list.children[0].before(newElement)
//list.prepend(newElement)
//list.append(newElement)
//list.children[0].after(newElement)

//list.children[0].replaceWith(newElement)


/*
    CLONAR Y ELIMINAR ELEMENTOS
        Element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento.
        element.remove() - Eliminar el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

//list.after(list.cloneNode(true))
//list.remove()
list.removeChild(list.children[0])