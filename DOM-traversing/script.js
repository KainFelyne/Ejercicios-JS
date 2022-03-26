/*
    Recorrer el DOM

    Padre - parent (Nodo del que desciende)
        -parentNode - Devuelve el nodo padre (que puede no ser un elemento)
        -parentElement - Devuelve el nodo elemento padre

        NOTA
        Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolverá siempre null.

    
    Hijos - child (Nodo que desciende de un padre)
        - childNodes - Devuelve todos los nodos hijos
        - children - Devuelve todos los nodos elementos hijos
        - firstChild - Devuelve el primero nodo hijo
        - firstElemetChild - Devuelve el primer nodo elemento hijo
        - lastChild - Devuelve el último nodo hijo
        - lastElemetChild - Devuelve el ultimo nodo elemento hijo
        - hasChildNode() Devuelve true si el nodo tiene hijos

    
    Hermanos - siblings (Nodo al mismo nivel)
        - nextSibling - Devuelve el siguiente nodo hermano
        - nextElementSibling
        - previousSibling
        - previousElementSibling


    Cercano
        - Closest(selector) - Selecciona el modo más cercano que cumpla con el selector, aún es experimental.
*/

const parent = document.getElementById('parent')
//console.log(parent.parentNode)

//console.log(parent.childNodes)
//console.log(parent.children[2])

//console.log(parent.firstElementChild)

//console.log(parent.lastElementChild)


//console.log(parent.hasChildNodes())


console.log(parent.parentElement.nextElementSibling)


console.log(parent.parentElement.previousElementSibling)