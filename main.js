let number = prompt ('Ingese un número: ');
let string= prompt("Ingrese una palabra: ");
number = Number(number);


function main(){
  console.log(ej_1(number));
  console.log(ej_2(number));
  console.log(ej_3(string));
  console.log(ej_4(string))
}

/**
Ejercicio 1: Escriba un programa que solicite un número al usuario e indique si es:
● Par o impar
● Divisible entre 3
● Divisible entre 5
*/

function ej_1 (number){
  if (number % 2 === 0){
    console.log ('El numero es par');
  }else if (number % 2 === 1){
    console.log('El numero es impar');
  }

  if (number % 3 === 0){
    console.log ('El numero es divisible entre 3');
  }else{
    console.log('No es divisible entre tres');
  }

  if (number % 5 === 0){
    console.log ('El numero es divisible entre cinco');
  }else{
    console.log('El numero no es divisible entre cinco');
  }
}

/**Ejercicio 2: Escriba un programa que solicite al usuario un número e imprima la suma de todos
los números desde 1 hasta ese número.
*/

function ej_2 (number){
  let resultado = 0
  for(let i = 0; i <= 5; i++) {
  resultado += i
  }

  console.log("la sumatoria del numero es:" + resultado);

}

/**
Ejercicio 3: Escribe un programa que reciba un string y retorne el mismo string invertido. Utilice
un while para resolver este ejercicio. hola → aloh
*/

//este no me imprime la solucion y no se bien a que se deba 

function ej_3 (string){
  let inicio = true

  while(inicio){
    let cont = ''
    for(let i = string.lenght-1; i >= 0; i--){
      cont += string[i];
    }
    return cont
  }
  
}


/**
Ejercicio 4: Escriba un programa que reciba una frase y este debe de intercambiar las vocales
por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi”.
*/

/**
Ejercicio 5: Escriba un programa que reciba una palabra y reordene sus letras en orden
alfabético. Ej. hola → ahlo
*/

function ej_4 (string) {
  return string.split("").sort().join("");
}

main();