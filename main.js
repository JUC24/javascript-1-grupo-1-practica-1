/*Ejercicio 1: Escriba un programa que reciba y genere una matriz del tamaño de la entrada y que
contenga una X representada por medio de ‘x’.
*/

function ej1(value){
  let matriz = [];
  for(c = 0; c < value; c++){
    let column = [];
    for(f = 0; f < value; f++){
      if (c === f){
        column.push('x');
      }else if(f + c === value - 1){
        column.push('x');
      }else{
        column.push('');
      }
    }
    matriz.push(column);
  }
  return matriz
}

/*Ejercicio 2: Escriba un programa que reciba dos arreglos con elementos y verifique si ambos
arreglos contienen los mismos elementos. Si ambos arreglos contienen lo mismo
imprima: ‘Los arreglos son iguales’ o si no, imprima los elementos diferentes entre
los dos arreglos.
*/

function ej2(array1,array2){
  let comparador = 0;
  let iguales= true
  if ( array1.length == array2.length ){
    while (comparador < array1.length && iguales == true ){
      if (array1[comparador] != array2[comparador]){
        iguales= false;
      }
        comparador++;
      }

      if (iguales){
        console.log("Los dos arrays son iguales");
      } else {
        console.log("Los dos arrays son diferentes");
      }

    } else {
      console.log("Los arrays no tienen la misma longitud");
    }
}

function main(){
  console.log(ej1(7))
  console.log()
  console.log('............................')
  console.log()
  ej2([1,3,5,8],[1,3,5,8])
}

main()
