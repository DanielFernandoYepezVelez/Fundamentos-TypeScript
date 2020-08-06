var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function imprimiConsola(constructorClaseXmen) {
    console.log(constructorClaseXmen);
}
/* Un Decorador Es Una Función Que Expande Una Clase Añadiendo Caracteristicas, propiedades y funcionalidades Propias */
var Xmen = /** @class */ (function () {
    function Xmen(name, clave) {
        this.name = name;
        this.clave = clave;
    }
    Xmen.prototype.imprimir = function () {
        return this.name + " - " + this.clave;
    };
    Xmen = __decorate([
        imprimiConsola
    ], Xmen);
    return Xmen;
}());
var xmen = new Xmen("Logan", "Wolverin");
console.log(xmen.imprimir());
