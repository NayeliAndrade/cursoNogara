/* 4.Crear un programa que determine si un número introducido en un Prompt es par o no,
 la respuesta será mostrada en una alerta. */

 var numero = prompt('Escribe un número:');
 numero = parseInt(numero);
 if (numero % 2 ==0){
    alert('Es par');
}else{
    alert('Es impar');
}
