/* 5.Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no,
 mostrar el resultado con console.log */

var numeroDivisibleCinco = prompt('Ingresa un número');
numeroDivisibleCinco = parseInt(numeroDivisibleCinco);
if (numeroDivisibleCinco % 5 == 0){
    console.log('Es divisible de 5');
}else{
    console.log('No es divisible de 5');
} 
