var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Inicializar las propiedades en el constructor me permite tener
una clase mas limpia, pero funciona igual si defino las propiedades
en la parte superior de la clase con sus respectivos modificadores
de acceso */
var Avenger = /** @class */ (function () {
    function Avenger(name, power) {
        this.name = name;
        this.power = power;
    }
    Avenger.prototype.getNombre = function () {
        console.log('GET NOMBRE AVENGER(PROTECTED)');
        return this.name;
    };
    return Avenger;
}());
/* Aqui Obligatoriamente Hay Que LLamar el constructor
de la clase padre a través de la palabra super, para
que sean recibidos en el constructor de la clase hija */
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(name, power) {
        return _super.call(this, name, power) || this;
    }
    /* Acceder A Las Propiedades De Su PADRE */
    Xmen.prototype.getNameXmen = function () {
        console.log('GET NOMBRE XMEN(PUBLIC)');
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avenger));
var AVENGER = new Avenger('AvengerOne', 12333);
console.log(AVENGER);
var XMEN = new Xmen('XmenOne', 33333);
console.log(XMEN);
console.log(XMEN.getNameXmen());
