/* 8.Crear un programa que le pida al usuario primero un números al usuario a través de un prompt
 y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario. */

var numero1 = prompt('Escribe un número: ');
var numero2 = prompt('Escribe un número: '); 
numero1 = parseInt(numero1);
numero2 = parseInt(numero2); 
var mayor; 
if (numero1 > numero2 ? mayor = numero1 : mayor = numero2){
    alert('El valor mayor es: '+ mayor); 
}