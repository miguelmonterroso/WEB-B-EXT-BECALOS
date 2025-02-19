// const persona = {
//     nombre: 'Miguel',
//     edad: 28,
//     profesion: 'Desarrollador',
//     saludar: function (){
//         return `Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`
//     }
// }

// console.log(persona.nombre)
// console.log(persona.saludar())

const libro = {
    titulo: 'El principito',
    autor: 'Antoine de Saint',
    publicacion: 1943,
    capitulos: ['Introduccion', 'El encuentro con el zorro', 'El asteroide B-612'],


    // Funcion para mostrar la informacion del libro
    mostrarInfo: function(){
        return `${this.titulo} de ${this.autor} publicado en ${this.publicacion}`
    },

    // Funcion para mostrar los capitulos
    listarCapitulos: function(){
        console.log(`Capitulos de ${this.titulo}`);
        this.capitulos.forEach((capitulo, index) => {
            console.log(`${index + 1}. ${capitulo}`);
        })
    },

    // Funcion para agregar un nuevo capitulo
    agregarCapitulo: function(nuevoCapitulo){
        this.capitulos.push(nuevoCapitulo)
        console.log(`Capitulo ${nuevoCapitulo} agregado.`);
        this.listarCapitulos();
    }
}

console.log(libro.mostrarInfo());
// libro.listarCapitulos();
libro.agregarCapitulo('Test')


