class Mascota {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public getNombre(): string {
    return this.nombre;
  }

  /* No Necesita De Un Objeto Para Ser LLamado Este Método, Solo Se Escribe El Nombre De La Clase Y Se LLama El Método De Forma Directa */
  public static consulta(): string | number {
    return "Valor De La Consulta => " + 50;
  }
}

const perro = new Mascota("Orion");
console.log(perro);
console.log(perro.getNombre());
console.log(Mascota.consulta());
console.log(" ");

class NewClass {
  protected cuatro?: string;

  /* Definir Las Propiedades De Una Clase En El Constructor Me Permite Optimizar Código Y Esto Es Muy Común En Angular. Con Solo Agregar El Modificador De Acceso La Propiedad Identifica Si Es De La Clase O Solo Es Un Párametro */
  constructor(
    private uno: string,
    private dos: number,
    private tres: boolean,
    cuatro: string
  ) {
    console.log(this.uno);
    console.log(this.dos);
    console.log(this.tres);

    this.cuatro = cuatro;
    console.log(this.cuatro);
  }
}

const newClass = new NewClass("Arg_UNO", 2, false, "Arg_CUATRO");
