/*--2.pedir el nombre del alumno y si:
el nombre es “Pedro” tiene de calificación 8
el nombre es “María” tiene de calificación 10
el nombre es “Juanita” tiene de calificación 7*/

var nombre4 = prompt('Escribe el nombre del alumno que quieras saber su calificación:'); 

if (nombre4 == 'Pedro'){
    console.log('Pedro tiene 8 de calificación');
}else if (nombre4 == 'María'){
    console.log('María tiene de calificación 10');
}else if (nombre4 == 'Juanita'){
    console.log('Juanita tiene de calificación 7');
}else{
    console.log('Escribe bien, revisa que la inicial del nombre sea con mayúscula y si lleva acento colócalo.');
}  