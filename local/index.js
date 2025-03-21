const comentarios = ['comentario1', 'comentario2', 'comentario3']

localStorage.setItem('comentarios', JSON.stringify(comentarios))

const comentariosLocal = localStorage.getItem('comentarios')
// const arrayDeComentarios = comentariosLocal.split(',')

console.log(JSON.parse(localStorage.getItem('comentarios')));



// console.log(comentariosLocal, arrayDeComentarios);

// for(let i = 0; i < arrayDeComentarios.length; i++){
//     console.log(arrayDeComentarios[i]);
    
// }

