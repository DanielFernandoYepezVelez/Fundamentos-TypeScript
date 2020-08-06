(function () {
    /* Desestructurando Un Objeto En Los Parametros De Una Función*/
    var avenger = {
        name: "Steve",
        clave: "Capitan América",
        poder: "Droga"
    };
    var getAvenger = function (_a) {
        var name = _a.name, clave = _a.clave, poder = _a.poder;
        console.log(name);
        console.log(clave);
        console.log(poder);
    };
    getAvenger(avenger);
    /* Desestructurando Un Array En Los Parametros De Una Función */
    var avengersTwo = ["Thor", "Iroman", "Spiderman"];
    /* Sin Ser Parametros */
    // const [, , ultimo] = avengersTwo;
    // console.log(ultimo);
    var getAvengersTwo = function (_a) {
        var uno = _a[0], dos = _a[1], tres = _a[2];
        console.log("");
        console.log(uno);
        console.log(dos);
        console.log(tres);
    };
    getAvengersTwo(avengersTwo);
})();
