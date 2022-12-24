/* 10.Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el
 usuario en un prompt. */

var numeroIngresadoPorElUsuario = prompt('Ingrese un número: ');
numeroIngresadoPorElUsuario = parseFloat(numeroIngresadoPorElUsuario);

for (var numeroDeRepeticion = 1; numeroDeRepeticion <= numeroIngresadoPorElUsuario; numeroDeRepeticion++){
    console.log(numeroDeRepeticion);
}