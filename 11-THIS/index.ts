/* la diferencia entre las funciones normales y las arrow functions 
es su contexto, es decir, que apunten hacia su elemento superior.

Las function normales modifican o mutan dicho contexto, es decir,
ya no apuntan a hacia su elemento superior si no, hacia ellas
mismas, por ende, los elementos que hacen parte del elemento PADRE
se convierten en undefined para las funciones normales. 

Pero esto SOLO se puede evidenciar cuando una funcion normal
se encuentra dentro de otra funcion normal.

Si solo tenemos una funcion normal inicialmente no se tiene
ningun problema */
let capitan_america = {
 name: 'Hulk',
 darOrden_Hulk: function () {
  console.log(this.name);
 },
};

capitan_america.darOrden_Hulk();

/* THIS, para no perder el contexto, entonces debo aplicar
un arrow function internamente en el metodo o funcion normal */

/* Experimentar con dos Arrow Function */
let capitan = {
 name: 'Hulk',
 darOrden_Hulk: function () {
  setTimeout(() => {
   console.log(this.name);
  });
 },
};

capitan.darOrden_Hulk();

/* Por Otra Parte, En La Clases "THIS" Hace Referencia A Ella
Misma, Pero Como Todavia No Se Ha Instanciado, No Podemos
Poner El Nombre De Dicha Clase, Sino Que Se Hace Una Referencia
Con La Palabra "THIS" Y Los Mismo Pasa Con La Palabra "SUPER",
Pero Esto Se Evidencia Cuando Existe Herencia */
