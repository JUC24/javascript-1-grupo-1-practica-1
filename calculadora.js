/*Ejercicio 3: En archivos aparte a las dos respuestas anteriores, escriba el HTML necesario para
realizar una calculadora que pueda sumar, restar, multiplicar, dividir. La
página(HTML) debe de mostrar dos campos de texto donde el usuario pueda
escribir dos números de entrada y un botón para cada operación que se ejecute al
hacer click. El número de resultado se puede mostrar en la página(HTML)
o por medio de la consola/alerta.
*/

function sumar(){
  let a = Number(document.getElementById('digito1').value);
  let b = Number(document.getElementById('digito2').value);
  let resultado = a+b
  document.getElementById('resultado').innerHTML = resultado;
}


function Restar(){
  let a = Number(document.getElementById('digito1').value);
  let b = Number(document.getElementById('digito2').value);
  let resultado = a-b
  document.getElementById('resultado').innerHTML = resultado;
}

function multiplicar(){
  let a = Number(document.getElementById('digito1').value);
  let b = Number(document.getElementById('digito2').value);
  let resultado = a*b
  document.getElementById('resultado').innerHTML = resultado;
}

function division(){
  let a = Number(document.getElementById('digito1').value);
  let b = Number(document.getElementById('digito2').value);
  let resultado = a/b
  document.getElementById('resultado').innerHTML = resultado;
}

function limpiar(){
  document.getElementById('calculadora').reset();
}
