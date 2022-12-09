//declaracion variables
let canvas;
let ctx;
let fps = 30;
let canvasX = 300; //pixelsc de ancho
let canvasY = 250; //pixels de largo
let cuadroX;
let cuadroY;
// variables del tablero de juego
let board;
let rows = 150;
let columns = 150;
let blanco = '#ffffff'; 
let negro = '#000000';

//funcion Crear tablero de juego
function crearTable2d(f,c){
  let obj = new Array(f);
  for (y = 0; y < f; y++){
    obj[y] = new Array(c);
  };
  return obj;
}

//crear moleculas agentes (metodo)
let agente = function(x,y,estado){
  this.x = x;
  this.y = y;
  this.estado = estado;  // vivo = 1, muerto = 2
  this.estNext = this.estado;  //estado que tendra en el siguiente siclo
  this.vecinos = [];  //guardar listado de vecinos
  //metodo que añade a los vecionos del objeto actual
  this.addvecino = function(){
    let xvecino;
    let yvecino;
    for(i=-1; i<2; i++){
      for(j=-1; j<2; j++){
        xvecino = (this.x + j + columns) % columns;
        yvecino = (this.y + i + rows) % rows;
        //descarte agente actual (metodo)
        if(i != 0 || j != 0){
          this.vecinos.push(board[yvecino][xvecino]);
        }
      }
    }
  }
  //metodo que ilustra en la pantalla
  this.draw = function(){
    let color;
    if(this.estado == 1){
      color = blanco;
    }else{
      color = negro
    }
    ctx.fillStyle = color;
    ctx.fillRect(this.x * cuadroX, this.y * cuadroY, cuadroX, cuadroY);
  }
  //definimos las leyes de comportamiento de la celula (metodo)
  this.newciclo = function(){
    let sumar = 0;
    //calculo cantidad de vecinos vivos
    for(i = 0; i < this.vecinos.length; i++){
      sumar += this.vecinos[i].estado;
    }
    //definimo normas
    this.estNext = this.estado; //estado por default
    //muerte: tiene menos de 2 o mas de tres 
    if(sumar < 2 || sumar > 3){
      this.estNext = 0;
    }
    //vida reproduccion: tiene 3 vecinos
    if(sumar == 3){
      this.estNext = 1;
    }
    //cambios del agente
    this.alteracion = function(){
      this.estado = this.estNext;
    }
  }
}

//funcion inicializar tablero
function inicializarTable(obj){
  let estado;
  for(y = 0; y < rows; y++){
    for(x = 0; x < columns; x++){
      estado = Math.floor(Math.random()*2);
      obj[y][x] = new agente(x,y,estado);
    }
  }
  for(y = 0; y < rows; y++){
    for(x = 0; x < columns; x++){
      obj[y][x].addvecino();
    }
  }
};

//funcion de inicio
function start(){
  //Enlace con el objeto canvas.
  canvas = document.getElementById('Table');
  ctx = canvas.getContext('2d');
  //Estructura canvas, largo y ancho
  canvas.width = canvasX;
  canvas.width = canvasY;
  //calculo del tammaño de los pixels
  cuadroX = Math.floor(canvasX/rows);
  cuadroY = Math.floor(canvasY/columns);
  //Crear el tablero
  board = crearTable2d(rows,columns);
  //inicializamos tablero
  inicializarTable(board);
  //ejecucion bucle
  setInterval(function(){principal();},1000/fps);
}

//funcion dibujar el canvas
function drawtable(obj){
  //dibuja los agentes
  for(y = 0 ; y < rows; y++){
    for(x = 0 ; x < columns; x++){
      obj[y][x].draw();
    }
  }
  //dibuja el sigueinte ciclo
  for(y = 0 ; y < rows; y++){
    for(x = 0 ; x < columns; x++){
      obj[y][x].newciclo();
    }
  }
  //aplica la ateracion
  for(y = 0 ; y < rows; y++){
    for(x = 0 ; x < columns; x++){
      obj[y][x].alteracion();
    }
  }
};

//funcion limpiar el canvas
function borraCanvas(){
  canvas.width = canvas.width;
  canvas.height = canvas.height;
}

function principal(){
  borraCanvas();
  drawtable(board)
}