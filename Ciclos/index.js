// let index = 1;

// while (index <= 10){
//     console.log('iteracion', index);
//     index ++  
// }

// for (let index = 1; index <= 10; index++){
//     console.log('iteracion', index)
// }

// const emojis = ['🌓', '🌜', '🍥', '🌞']

// console.log(emojis.sort());


// for(let index = 0; index < emojis.length; index++){
//     console.log('iteracion', index);
//     console.log(emojis[index]);
// }

let usuarioMarca = prompt('Ingresa la marca que quieres buscar')
let usuarioColor = prompt('Ingresa el color que quieres buscar')

const autos = [
    { marca: 'Toyota', modelo: 'Corolla', color: 'azul'},
    { marca: 'Honda', modelo: 'Civic', color: 'rojo'},
    { marca: 'Subaru', modelo: 'WRX', color: 'gris'},
    { marca: 'BMW', modelo: 'M4', color: 'azul'},
    { marca: 'Ford', modelo: 'Mustang', color: 'rojo'},
    { marca: 'Tesla', modelo: 'Model 3', color: 'gris'},
    { marca: 'Chevrolet', modelo: 'Silverado', color: 'blanco'}
]
// Filtrar por marca
let autoBuscado = null;

for(let index = 0; index < autos.length; index++){
    if(autos[index].marca === usuarioMarca){
        autoBuscado = autos[index]
        break;
    }
}

if(autoBuscado){
    console.log('Auto encontrado:', autoBuscado);
} else{
    console.log('No se encontro la marca');
}

// Filtrar por color

const autosDeColor = []

for(let index = 0; index < autos.length; index++){
    if(autos[index].color === usuarioColor){
        autosDeColor.push(autos[index])
    }
}

console.log('Lista de autos de color:', autosDeColor);


//FizzBuzz

// FizzBuzz es un ejercicio clásico en programación que ayuda a mejorar el pensamiento lógico y la estructura de los bucles condicionales. Tu tarea es escribir un programa en JavaScript que recorra los números del 1 al 100 y siga estas reglas:

// Si un número es múltiplo de 3, imprime "Fizz".
// Si un número es múltiplo de 5, imprime "Buzz".
// Si un número es múltiplo de 3 y de 5, imprime "FizzBuzz".
// Si un número no es múltiplo de 3 ni de 5, simplemente imprime el número.

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// ...
// 98
// Fizz
// Buzz
