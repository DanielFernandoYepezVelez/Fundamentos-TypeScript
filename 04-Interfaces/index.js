var alumno1 = {
    nombre: "Daniel",
    apellido: "Yepez"
};
console.log(alumno1.nombre);
console.log(alumno1.apellido);
var nota = {
    mostrarCalificacion: function () {
        console.log("63 puntos");
    }
};
nota.mostrarCalificacion();
var SaludarEspaniol = /** @class */ (function () {
    function SaludarEspaniol() {
    }
    SaludarEspaniol.prototype.decirHola = function () {
        return "Hola Saludo Desde El Español";
    };
    return SaludarEspaniol;
}());
var SaludarIngles = /** @class */ (function () {
    function SaludarIngles() {
    }
    SaludarIngles.prototype.decirHola = function () {
        return "Hello World From English";
    };
    return SaludarIngles;
}());
var saludar = new SaludarEspaniol();
console.log(saludar.decirHola());
var saludarIngles = new SaludarIngles();
console.log(saludarIngles.decirHola());
var ClaseBinomia = /** @class */ (function () {
    function ClaseBinomia() {
    }
    ClaseBinomia.prototype.metodoUno = function () {
        return "Interface STRING";
    };
    ClaseBinomia.prototype.metodoDos = function () {
        return 3 + 3;
    };
    return ClaseBinomia;
}());
var mixta = new ClaseBinomia();
var primera = new ClaseBinomia();
var segunda = new ClaseBinomia();
console.log(primera.metodoUno());
console.log(segunda.metodoDos());
console.log(mixta.metodoUno());
console.log(mixta.metodoDos());
var customer;
/* Contiene Todos Los Metodos De Las Dos Interfaces */
var newCustomer;
/* ------------------------------------------- */
