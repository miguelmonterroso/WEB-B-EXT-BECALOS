function obtenerPokemonConPromesa(nombre){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}
`)
.then((response) => {

    if(!response.ok){
        throw Error('Error en la respuesta del pokemon:', response.status)
    }    

    return response.json()
})
.then((data) => {
    console.log('Datos del pokemon', data);
})
.catch((error) => {
    console.log('Error en la respuesta', error);
})
}

const btnPromesa = document.getElementById('btn-promesa')

btnPromesa.addEventListener('click', () => {
    obtenerPokemonConPromesa('pikachu')
})


function crearCarta(nombre, peso, id, img){
    let article = document.createElement('article')
    article.innerHTML = `
    <img src=${img} alt="PokemonImage"/>
    <h2>${nombre}</h2>
    <p>Peso: ${peso}</p>
    <p>id: ${id}</p>
    `
    article.classList.add('carta')

    document.getElementById('render').appendChild(article)
}

async function obtenerPokemonAsync(){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)

        if(!response.ok){
            throw Error('Error en la respuesta del pokemon:', response.status)
        }

        const data = await response.json()
        for(let index = 0; index < data.results.length; index++){
            const detalleReponse = await fetch(data.results[index].url)

            if(!detalleReponse.ok){
                throw Error('Error en la respuesta del detalle del pokemon:', detalleReponse.status)
            }

            const dataDetalle = await detalleReponse.json()

            crearCarta(dataDetalle.name, dataDetalle.weight, dataDetalle.id, dataDetalle.sprites.front_default)
            
        }
    } catch(error){
        console.log('Error en la respuesta ASYNC', error);
    }
}

const btnAsync = document.getElementById('btn-async')

btnAsync.addEventListener('click', () => {
    obtenerPokemonAsync()
})

// EJERCICIOS

// 1. Añadir y quitar elementos (push, pop, shift, unshift)
// Crea un array llamado frutas con al menos 3 frutas:
// js
// Copy
// Edit
// const frutas = ['manzana', 'banana', 'pera'];
// Agrega al final del array la fruta 'naranja' usando push.
// Quita la última fruta del array usando pop.
// Agrega 'kiwi' al principio del array usando unshift.
// Quita la primera fruta usando shift.
// Muestra el array final por consola.
// Objetivo: Practicar la manipulación directa de los extremos de un array.

// 2. Cortar y modificar secciones de un array (slice, splice)
// Crea un array llamado colores con 5 colores:
// js
// Copy
// Edit
// const colores = ['rojo', 'verde', 'azul', 'amarillo', 'morado'];
// Usa slice para obtener los 3 primeros colores en un nuevo array llamado primerosTres.
// Usa slice para obtener del array original los 2 últimos colores en un nuevo array llamado ultimosDos.
// Con splice, elimina el color que se encuentra en el índice 1.
// Con splice, a partir del índice 1, inserta el color 'negro' y 'blanco'.
// Muestra los arrays resultantes por consola.
// Objetivo: Ver la diferencia entre:

// slice: retorna una copia de una sección sin modificar el original.
// splice: modifica el array original, eliminando o insertando elementos.
// 3. Recorrer y transformar arrays (forEach, map)
// Crea un array de números, por ejemplo:
// js
// Copy
// Edit
// const numeros = [2, 4, 6, 8, 10];
// Usa forEach para imprimir cada número en la consola con un texto que diga Número: X.
// Usa map para crear un nuevo array dobles que contenga cada número multiplicado por 2.
// Imprime el array dobles por consola.
// Objetivo: Distinguir entre

// forEach: recorre cada elemento pero no devuelve nada.
// map: recorre y devuelve un nuevo array transformado.
// 4. Filtrar y encontrar elementos (filter, find, findIndex)
// Parte de un array de objetos que representen usuarios (o crea uno sencillo). Ejemplo:
// js
// Copy
// Edit
// const usuarios = [
//   { nombre: 'Ana', edad: 25 },
//   { nombre: 'Juan', edad: 17 },
//   { nombre: 'María', edad: 30 },
//   { nombre: 'Pedro', edad: 15 }
// ];
// Usa filter para crear un array con los usuarios mayores de edad (edad >= 18).
// Usa find para buscar el primer usuario que tenga exactamente 17 años.
// Usa findIndex para encontrar la posición (índice) de un usuario con nombre 'María'.
// Muestra los resultados por consola.
// Objetivo: Practicar la búsqueda selectiva de elementos en un array.

// 5. Reducción de arrays (reduce)
// Toma un array de números, por ejemplo:
// js
// Copy
// Edit
// const calificaciones = [8, 9, 10, 7, 6, 10];
// Usa reduce para calcular la suma total de las calificaciones.
// Calcula el promedio de calificaciones usando la suma y la longitud del array.
// Imprime en consola el promedio final.
// Objetivo: Ver cómo reduce puede “acumular” valores de todo el array en un único resultado.

// 6. Encadenar métodos (filter + map + reduce)
// Para practicar un poco más, haz algo como esto:

// Crea un array de números, por ejemplo:
// js
// Copy
// Edit
// const numeros = [5, 12, 4, 22, 9, 10, 33, 2];
// Filtra (filter) los números que sean mayores que 5.
// A los números resultantes, aplícales map para multiplicarlos por 3.
// Finalmente, usa reduce para sumarlos todos.
// Muestra el resultado final por consola.
// Objetivo: Practicar el uso combinado de métodos de array para lograr un resultado.

// 7. Ordenar elementos (sort)
// Crea un array de strings desordenados, por ejemplo:
// js
// Copy
// Edit
// const animales = ['perro', 'gato', 'elefante', 'abeja', 'delfín'];
// Usa sort para ordenarlos alfabéticamente.
// Crea un array de números y ordénalos de menor a mayor.
// Pista: Por defecto, sort ordena como strings, así que si quieres que ordene numéricamente, necesitarás pasarle un callback:

// js
// Copy
// Edit
// numeros.sort((a, b) => a - b);
// Muestra los arrays ordenados.
// Objetivo: Practicar cómo ordenar arrays de texto y numéricos.