//Realizar un objeto que tenga al menos 5 propiedades y 3 métodos que modifiquen propiedades internas.

const casa = {
  terreno:'montañoso',// pripiedad, 
  paredes: 'cemento',
  techo: 'zing',
  color: 'azul',
  extras: ['ventanas', 'cuartos', 'baños', 'cocina', 'comedor'],
  cambiarTerreno: function (newterreno){
    this.terreno = newterreno
  },
  pintar: function (newcolor){
    this.color = newcolor
  },
  newtecho: function (newmaterial){
    this.techo = newmaterial
  }
};

const val = 'paredes';
console.log('Las paredes son de: ' + casa[val]);

console.log('Antiguo terreno: ' + casa.terreno);
casa.cambiarTerreno('arcilloso');
console.log('Nuevo terreno: ' + casa.terreno);

console.log('Antiguo color: ' + casa.color);
casa.pintar('verde');
console.log('Nuevo color: ' + casa.color);

console.log('Antiguo materia: ' + casa.techo);
casa.newtecho('valdosas');
console.log('Nuevo material: ' + casa.techo);