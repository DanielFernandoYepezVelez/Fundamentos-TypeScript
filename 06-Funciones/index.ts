/* Recordar El Scope De Los THIS, Con Una Función Normal Y Una Función Tipo Arrow Function */

/* Esta Es Una Función Auto-Invocada Tipo Arrow Function*/
((): string | boolean => {
 const gretting: string = `Hola Arrow Function`;
 const boolean: boolean = true;

 console.log(gretting, boolean);
 console.log(' ');

 return gretting + boolean;
})();

/* Esta Es Una Función Auto-Invocada De Tipo Function*/
(function (): string | boolean {
 const gretting: string = `Hola Function Normal`;
 const boolean: boolean = false;

 console.log(gretting, boolean);
 console.log(' ');

 return gretting + boolean;
})();

function mostrarProducto(): string {
 let articulo: string = 'Televisor';
 return articulo.toUpperCase();
}
console.log(mostrarProducto());
console.log(' ');
/* ------------------------------- */

const valor = (): number => {
 return 333.45654 + 4444.5666;
};

console.log(valor());
console.log(' ');
/* ------------------------------- */

let descuento = function (): boolean {
 return true;
};
console.log(descuento());
console.log(' ');
/* ------------------------------- */

/* FUNCIONES CON PARAMETROS OBLIGATORIOS */
const valorNumerico = (numero: number): number => {
 return numero + numero;
};

console.log(valorNumerico(455445));
console.log(' ');
/* ------------------------------- */

const detalleProducto = (modelo: string, tamanio: number): string => {
 return `${modelo} - ${tamanio} Pulgadas.`;
};

console.log(detalleProducto('smartTV', 60));
console.log(' ');
/* ------------------------------- */

/* FUNCIONES CON PARAMETROS OPCIONALES */
const envios = (direccion: string, costo?: number): string => {
 if (costo) {
  return `${direccion} -${costo} Pesos.`;
 } else {
  return `${direccion}`;
 }
};
console.log(envios('Calle 33 # 45-45', 4000));
console.log(' ');
/* ------------------------------- */

/* FUNCIONES CON PARAMATROS POR DEFECTO */
const cliente = (
 nombre: string = 'Nombre Defecto',
 apellido: string = 'Apellido Defecto',
 mayuscula: boolean = true
): string => {
 if (mayuscula) return `${nombre.toUpperCase()} + ${apellido.toUpperCase()}`;
 else return `${nombre} - ${apellido}`;
};
console.log(cliente('Daniel Fernando', 'Yepez Vélez'));
console.log(' ');
/* ------------------------------- */

/* FUNCIONES CON PARAMETROS DE TIPO REST */
const detalleCompleto = (
 marca: string,
 ...otrosParametros: string[]
): string => {
 return `${marca} - ${otrosParametros.join()}`;
};

console.log(detalleCompleto('Sony', 'xz1', 'Negro', '55mb', '16ram'));
console.log(' ');
/* ------------------------------- */

/* FUNCIÓN TIPO */
/* CONDICIONAR UNA VARIABLE PARA QUE SOLO ACEPTE UNA FUNCIÒN EN PARTICULAR */
function saludar(saludo: string): string {
 return `Hola ${saludo}`;
}

let funcionTipo: (paramsOne: string) => string;
funcionTipo = saludar;
console.log(funcionTipo('Mundo'));
console.log(' ');
/* ------------------------------- */

/* DEFINIR REGLAS EN UNA FUNCIÓN(La Verdad No Tuvo Sentido ":/") */
const sumar = (a: number, b: number): number => {
 return a + b;
};

const nombre = (nombre: string): string => {
 return `${nombre}`;
};

const saludo = (): void => {
 console.log('Buenas Noches Compañeros');
};

let miFuncion;
miFuncion = 10;
console.log(miFuncion);

miFuncion = sumar(25, 5);
console.log(miFuncion);

miFuncion = nombre('Danielito Fernandito Yepezito Vélezito');
console.log(miFuncion);
