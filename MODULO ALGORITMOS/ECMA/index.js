// function saludar(nombre){
//     console.log(`bienvenido ${nombre} a tu clase`);
// }


// saludar('Miguel')


// setTimeout(()=>{
//     console.log('termino el tiempo');
    
// }, 2000)


// let carro = {
//     marca: 'bmw',
//     serie: 'm3',
//     year: '2005'
// }

// let { year } = carro;

// console.log(year);

function pedirComida(plato){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(plato === 'pizza'){
                resolve(`Tu ${plato} esta listo!`)
            }
            else{
                reject(`Lo sentimos, no tenemos tu ${plato}`)
            }
        }, 5000)
    })
}

function pedirConPromesa(){
    console.log('Esperado el pedido (PROMESA)');
    pedirComida('pizza')
    .then((respuesta) =>  {
        console.log(respuesta)
        document.write(respuesta)
        alert(respuesta)
        
    })
    .catch((error) => {
        console.log(error)
    })
}


async function pedirConAsync(){
    try{
        console.log('Esperando el pedido (Async/Await');
        const resultado = await pedirComida('pizza')
        console.log(resultado);  

    } catch(error){
        console.log(error);
    }
}





pedirConAsync()