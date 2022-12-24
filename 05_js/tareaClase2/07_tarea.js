/*---7.Crear algoritmo para detectar si un número es par o impar */

var num1 = 1;
var num2 = 2; 
if (num1 % num2 == 0) {
    console.log('es par');
}else if (num1 % num2 == 1){
    console.log('Es impar');
}else{
    console.log('Cometiste un error intenta otra vez');
}