((): void => {
  /* Desestructurando Un Objeto En Los Parametros De Una Función*/
  const avenger = {
    name: "Steve",
    clave: "Capitan América",
    poder: "Droga",
  };

  const getAvenger = ({ name, clave, poder }: any) =>
    // avenger: any /* Aqui Vienen A Ayudar Las Interfaces, Por Que No Es Sano Declarar Los Tipos De Datos Any */
    {
      console.log(name);
      console.log(clave);
      console.log(poder);
    };

  getAvenger(avenger);

  /* Desestructurando Un Array En Los Parametros De Una Función */
  const avengersTwo: string[] = ["Thor", "Iroman", "Spiderman"];

  /* Sin Ser Parametros */
  // const [, , ultimo] = avengersTwo;
  // console.log(ultimo);

  const getAvengersTwo = ([uno, dos, tres]: string[]) => {
    console.log("");
    console.log(uno);
    console.log(dos);
    console.log(tres);
  };

  getAvengersTwo(avengersTwo);
})();
