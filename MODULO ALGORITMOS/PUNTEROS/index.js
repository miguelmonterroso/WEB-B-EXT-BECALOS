// Ejemplo 2 punteros

// function encontrarParDeNumeros(arreglo, target){
//     // definir punteros
//     let izquierda = 0;
//     let derecha = arreglo.length - 1;

//     while(izquierda < derecha){

//         let suma = arreglo[izquierda] + arreglo[derecha];

//         if(suma === target){
//             console.log(`Encontrado: ${arreglo[izquierda]} + ${arreglo[derecha]} = ${target}`);
//             return true;
//         }

//         if(suma < target){
//             izquierda++;
//         }
//         else{
//             derecha--;
//         }
//     }

    // console.log('No se encontro el target');
    // return false;

// }


// let arregloParaSumar = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// encontrarParDeNumeros(arregloParaSumar, 1000)


// 2 punteros con strings

function esPalindromo(palabra){
    let izquierda = 0;
    let derecha = palabra.length - 1;

    while(izquierda < derecha){
        if(palabra[izquierda] !== palabra[derecha]){
            console.log(`La palabra ${palabra} no es palindromo `);
            return false;
        }
        izquierda++
        derecha--
    }

    console.log(`La palabra ingresada "${palabra}", es palindromo`);
    return true
}


esPalindromo('anita lava la tina')

// EJERCICIO, HACER QUE LA FUNCION EVALUE TAMBIEN FRASES!