interface Alumno {
  nombre: string;
  apellido: string;
  edad?: number;
}

let alumno1: Alumno = {
  nombre: "Daniel",
  apellido: "Yepez",
};

console.log(alumno1.nombre);
console.log(alumno1.apellido);

/* ---------------------- */
interface Calificacion {
  mostrarCalificacion(): void;
}

let nota: Calificacion = {
  mostrarCalificacion: () => {
    console.log("63 puntos");
  },
};
nota.mostrarCalificacion();
/* ---------------------- */

interface Saludar {
  decirHola(): string;
}

class SaludarEspaniol implements Saludar {
  decirHola() {
    return "Hola Saludo Desde El Español";
  }
}

class SaludarIngles implements Saludar {
  decirHola() {
    return "Hello World From English";
  }
}

const saludar: Saludar = new SaludarEspaniol();
console.log(saludar.decirHola());

const saludarIngles: Saludar = new SaludarIngles();
console.log(saludarIngles.decirHola());

/* ---------------------- */

interface InterfaceUno {
  metodoUno(): string;
}

interface InterfaceDos {
  metodoDos(): number;
}

class ClaseBinomia implements InterfaceUno, InterfaceDos {
  metodoUno(): string {
    return "Interface STRING";
  }

  metodoDos(): number {
    return 3 + 3;
  }
}

const mixta = new ClaseBinomia();
const primera: InterfaceUno = new ClaseBinomia();
const segunda: InterfaceDos = new ClaseBinomia();

console.log(primera.metodoUno());
console.log(segunda.metodoDos());
console.log(mixta.metodoUno());
console.log(mixta.metodoDos());
/* ------------------------------------------- */

/* Una Interface Puede Heredar De Otra Interface */
interface ICustomer {
  name: string;
  age: number;
}

let customer: ICustomer;

interface INewUser extends ICustomer {
  email: string;
  address: string;
}

/* Contiene Todos Los Metodos De Las Dos Interfaces */
let newCustomer: INewUser;
/* ------------------------------------------- */
