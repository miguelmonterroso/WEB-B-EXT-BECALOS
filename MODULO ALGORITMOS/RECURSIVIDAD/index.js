// function contar(numero){
//     if(numero > 5){
//         return;
//     }
//     console.log(numero);
//     contar(numero + 1)
// }

// contar(1);


// Sacar el factorial de un numero por medio de recursividad


function factorial(numero){
    if( numero === 1 ){ // si llega 1, ahi termina, ya no sigue bajando
        return 1;
    }

    // 3 * factorial(2)
    // 2 * factorial(1)
    // factoria(1) = 1

    return numero * factorial(numero - 1)
    // Yo no se la respueta todavia, pero si me la de un numero menor yo la multiplico y te la devuelvo 
}

console.log(factorial(5)) // Cuanto es el factorial de 3? 


//Factorial(5) = 5 * 24 = 120
//Factorial(4) = 4 * 6 = 24
//Factorial(3) = 3 * 2 = 6
//Factorial(2) = 2 * 1 = 2
//Factorial(1) = 1

// STACK:
// Factorial(1) = resuelve y se sale
// Factorial(2) = 2 * 1 = 2 resuelve y se sale
// Factorial(3) = 3 * 2 = 6 resuelve y se sale
// Factoria(4) = 4 * 6 = 24 resuelve y se sale
// Factorial(5) = 5 * 24 = 120 resuelve y se sale de la pila

// LIFO Last in, First Out