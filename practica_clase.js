//Camila Fallas
//VAleria Murillo
//Jason Umaña 


function factorial(numero) {
  let result = 1;
  for(let i = numero; i>0; i--){
    result *= i;
  }

  return result;
}

console.log("Factorial con ciclo for: " + factorial(7));


function factRec (numero) { 
  if (numero == 0){ 
		return 1; 
	}

	return numero * factRec (numero-1); 
}

console.log("Factorial recursivo: " + factRec(7));

//Ejercicio 3: Escriba una funcion que reciba un numero y de manera recursiva retorne un string especificando si el numero es par o impar.
//Para este caso no es posible utilizar / o %.

function parImpar (numero) {
  if (numero === 0){
    return 'Numero ' + true + ' es par';
  }
  if (numero === 1) {
    return 'Numero ' + false + ' es impar';
  } else {
    numero = numero -2;
    return parImpar (numero);
  }
}

console.log (parImpar (4));