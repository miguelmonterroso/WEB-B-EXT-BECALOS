const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]; //39

const valor = 4;

function subArray(arr, valor){

    if(arr.length < valor){
        return null 
    }

    let maxSum = 0;

    // Iniciamos el bucle para recorrer el arreglo, basados en la ventana (valor) que asignamos
    for(let index = 0; index < valor; index++){
        maxSum += arr[index];
    }

    let tempSum = maxSum;

    for(let i = valor; i < arr.length; i++){
        tempSum = tempSum - arr[i - valor] + arr[i];
        maxSum = Math.max(maxSum, tempSum); // = 39

        if(tempSum > maxSum){

        }
    }

    return maxSum

    // tempSum = 17 
    // tempSum = 17 - 1 + 23 = 39 
    // tempSum = 39 - 4 + 3 = 38
}

console.log(subArray(arr, valor));

//EJERCICIO:

// Encuentra el promedio más alto
// Dado un arreglo de números enteros que representa calificaciones obtenidas en diferentes exámenes, y un número x que representa la cantidad de exámenes que se deben considerar al mismo tiempo, escribe una función que devuelva el promedio más alto de cualquier grupo de x exámenes consecutivos.

// EJEMPLO:
// const notas = [70, 85, 90, 75, 60, 95, 88];
// const x = 3;

//Resultado esperado: 81 | Porque [90, 75, 60] = promedio 75, pero [95, 88, 60] = 81

// OBJETIVO:

// Crear una función llamada maxAverage(notas, x).

// Usar la técnica Sliding Window.

// Retornar el promedio más alto que se pueda obtener de cualquier grupo de k notas consecutivas.

// (Opcional) Mostrar también qué grupo de notas generó ese promedio.


// BONUS:
// Modifica tu función para que también te diga cuáles fueron las notas que generaron ese promedio más alto.

