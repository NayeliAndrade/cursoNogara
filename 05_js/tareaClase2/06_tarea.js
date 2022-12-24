/*---6.Preguntar cúal es la contraseña secreta (“Pay de Manzana”)
y si es correcto dejarlo entrar en caso de que no mostrar 
un mensaje de Sigue participando */

var contraseñaSecreta = prompt('¿Cuál es la contraseña secreta?');
if (contraseñaSecreta === 'Pay de manzana') {
    console.log('Puedes pasar');
}else{
    console.log('Sigue participando');
}