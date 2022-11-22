/*
Ejercicio 1: Escriba un programa que solicite un número al usuario e imprima en la consola si el
número es primo (solo divisible entre 1 y él mismo) o no.
*/


/*
Ejercicio 2: Escriba un programa que permita encontrar las soluciones de una ecuación
cuadrática: dadas por la siguiente fórmula:

Implemente detección de errores para verificar que el usuario introduzca valores
correctos para a, b y c. 
Además, debe detectarse el caso en el que la ecuación no tiene
soluciones (cuando b ac 0 ) y notificarlo al usuario.
*/

/*
Ejercicio 3: Escriba un programa que imprima todos los números del 1 al 100, uno por línea.
*/
console.log("Lista Números del 1 - 100")
for(var i = 0; i <= 100; i++){
  console.log(i);
}


/*
Ejercicio 4: Modifique el programa anterior para que sólo imprima los números pares.
*/
console.log("Lista Números pares")
for(var i = 0; i <= 100; i++){
  if(i % 2 === 0){
    console.log(i)
  }
}

/*
Ejercicio 5: Modifique el programa del ejercicio 4 para que imprima 10 números por línea, separados por
un espacio. La primera línea tendrá los números del 1 al 10, la segunda del 11 al 20,
la tercera del 21 al 30 y así hasta llegar a 100.
*/