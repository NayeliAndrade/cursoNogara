/*---8.Preguntar la edad del usuario y si es mayor de 18 mostrar 
mensaje de que ya puede manejar*/

var usuario = prompt('Escribe tu edad');
if (usuario < 19) {
    console.log('Todavia no puedes manejar');
}else{
    console.log('Ya puedes manejar');
}