/* 7.Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor. */

var numero1 = prompt('Ingresa un número');
var numero2 = prompt('Ingresa otro número');
numero1 && numero2 == parseInt(numero1 && numero2);
if (numero1 > numero2){
    alert('El numero 1 es mayor que el numero 2');
}else if (numero1 < numero2){
    alert('El numero 2 es mayor al numero 1')
}else if (numero1 = numero2){
    alert('Son iguales')
}else{
    console.log('Escribe otra vez');
}