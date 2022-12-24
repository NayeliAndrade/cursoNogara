/*--2.Escribir un programa que muestre en pantalla los números del 1 al 100, 
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 
5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), 
por la palabra “fizzbuzz”.*/

for (numeros = 1; numeros <=100; numeros++){
    if (numeros%3==0 && numeros%5==0){
        console.log('frizbuzz');
    }else if (numeros%3==0){
        console.log('frizz');
    }else if (numeros%5==0){
        console.log('buzz');
    }else{
        console.log(numeros);
    }
}