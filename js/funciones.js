// Función sin parametros
// const saludar = () => {
//     console.log('Hola!!!');
// };

//que son los backtics y como colocarlos en su teclado ``
const saludar = (nombre, apellido) => {
    // console.log('Hola ' + nombre);
    console.log(`Hola mi nombre es: ${ nombre } y mi apellido es ${ apellido }`);
};

saludar('sebas', 'amayaa');
saludar('carlos', 'hidalgo');
saludar('juan', 'realpe');
saludar('otro nombre', 'otro apellido');

const suma = (a, b = 7) => {
    let resultado = a + b;
    console.log(`El resultado es: ${ resultado }`);
};

suma(1, 2);
suma(5, 100);
suma(1, '2');
suma(3)