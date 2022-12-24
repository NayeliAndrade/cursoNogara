/*3.Ordenar de mayor a menor el siguiente array:
[1,8,4,7,3,6,5,2,0]
NOTA: Tomar en cuenta los posibles errores de entrada (Diferente tipo de dato al que se pide).*/

var arreglo = [1,8,4,7,3,6,5,2,0];
var arreglo2 = []

for (var buscador = 0; buscador <= arreglo.length; buscador++){
    console.log(arreglo[buscador]);
    if (arreglo[buscador] > arreglo[0]){
        arreglo2.push(arreglo[buscador])
        console.log(arreglo2);

    }
}