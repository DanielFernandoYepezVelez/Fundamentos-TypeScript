"use strict";
/* Arrays */
var frutas = [];
frutas = ["Manzana", "Peras", "Piñas"];
frutas.forEach(function (fruta) {
    console.log(fruta);
});
console.log(" ");
/* ------------------------------ */
var numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.map(function (number) {
    console.log(number.toPrecision());
});
console.log(" ");
/* ------------------------------ */
/* Tuplas(Clave-Valor) */
var products = ["Panaderia", 20, false];
products[0] = "Pan";
products[1] = 30;
products[2] = true;
products.forEach(function (product) {
    console.log(product);
});
console.log(" ");
/* ------------------------------ */
