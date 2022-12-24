/* Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, 
mostrar el resultado con console.log */

var numero = prompt('Escribe un número');
numero = parseInt (numero);
if (numero % 5 == 0 && numero % 11 == 0){
    console.log('Es divisible entre 5 y 11');
}else{
    console.log('No es divisible');
}