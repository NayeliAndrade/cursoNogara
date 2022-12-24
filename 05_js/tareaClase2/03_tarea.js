/*--3.Pedir el número de aciertos en el examen y si:
Más de 30 aciertos es igual a 6
Más de 40 aciertos es igual a 8
Más de 50 aciertos es igual a 10
Menos o igual de 30 aciertos es igual a 5 */

var aciertos = prompt('Escribe el número de aciertos en el examen: ')
if (aciertos == 30) {
    console.log('Tu calificación es 6');
}else if (aciertos == 40){
    console.log('Tu calificación es 8');
}else if (aciertos == 50){
    console.log('Tu calificación es 10');
}else if (aciertos <= 30){
    console.log('Tu calificación es 5');
}else{
    console.log('Hola');
} 

/* switch (aciertos) { solo puedes poner variables y no puedes poner operadores logicos solo casos especificos
    case 1: aciertos == 30
        console.log('Tu calificación es 6');
        break;
    case 2: aciertos == 40
        console.log('Tu calificación es 8');
         break;
    case 3: aciertos == 50
        console.log('Tu calificacion es 10');
        break;
    case 4: aciertos == 30
            console.log('Tu calificacion es 5');
        break;
        default:
            console.log('Escribe bien');

} */