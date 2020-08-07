/* Inicializar las propiedades en el constructor me permite tener
una clase mas limpia, pero funciona igual si defino las propiedades
en la parte superior de la clase con sus respectivos modificadores
de acceso */
class Avenger {
 constructor(public name: string, private power: number) {}

 protected getNombre(): string {
  console.log('GET NOMBRE AVENGER(PROTECTED)');
  return this.name;
 }
}

/* Aqui Obligatoriamente Hay Que LLamar el constructor
de la clase padre a través de la palabra super, para 
que sean recibidos en el constructor de la clase hija */
class Xmen extends Avenger {
 constructor(name: string, power: number) {
  super(name, power);
 }

 /* Acceder A Las Propiedades De Su PADRE */
 public getNameXmen(): string {
  console.log('GET NOMBRE XMEN(PUBLIC)');
  return super.getNombre();
 }
}

const AVENGER = new Avenger('AvengerOne', 12333);
console.log(AVENGER);

const XMEN = new Xmen('XmenOne', 33333);
console.log(XMEN);
console.log(XMEN.getNameXmen());
