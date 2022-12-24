/* Operaciones básicas, Tipos de datos, Prompt y Alert */

/* 1.Escribir un programa que muestre un prompt donde el usuario ingresa un número, 
luego muestra otro prompt pidiendo otro número, 
finalmente el programa muestra una alerta con el resultado de la suma.*/

var numero1 = prompt('Ingresa un número');
numero1 = parseFloat(numero1);
console.log(numero1);

var numero2 = prompt('Ingresa otro numero');
numero2 = parseFloat(numero2);
console.log(numero2);
alert('Resultado de sumar dos números: ' + (numero1 + numero2));