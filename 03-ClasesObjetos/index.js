"use strict";
var Mascota = /** @class */ (function () {
    function Mascota(nombre) {
        this.nombre = nombre;
    }
    Mascota.prototype.getNombre = function () {
        return this.nombre;
    };
    /*  */
    Mascota.consulta = function () {
        return "Valor De La Consulta =>" + 50;
    };
    return Mascota;
}());
var perro = new Mascota("Orion");
console.log(perro);
console.log(perro.getNombre());
console.log(Mascota.consulta());
