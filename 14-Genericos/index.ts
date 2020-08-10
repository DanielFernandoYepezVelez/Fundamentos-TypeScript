/* FUNCIONES GENERICAS */
/* Los Genericos, Nos permiten Entregarle A TypeScript un
tipo de dato any, para que el(TS) se encarge de mostrarme
que propiedades y que metodos se pueden aplicar a ese tipo 
de dato */

function regresar<T>(arg: T) {
 return arg;
}

console.log(regresar(34444.555).toFixed(2));
console.log(regresar('hola compañeros').toUpperCase());
console.log(regresar(true).valueOf());
console.log(regresar(null), '\n');
console.log('############################################');

/* Pero tambien a las funciones genericas nosostros podemos
indicarles que tipo de dato van a manejar, pero al mismo tiempo
darle flexibilidad como lo vimos en la parte superior */
function heroesGenerico<T>(arg: T) {
 return arg;
}

type Heroes = {
 nombre: string;
 nombreReal: string;
};

type Villanos = {
 name: string;
 power: number;
};

const deadPool: Villanos = {
 name: 'DeadPool',
 power: 12233,
};

const thor: Heroes = {
 nombre: 'Thor',
 nombreReal: 'ThorSito',
};

/* Como La función es generica, recibe el tipo de dato que le indiquemos */
console.log(heroesGenerico<Villanos>(deadPool));
console.log(heroesGenerico<string>('Hola Mundo'));
console.log(heroesGenerico<Heroes>(thor));
console.log(heroesGenerico<boolean>(false), '\n');
console.log('############################################');

/* ARREGLOS GENERICOS 
No tienen mucho sentido hace lo mismo que los arrays normales */
const nuevoHeroes: Array<string> = ['Heroe1', 'Heroe2', 'Heroe3'];
const nuevoHeroe: string[] = ['Heroe1', 'Heroe2', 'Heroe3'];
console.log(nuevoHeroes);
console.log(nuevoHeroe);

/* CLASES GENERICAS */
/* Esta clase solo recibe strings o numeros */
class Cuadrado<T extends string | number> {
 constructor(private base: T, private altura: T) {}
 area(): number {
  /* Los + le dicen que convierta los valores que lleguen a
   esas variables en numeros y asi poder ejecutar la
   multiplicación */
  return +this.base * +this.altura;
 }
}

const cuadrado = new Cuadrado<number | string>(5, 5);

console.log('\n############################################');
console.log(cuadrado.area());

/* Clase Generica Recibe Cualquier Dato*/
class CuadradoDos<T> {
 constructor(private base: T, private altura: T) {}
 area(): number {
  /* Los + le dicen que convierta los valores que lleguen a
   esas variables en numeros y asi poder ejecutar la
   multiplicación */
  return +this.base * +this.altura;
 }
}

const cuadradoDos = new CuadradoDos<number | string>(5, 5);

console.log('\n############################################');
console.log(cuadrado.area());
