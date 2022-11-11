/**
Ejercicio 1:
Escriba un programa que solicite al usuario una lista de números y que, a partir de ellos,
calcule e imprima en la consola los siguientes valores estadísticos:
- Promedio
- Mediana
- Valor mínimo
- Valor máximo
El programa debe solicitar números al usuario y almacenarlos en un array. El programa
continuará solicitando números hasta que el usuario ingrese un string vacío. Cuando esto
ocurra se calcularán e imprimirán los resultados.
Si el usuario ingresa algún valor que no sea un número, este será ignorado y no se
agregará al array.

 */

let valores = [];
let min = 0;
let max = 0;
let flag = true
let inc = 0

function datos(){
  while(flag){
    let numeros = prompt("Digite un valor, cuando no desee ingresar mas numeros precione cuanquier otra letra: ");
    if(numeros === ''){
      break;;
    }else{
      valores.push(Number(numeros));
    }
    inc++
    console.log(valores);
  }
}


function mayorMenor (valores){
  min = valores[0];
  for (let i = 0; i < valores.length; i++){
    if (min > valores[i]){
      min = valores[i];
    };
  
    if (max < valores[i]){
      max = valores[i];
    };
  };

  console.log("El numero menor ingresado fue: " + min);
  console.log("El numero mayor ingresado fue: " + max);
};

function promedio (valores){
  let sum = valores.reduce((before, next) => next += before);
  let prom = sum / valores.length;
  return ("El promedio de los valores ingresados es: " + prom)
};

function mediana(valores) {
  valores.sort((a, b) => a - b);
  let der = Math.floor((valores.length - 1) / 2);
  let izq = Math.ceil((valores.length - 1) / 2);
  let mediana = (valores[der] + valores[izq]) / 2;
  console.log("La media del conjunto devalores ingresados es: " + mediana)
}


function main(){
  datos()
  mayorMenor(valores);
  console.log(promedio(valores));
  mediana(valores);
};

main();

