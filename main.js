/*
Escriba un programa que convierta un número dado a horas y minutos. Ej 220 = 3 horas y 40 minutes
branch de git: quiz-2
*/

let val = prompt("Ingrese un valor que desee convertir a horas y minutos: ")
val = Number(val)

function horaMinutos(val){
  let horas = Math.floor (val/60);
  let minutos = val % 60;
  return ("La hora es: "+horas+" horas, con "+minutos+" minutos")
}

function main(){
  console.log(horaMinutos(val))
}

main()