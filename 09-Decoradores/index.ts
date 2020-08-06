function imprimiConsola(constructorClaseXmen: Function) {
  console.log(constructorClaseXmen);
}

/* Un Decorador Es Una Función Que Expande Una Clase Añadiendo Caracteristicas, propiedades y funcionalidades Propias */
@imprimiConsola
class Xmen {
  constructor(private name: string, private clave: string) {}

  imprimir(): string {
    return `${this.name} - ${this.clave}`;
  }
}

const xmen = new Xmen("Logan", "Wolverin");
console.log(xmen.imprimir());
