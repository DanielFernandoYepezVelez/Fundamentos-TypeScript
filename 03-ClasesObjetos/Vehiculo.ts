class Vehiculo {
  marca: string;
  fecha: string;
  puertas: number;

  constructor(marca: string, fecha: string, puertas: string) {
    this.marca = marca;
    this.fecha = fecha;
    this.puertas = puertas;
  }
  
  acelerar(): void {
    console.log('Ojo Que Acelero');
  }

  frenar(): void {
    console.log('Ojo Que Freno');
  }
}

const vehiculo = new Vehiculo('Ford', '12/07/2018', 4);

/* Propiedades */
console.log(vehiculo.marca);
consoloe.log(vehiculo.fecha);
console.log(vehiculo.puertas);

/* Métodos */
vehiculo.acelerar();
vehiculo.frenar();
