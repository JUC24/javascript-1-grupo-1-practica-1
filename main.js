/*
Ejercicio 1: Escriba un programa que solicite un número al usuario e imprima en la consola si el
número es primo (solo divisible entre 1 y él mismo) o no.
*/

let num = prompt("Ingrese un valor: ")

let a = prompt("Ingrese un valor numerico a: ")
let b = prompt("Ingrese un valor numerico b: ")
let c = prompt("Ingrese un valor numerico c: ")
let discriminante = ((b**2) - 4*(a*c));

function ej1(num){ 
    if (num == 0 || num == 1 || num == 4){
      return document.write("El numero ingresado: " + num + " no es primo" + "<br>");
    }
    for (let i = 2; i < num / 2; i++) {
      if (num % i == 0){
        return document.write("El numero ingresado: " + num + " no es primo" + "<br>");
      }
    }
    return document.write("El numero ingresado: " + num + " es primo" + "<br>");
  }

/*
Ejercicio 2: Escriba un programa que permita encontrar las soluciones de una ecuación
cuadrática: dadas por la siguiente fórmula:

Implemente detección de errores para verificar que el usuario introduzca valores
correctos para a, b y c. 
Además, debe detectarse el caso en el que la ecuación no tiene
soluciones (cuando b ac 0 ) y notificarlo al usuario.
*/

function ej2 (a,b,c){
  let resultado1 = x1(a,b,);
  let resultado2 = x2(a,b,);
  if(discriminante < 0){
    discriminante = - discriminante;
    document.write("No hay soluciones reales" + "<br>");
  }
  if(a != 0){
    x1(a,b)
    x2(a,b)
  }
  document.write("Dis = " + discriminante + "<br>")
  document.write("x1 = " + resultado1 + "<br>")
  document.write("x2 = " + resultado2 + "<br>")
}

function x1(a,b){
  return (-b + Math.sqrt(discriminante)) / 2*a;
}

function x2(a,b){
  return (-b - Math.sqrt(discriminante)) / 2*a
} 

/*
Ejercicio 3: Escriba un programa que imprima todos los números del 1 al 100, uno por línea.
*/

function ej3(){
  document.write("Lista Números del 1 - 100" + "<br>")
  for(var i = 1; i <= 100; i++){
    document.write(i.toString() + "<br>");
  }
}

/*
Ejercicio 4: Modifique el programa anterior para que sólo imprima los números pares.
*/

function ej4(){
  document.write("Lista Números pares" + "<br>")
  for(var i = 1; i <= 100; i++){
    if(i % 2 === 0){
      document.write(i.toString() + "<br>");
    }
  }
}

/*
Ejercicio 5: Modifique el programa del ejercicio 4 para que imprima 10 números por línea, separados por
un espacio. La primera línea tendrá los números del 1 al 10, la segunda del 11 al 20,
la tercera del 21 al 30 y así hasta llegar a 100.
*/

function ej5(){
  document.write("Lista Números del 1 - 100" + "<br>")
  let e = 0;
  for(var i = 0; i <= 100; i++){
      document.write(i.toString() + " ")
      if (e == 10) {
          document.write("<br>")
          e = 0;
      }
      e++;
  }
}


function main (){
  ej1(num)
  ej2(a,b,c)
  ej3()
  ej4()
  ej5();
}

main ()
