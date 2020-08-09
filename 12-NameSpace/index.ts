/* Gracias tsconfig TS sabe que son proyectos diferentes
y el sabe manejarlos, me refiero a los namespace
y por ultimo, se pueden llamar iguales */

/* Para importar namespace se debe apuntar a la referencia */
/// <reference path="./Validaciones/Texto.ts"/>
/// <reference path="./Validaciones/Fecha.ts"/>

console.log(Validaciones.validarTexto('Barry Allen'));
console.log(Validaciones.validarFecha(Validaciones.hoy));
