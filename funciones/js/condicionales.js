// tipo de dato Boolean, falso o verdadero
// const verdadero = true;
// const falso = false;

const edad = prompt('Por favor escriba su edad')

// Los operadores de comparacion nos devuelven un true o un false (verdadero o falso)
// const validacion = edad >= 18
// console.log(`La validacion es: ${ validacion }`)


//validar que la edad sea un numero
if(isNaN(edad)) {
    alert('Ingresaste un valor que no es un numero!!!')
} else {
    if(edad >= 18) {
        console.log(`Eres mayor de edad tienes ${edad} años, puedes ingresar`)
    } else {
        console.log(`Eres menor de edad tienes ${edad} años, no puedes ingresar`)
    }
}

console.log('Finalizó el programa')