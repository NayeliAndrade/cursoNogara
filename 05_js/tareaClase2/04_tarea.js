/*---4.Pedir dos números y mostrar cual es mayor*/

var num1 = prompt('Escribe un número');
var num2 = prompt('Escribe el segundo número');

if (num1 > num2) {
    console.log('El primer número es mayor' + ', este número escribiste: ' + num1);
}else if ( num1 < num2){
    console.log('El segundo número es mayor' + ', este número escribiste: ' + num2);
}else{
    console.log('Cometiste un error escribe otra vez');
} 