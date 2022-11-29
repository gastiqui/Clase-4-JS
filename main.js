// 1) Crear 4 funciones que reciban 2 parámetros numéricos de cualquier tipo, distinto a 0:
// a) la función debe retornar la suma de los dos operandos
// b) la función debe retornar la resta de los dos opernados
// c) la función debe retornar la multiplicación de los dos operandos
// d) la función debe retornar la división de los dos operandos
// Para cada uno de los llamados de las funciones, pasar los dos argumentos numéricos y visualizar el retorno en consola.

// const suma = (a, b) => {
//     if(a != 0 && b != 0){
//         return a + b
//     }else{
//         return "No se debe ingresar un numero igual a cero"
//     }
// }

// const resta = (a, b) => {
//     if(a != 0 && b != 0){
//         return a - b
//     }else{
//         return "No se debe ingresar un numero igual a cero"
//     }
// }

// const multi = (a, b) => {
//     if(a != 0 && b != 0){
//         return a * b
//     }else{
//         return "No se debe ingresar un numero igual a cero"
//     }
// }

// const div = (a, b) => {
//     if(a != 0 && b != 0){
//         return a / b
//     }else{
//         return "No se debe ingresar un numero igual a cero"
//     }
// }

// console.log(resta(5, 10))



// 2) Crear una función que reciba los siguientes parámetros: nombre, apellido, edad, direccion y telefono.
// Retornar como cadena de caracteres, la información del usuario. Podés usar \n para generar saltos de línea.
// Luego al llamar a la función, pase los 5 argumentos y visualice en consola el dato retornado.
// Ejemplo de la visualización: 
// Los datos del cliente son: 
//  Nombre: Carolina,
//  Apellido: Lerner,
//  Edad: 28,
//  Dirección: Calle falsa 123,
//  Teléfono: 11221122.

// const datos = (nombre, apellido, edad, direccion, tel) => {
//     return `
//     Los datos del usuario son los siguientes:
//     nombre: ${nombre}
//     apellido: ${apellido}
//     edad: ${edad}
//     direccion: ${direccion}
//     telefono: ${tel}   
//     `
// }

// console.log(datos("Carolina", "Lerner", "28", "Calle falsa 123", "1122331144"))



// 3) Crear una función que nos permita sacar un porcentaje de un número. Debe recibir dos parámetros: un número que sea al cual se le aplicará el porcentaje y otro número que sea el porcentaje (puede variar desde 0 a 100).
// Con esta información, la función deberá retornar el resultado del porcentaje mediante el siguiente mensaje: `El porcentaje ${porcentaje} del número ${numero} es: ${ ACA VA EL RESULTADO}`
// Si el porcentaje enviado es menor a 0 o mayor a 100, entonces retornar un mensaje con la siguiente frase: `El número ${porcentaje} es un porcentaje inválido` 
// Si el número al cual se le aplicará el porcentaje es 0, entonces retornar un mensaje con la siguiente frase: `Cualquier porcentaje aplicado sobre cero, siempre será cero`.
// Al llamar a la función, pase los 2 argumentos numéricos y visualice en consola el valor retornado.


// const porcentaje = (num, porcentaje) =>{
//     if(porcentaje < 0 || porcentaje > 100){
//         return `El número ${porcentaje} es un porcentaje inválido`
//     }else if(num === 0){
//         return `Cualquier porcentaje aplicado sobre cero, siempre será cero`
//     }else{
//         return num * parseFloat("0." + porcentaje)
//     }
// }
// console.log(porcentaje(20, 50))



// 4) Crear una función que reciba como parámetro un string y que coteje cuántas vocales tiene el argumento pasado en la ejecución de la función. Para ello deberán iterar sobre el string y precisarán de una variable acumuladora que cuente la cantidad de vocales. Retornar el valor de la acumuladora.
// Al llamar a la función, pasarle como argumento un string y visualizar el retorno en consola.

// const vocales = (palabra) => {
//     let cont = 0
//     for(let i = 0; i < palabra.length; i++){
//         if(palabra[i].match(/[aeiouAEIOU]/)){
//             cont++
//         }
//     }
//     return cont
// }

// console.log("la palabra tiene: " + vocales("martin") + " vocales")


