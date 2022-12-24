/*---5.Pedir 2 números y mostrar el menor */

var num1 = prompt('Escribe el primer número');
var num2 = prompt('Escribe el segundo número');

if (num1 < num2) {
    console.log('El primero número es menor' + ', este número escribiste: ' + num1);
}else if (num1 > num2){
    console.log('El segundo número es menor' + ', este número escribiste: ' + num2);
}else{
    console.log('Cometiste un error intenta otra vez');
}