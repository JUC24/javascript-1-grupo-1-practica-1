/*Ejercicio 1: Escriba un programa que imprima, utilizando ciclos, un cuadrado de 10x10
caracteres, formado por 2 triángulos, uno con el carácter '#' y el otro con el carácter
'*':

**********
*********#
********##
*******###
******####
*****#####
****######
***#######
**########
*#########
*/

function printSquare (){
  for(let i = 0; i <= 10; i++) {
    let resultado = ' ';
    for(let x = 0; x <= 10; x++){
      if (i >= x ){
        resultado += "#";
      } else {
        resultado += "*";
      }
    }
    console.log(resultado)
  }
}

/*Ejercicio 2: Escriba una función que calcule el valor de un número N elevado por otro número
M. (La función debe de recibir ambos parámetros).*/

function potencia (valorBase, valorElevar){
  let valorElevado = valorBase**valorElevar;
  
  console.log(valorBase + ' Elevado ' + valorElevar +' = ' + valorElevado);
}

/*Ejercicio 3: Escriba una función que resuelve el problema del ejercicio anterior de manera
recursiva.*/

function potenciaRecursiva(valbase, valexponente){
  if(valexponente == 0){
    return 1;
  }
  else{
    return valbase * potenciaRecursiva(valbase, valexponente - 1);
  }
}



/*Ejercicio 4: Escriba una función recursiva que reciba un arreglo y calcule la suma de sus
elementos.*/

function sumaRecursiva (numbers){
  if(numbers.length === 1){
    return numbers[0];
  }else{
    return numbers.pop(0) + sumaRecursiva(numbers);
  }
}




function main(){
  printSquare ()
  potencia (2, 2);
  console.log('La suma del arreglo recibido es: ' + sumaRecursiva ([1,2,4,6,10]))
  console.log("Potencia de Forma recursiva = " + potenciaRecursiva(2, 2))
}

main()