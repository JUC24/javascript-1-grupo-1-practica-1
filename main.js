let year = prompt ("Ingrese un año: ");
let num = prompt ("Ingrese un valor: ");
let texto = prompt("Ingrese un texto: ");
let caracter = prompt("Digite el cracter que desea saber cuantas veces se repite: ");

/*
Ejercicio 1: Escriba un programa que calcule el factorial de un número de manera recursiva.
*/
function ejercicio1 (num) { 
  if (num == 0){ 
		return 1; 
	}

	return num * ejercicio1(num-1);
}
/*
Ejercicio 2: Un año es bisiesto si es divisible entre 4 pero no entre 100, excepto si es divisible entre
400. Por ejemplo, 1996 es bisiesto (divisible entre 4), 1900 no lo es (divisible entre 100)
y 2000 sí lo es (divisible entre 400). Escriba un programa que solicite al usuario un año
y le indique si es bisiesto o no.
*/
function ejercicio2 (year){
  if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)){
    console.log ("El año" , year, " es bisiesto");
  }else{
    console.log("El año ", year," no es bisiesto");
  }
}

/*
Ejercicio 3: Escriba un programa que solicite al usuario un texto y un carácter y le indique al
usuario cuántas veces aparece en el texto ese carácter.
*/
function ejercicio3(texto){
  let arraytext = texto.split('');
  let text = arraytext.join('');
  let cont = [];
  for(var i = 0; i <= arraytext.length; i++) {
    if (arraytext[i] === caracter) {
      cont.push(i);
    }  
  }
  console.log(text);
  console.log("el ccarácter elegido: ", caracter)
  console.log("Cantidad de veces que se repite el carácter elegido del texto ingresado: " , cont.length);
};
/*Ejercicio 4: Escriba un programa que le solicite al usuario adivinar un número “secreto” del 1 al
100. El programa debe continuar preguntando por nuevos números al usuario hasta que lo adivine
o ingrese un cero para salir. El programa debe indicar, cada vez que el usuario falle, si el número
ingresado es mayor o menor que el número a adivinar.
*/
/*
Ejercicio 5: Escriba un programa que solicite un texto y lo imprima en la consola con todos los
espacios en blanco removidos. Por ejemplo, si el usuario introduce “May the force be
with you”, el programa debe retornar “Maytheforcebewithyou”.
*/
function ejercicio5(texto){
  let union = texto.replace(/\s+/g, '');
  return (union);
};



function main(){
  console.log("Factorial del numero ", num ,"es: " ,ejercicio1(num));
  ejercicio2(year);
  ejercicio3(texto);
  console.log("Texto unido: ", ejercicio5(texto));
};

main();


