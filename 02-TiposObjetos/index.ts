/* Objeto Literal Y Sus Tipos De Datos Aceptados */
const persona: { nombre: string; apellido: string; correr: () => boolean } = {
 nombre: 'Daniel Fernando',
 apellido: 'Yepez Vélez',
 correr() {
  return true;
 },
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.correr());
console.log('-----------------------------\n');

/* Definir Los Tipos Para Un Objeto Literal()*/
type Hero = {
 name: string;
 lastName: string;
 age: number;
 strong: number;
 getData?: (paramsOne: string) => any;
};

const newPerson: Hero = {
 name: 'Hero One',
 lastName: 'Hero Two',
 age: 27,
 strong: 45.55,
 getData(valor = '') {
  return `Long Data ${valor}`;
 },
};
console.log(newPerson);
console.log('-----------------------------\n');
