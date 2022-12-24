/* 1.Pedir 3 nombres y su edad correspondiente, para después mandar 
por mensaje al que tiene más edad*/

var nombre1 = prompt('Escribe tu nombre por favor:');
var edad1 = prompt('Escribe tu edad');
console.log(nombre1 + ' ' + edad1);

var nombre2 = prompt('Escribe tu nombre por favor'); 
var edad2 = prompt('Escribe tu edad');
console.log(nombre2 + ' ' + edad2);

var nombre3 = prompt('Escribe tu nombre por favor');
var edad3 = prompt('Escribe tu edad');
console.log(nombre3 + ' ' + edad3);

if (edad1 > edad2 && edad1 > edad3) {
    console.log('edad 1 es mayor '+ nombre1 + ' '+ edad1);
}else if (edad2 > edad1 && edad2 > edad3){
    console.log('edad 2 es mayor '+ nombre2 + ' '+ edad2);
}else if (edad3 > edad1 && edad3 > edad2){
    console.log('Edad 3 es mayor '+ nombre3 + ' '+ edad3);
}else{
    console.log('son iguales');
} 
