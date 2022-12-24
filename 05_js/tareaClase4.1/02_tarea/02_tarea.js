/*2.Crear un programa donde el usuario ingrese en un prompt la temperatura
 en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.*/

var temperaturaCelcius = prompt('Ingresa una temperatura en Celcius:');
temperaturaCelcius = parseFloat(temperaturaCelcius);

var temperaturaFarenheit = temperaturaCelcius * 1.8 + 32;
temperaturaFarenheit =parseFloat(temperaturaFarenheit);
alert('Temperatura en Fahrenheit: ' + temperaturaFarenheit + ' °F');