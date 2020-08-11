"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
var Villano = (function () {
    function Villano(nombre) {
        this.nombre = nombre;
        console.log('Constructor De La Clase Villano');
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
console.log('----------------------------------------------\n');
function consola2(constructor) {
    console.log(constructor);
}
function imprimirConsola(imprimir) {
    return consola2;
}
var Heroe = (function () {
    function Heroe(nombre) {
        this.nombre = nombre;
        console.log('Constructor De La Clase Heroe');
    }
    Heroe = __decorate([
        imprimirConsola(true)
    ], Heroe);
    return Heroe;
}());
console.log('----------------------------------------------\n');