// 'abc'
function permutaciones(cadena){
    const resultado = [];

    function backtrack(camino, usado){
        console.log('Entrando al backtrack');
        console.log('camino actual', camino.join(''));
        console.log('letras usadas', usado);
        

        if (camino.length === cadena.length){
            const  combinacion = camino.join('')
            console.log('Combinacion encontrada:', combinacion);
            resultado.push(combinacion);
            return;
        }

        for(let i = 0; i < cadena.length; i++){
            
            if(usado[i]) {
                console.log(`Letra ${cadena[i]} ya fue usada, la ignoramos`);
                continue;
            };

            console.log(`Usamos la letra ${cadena[i]} en la posicion ${i}`);
            camino.push(cadena[i]);
            usado[i] = true;

            backtrack(camino, usado)

            const removido = camino.pop();
            usado[i] = false
            console.log(`Quitamos la letra ${removido} y liberamos la posicion ${i}`);
        }

        console.log('Terminamos esta rama con el camino: ', camino.join(''));
        console.log('---------');
    }

    
    console.log('Iniciando combinaciones para', cadena);
    backtrack([], Array(cadena.length).fill(false))
    console.log('resultado final:', resultado);
}

permutaciones('abc')

