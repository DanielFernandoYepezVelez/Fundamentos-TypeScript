/* ========= TIPOS DE DATOS VARIABLES ===============*/
/* String */
let mensaje: string = 'Soy Una Variables De Tipo String';
console.log(mensaje);

mensaje = 'Renovando La Declaración De La Variable De Tipo String';
console.log(mensaje);
console.log('-------------------------------------------------------\n');

/* Number */
let numero: number = Math.PI;
console.log(`Numero => ${numero}`);

numero = 43344.55544444;
console.log(`Renombrando Numero => ${numero}`);

const decimal: number = 6.2;
console.log(`Decimal => ${decimal}`);

const binary: number = 0b10101;
console.log(`Binario => ${binary}`);
// const hexadecimal: number = 0*f00d; /* Duda */
console.log('-------------------------------------------------------\n');

/* Boolean */
let opcion: boolean = true;
console.log(`Booleano => ${opcion}`);

opcion = false;
console.log(`Renombrando Booleano => ${opcion}`);
console.log('-------------------------------------------------------\n');

const superman: boolean = true;
console.log(`¿Es Superman? Booleano ${superman}`);
console.log('-------------------------------------------------------\n');

const clarck: boolean = convetirClark();
function convetirClark() {
  return false;
}
console.log(`¿Es Clark? Booleano ${superman}`);
console.log('-------------------------------------------------------\n');

/* Tipo De Dato Multifacético */
let multi: string | number | boolean;
multi = 'Hola Amigos ' + 233332 + ' ' + true;
console.log(`Multiples Tipos De Datos => ${multi}`);
console.log('-------------------------------------------------------\n');

/* Tipo De Dato Dinámico */
let todos: any = 'Hola';
console.log(`Tipo Dinamico(any) => ${todos}`);

todos = true;
console.log(`Tipo Dinamico(any) => ${todos}`);

todos = 3422332;
console.log(`Tipo Dinamico(any) => ${todos}`);

todos = Math.pow(4, 2);
console.log(`Tipo Dinamico(any) => ${todos}`);
console.log('-------------------------------------------------------\n');

/* ========= TIPOS DE DATOS CONSTANTES ===============*/
const PI: number = 3.1415;
console.log(`Constante Number => ${PI}`);

const SEGUNDA_CONSTANTE: string = 'Segunda Constante';
console.log(`Constante String => ${SEGUNDA_CONSTANTE}`);

const APP_ROUTING: string = 'Constante Para Rutas En Angular';
console.log(`Constante String => ${APP_ROUTING}`);
console.log('-------------------------------------------------------\n');

/* ========= TIPOS DE DATOS ARRAYS ===============*/
const numbers: number[] = [1, 2, 3, 4];
console.log(`Array Tipo Numbers => ${numbers}`);

const numbersTwo: Array<number> = [1, 2, 3, 4];
console.log(`Array Tipo Numbers Two => ${numbersTwo}`);

const strings: string[] = ['uno', 'dos', 'tres'];
console.log(`Array Tipo String => ${strings}`);

const stringsTwo: Array<string> = ['uno', 'dos', 'tres'];
console.log(`Array Tipo String Two => ${stringsTwo}`);
console.log('-------------------------------------------------------\n');

/* ========= TIPOS DE DATOS TUPLAS ===============*/
const varios: [string, number, null] = ['hola Mundo', 11, null];
console.log(`Tupla Tipo string-number-null => ${varios}`);

const varios2: [boolean, undefined] = [true, undefined];
console.log(`Tupla Tipo boolean-undefined => ${varios2}`);
console.log('-------------------------------------------------------\n');

/* ========= TIPOS DE DATOS ENUM ===============*/
/* Inicia Desde 0 Y Muestra El Numero Del Indice */
enum Roles {
  Admin,
  User,
  Guest,
}
console.log(`Enum => ${Roles}`);

let getEnums: Roles = Roles.Admin;
console.log(`Enum => ${getEnums}`);

getEnums = Roles.User;
console.log(`Enum => ${getEnums}`);

getEnums = Roles.Guest;
console.log(`Enum => ${getEnums}`);
console.log('-------------------------------------------------------\n');

enum Volumen {
  min = 1,
  medio,
  max = 10,
}
console.log(`Enum => ${Volumen}`);

let getVolumen: Volumen = Volumen.min;
console.log(`Enum => ${getVolumen}`);

getVolumen = Volumen.medio;
console.log(`Enum => ${getVolumen}`);

getVolumen = Volumen.max;
console.log(`Enum => ${getVolumen}`);
console.log('-------------------------------------------------------\n');

/* ========= TIPOS DE DATOS PARA LOS OBJETOS LITERALES Y OTROS ===============*/
/* Algo muy interesante para tener en cuenta con respecto a los objetos en typeScript es: Los tipos de datos
son inferenciales, por ende, los tipos de datos para un objeto creado en typeScript, es todo el contenido interno que guarda dicho objeto; es decir, si queremos actualizar dicho objeto con nuevos datos, debemos agregarle todas las propiedades o metodos que tenia anteriormente dicho objeto y su contenido interno debe tener exactamente los mismo tipos de datos, no olvidemos que algunas propiedades o metodos pueden ser opcionales. Para Solucionar Esto LLegaron las INTERFACES */

/* Objeto Inicial */
let person = {
  name: 'Daniel Fernando',
  lastName: 'Yepez Vélez',
  email: 'danipez.02@gmail.com',
  edad: 27,
  identificación: 1017210120,
};
console.log(`Objeto Inicial => ${person.name}`);

/* Data Actualizada */
person = {
  name: 'Daniel Fernando DOS',
  lastName: 'Yepez Vélez DOS',
  email: 'danipez.02@gmail.com DOS',
  edad: 30,
  identificación: 103939222,
};
console.log(`Data Actualizada => ${person.name}`);
console.log('-------------------------------------------------------------\n');

/* ========= TIPOS DE DATOS VOID ===============*/
let nothing: void = undefined;
console.log(`Variable De Tipo Void => ${nothing}`);

const noReturn = (): void => {
  console.log('No Hay Retorno Solo Soy Un Procedimiento De Tipo Void');
};
noReturn();
console.log('-------------------------------------------------------------\n');

/* ========= ASERCIONES O CASTEO DE TIPOS DE DATOS EN TYPESCRIPT ===============*/
let cualquierCosa: any = 'Valor De La Variable Cualquier Cosa';
console.log('Valor Desconocido', cualquierCosa);

const largoCualquierCosa: number = (<string>cualquierCosa).length;
console.log(`Valor Casteado => ${largoCualquierCosa} Caracteres`);
console.log('-------------------------------------------------------------\n');

/* No Son Muy Utiles */
/* ========= TIPOS DE DATOS UNDEFINED ===============*/
const existePeroNoEstaDefinido: undefined = undefined;
console.log(`Tipo De Dato Undefined => ${existePeroNoEstaDefinido}`);
console.log('-------------------------------------------------------------\n');

/* ========= TIPOS DE DATOS NULL ===============*/
const noExiste: null = null;
console.log(`Tipo De Dato Null => ${noExiste}`);
console.log('-------------------------------------------------------------\n');

/* ========= TIPOS DE DATOS NEVER ===============*/
/* Son Puntos Criticos De Nuestro Programa O Lineas De
Codigo Que Nunca Deben De Suceder */
console.log('TIPO DE DATO NEVER');

const error = (mensaje: string): never => {
  throw new Error(mensaje);
};
error('Linea Critica Que Nunca Debe Suceder');
console.log('-------------------------------------------------------------\n');
