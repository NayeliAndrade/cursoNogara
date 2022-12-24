/* Ejercicios de programación básica #2
1.Crear algoritmo para remover los elementos repetidos en el array:
[1,5,2,3,4,7,1,2,3,5,9,7,5,3,2,0,7,4,1,3,2,4]*/

var arreglo = [1,5,2,3,4,7,1,2,3,5,9,7,5,3,2,0,7,4,1,3,2,4]; 
var sinRepetir = []

console.log(arreglo);
for(var buscador = 0 ; buscador < arreglo.length; buscador++){
    if (!sinRepetir.includes(arreglo[buscador])){
        sinRepetir.push(arreglo[buscador])
        
    }
}

console.log(sinRepetir,"numeros unicos");