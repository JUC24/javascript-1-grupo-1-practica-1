/** 1. Cree un programa que reciba como parámetro un array de números, y
verifique la lista de manera que retorne el número mayor.*/

const array = [1,2,3,4,20,8500,102,416,85,5006,100,]
let max = array [0]
 
function numeromayor(array){
  for (i = 0; i < array.length; i++){  
    if (max < array [i]){
      max = array[i]
    }
  }
  console.log("Arreglo de numeros dados: " + array)
  console.log("El numero mayor del arreglo es: " + max)
}


/** 2. Cree un programa que reciba como parámetro una palabra y verifique si
dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
derecha o de derecha a izquierda, o no. Para la resolución de dicho problema
debe utilizar ciclo for*/

/** 3. Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
ciclos for */

const matriz = [[1,0,0], [0,1,1],[0,1,0]]
let contador = []

function ceros (matriz){
  for (var i; i < matriz.length; i++){
    contador = 0
    for (var j; j < matriz[i]; j++){
      if (matriz[i] = 0){
        contador.push(contador)
      }
    }
    console.log (contador[i])
  }
}

/** 4. Cree un programa que reciba un array de números, verifique cuáles números
están repetidos y retorne un array con dichos números (los que estan
duplicados), si no hay números repetidos en el array debe retornar el
siguiente mensaje: “No se encontraron números repetidos en la lista de
números recibida”. Debe usar un ciclo for. */

const numeros  = [1, 2, 3, 3, 4, , 5, 6, 7,7, 8, 9, 10,10];
let duplicados = [];
const temporalArray = [...numeros].sort();
 
function numduplex(temporalArray){
  for (let i = 0; i < temporalArray.length; i++) {
    if (temporalArray[i + 1] === temporalArray[i]) {
      duplicados.push(temporalArray[i]);
    }else{
      console.log("No se encontraron números repetidos en la lista de números recibida")
    }
  }
  console.log(duplicados);
}
 
/**Haga un programa que reciba un parámetro numérico x, el cual debe ser
mayor o igual a 5, y que imprima un patrón, que simule un triángulo de
asteriscos, como el siguiente. Debe utilizar ciclos for para la solución del
problema. */

const dimension = 12;

function triangulo (dimension){
  for (let i; i < dimension; i++){
    let linea = '';
    for (let cont = 0; cont <= i; cont++){
      linea += '* ';
    }
    console.log(linea);
  }
}

function main(){
  numeromayor(array)
  numduplex(temporalArray)
  triangulo (dimension)
  ceros (matriz)
}

main()

