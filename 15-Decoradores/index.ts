/* DECORADORES DE CLASES */

/* El docorador va a recibir el constructor de la clase */
function consola(constructor: Function) {
 console.log(constructor);
}

@consola
class Villano {
 constructor(public nombre: string) {
  console.log('Constructor De La Clase Villano');
 }
}
console.log('----------------------------------------------\n');

/* DECORADOR DE FACTORY O DE FABRICA */
/* Puede recibir parametros pero debe retornar algo 
que pueda ser utilizado como un decorador */
function consola2(constructor: Function) {
 console.log(constructor);
}

function imprimirConsola(imprimir: boolean): Function {
 return consola2;
}

@imprimirConsola(true)
class Heroe {
 constructor(public nombre: string) {
  console.log('Constructor De La Clase Heroe');
 }
}
console.log('----------------------------------------------\n');
