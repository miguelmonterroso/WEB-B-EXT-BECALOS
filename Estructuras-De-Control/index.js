// App para validar entra al parque tematico

// 1. Edad y altura, tener 12 años y medir mas de 140cm

// 2. pago o pase, debe haber hecho el pago de $20 o tener un pase VIP 

// 3. Condicion de salud, No debe tener restricciones medicas

// 4. Acompañante, si el visitante es menor de 16 años debe estar acompañado por un adulto.

let edad = Number(prompt('Ingresa tu edad'))

let altura = Number(prompt('Ingresa tu altura en CM'))


if(edad >= 12 && altura >= 140){
    
    let pago = prompt('Hiciste el pago de la entrada? si - no').toLocaleLowerCase()

    let pase = prompt('Tienes un pase VIP? si - no').toLocaleLowerCase()

    let salud = prompt ('Tienes alguna condicion medica? si - no').toLocaleLowerCase()

    if(edad < 16){
        let acompañante = prompt('eres menor de 16, te acompaña un adulto? si - no').toLocaleLowerCase()
        if(acompañante === 'si'){
            

            if((pago === 'si' || pase === 'si') && salud === 'no'){
                console.log('Puedes ingresar al parque con tu acompañante, bienvenidos!')
            }
            else if(pago === 'no' || pase === 'no'){
                console.log('No puede entrar porque no tienes ningun pago ni pase.')
            }
            else{
                console.log('No puedes ingresar por tu condicion de salud');
            }
        }
        else{
            console.log('ya que eres menor y no te acompaña un adulto, no puedes ingresar');
        }
    }
    else{
        if((pago === 'si' || pase === 'si') && salud === 'no'){
            console.log('Puedes ingresar al parque, bienvenido!')
        }
        else if(pago === 'no' || pase === 'no'){
            console.log('No puede entrar porque no tienes ningun pago ni pase.')
        }
        else{
            console.log('No puedes ingresar por tu condicion de salud');
        }
    }
}
else{
    console.log('No cumples con los requisitos para ingresar');
}
