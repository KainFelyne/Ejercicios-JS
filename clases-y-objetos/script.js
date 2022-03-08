/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/



class Libro {

    constructor(titulo, autor, año, genero){
        this.titulo = titulo
        this.autor = autor
        this.año = año
        this.genero = genero
    }

    getAutor(){
        return this.autor
    }

    getGenero(){
        return this.genero
    }

    libroInfo(){
        return `El libro ${this.titulo} pertenece al genero de ${this.genero}. Y fue escrito por ${this.autor} en el año ${this.año} `

    }
}

let libros = []

while(libros.length < 3) {
    let titulo = prompt('Escribe el titulo del libro')
    let autor = prompt('Escribe el autor del libro')
    let año = prompt('Escribe el año del libro')
    let genero = prompt('Escribe el genero del libro').toLowerCase()

    if (titulo != '' && 
        autor != '' && 
        !isNaN(año) && 
        año.length == 4 && 
        (genero == 'aventura' || genero == 'terror' || genero == 'fantasia' )){
        
        libros.push(new Libro(titulo, autor, año, genero))
    }
}

const todosLibros = () => {
    console.log(libros);
}


const todosAutores = () => {
    let autores = []
    for (const libro of libros){
        autores.push(libro.getAutor());
    }

    console.log(autores.sort());
    
}

const todosGeneros = () => {
    const genero = prompt('Introduce el género a buscar')
    
    for (const libro of libros){
        if (libro.getGenero() == genero){
            console.log(libro.libroInfo())
        }
    }

}

//todosLibros()

//todosAutores()

todosGeneros()