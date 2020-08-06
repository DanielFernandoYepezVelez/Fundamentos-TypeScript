/* Recordar El Scope De Los THIS, Con Una Función Normal Y Una Función Tipo Arrow Function */
/* Esta Es Una Función Auto-Invocada Tipo Arrow Function*/
(function () {
    var gretting = "Hola Arrow Function";
    var boolean = true;
    console.log(gretting, boolean);
    console.log(" ");
    return gretting + boolean;
})();
/* Esta Es Una Función Auto-Invocada De Tipo Function*/
(function () {
    var gretting = "Hola Function Normal";
    var boolean = false;
    console.log(gretting, boolean);
    console.log(" ");
    return gretting + boolean;
})();
function mostrarProducto() {
    var articulo = "Televisor";
    return articulo.toUpperCase();
}
console.log(mostrarProducto());
console.log(" ");
/* ------------------------------- */
var valor = function () {
    return 333.45654 + 4444.5666;
};
console.log(valor());
console.log(" ");
/* ------------------------------- */
var descuento = function () {
    return true;
};
console.log(descuento());
console.log(" ");
/* ------------------------------- */
/* FUNCIONES CON PARAMETROS OBLIGATORIOS */
var valorNumerico = function (numero) {
    return numero + numero;
};
console.log(valorNumerico(455445));
console.log(" ");
/* ------------------------------- */
var detalleProducto = function (modelo, tamanio) {
    return modelo + " - " + tamanio + " Pulgadas.";
};
console.log(detalleProducto("smartTV", 60));
console.log(" ");
/* ------------------------------- */
/* FUNCIONES CON PARAMETROS OPCIONALES */
var envios = function (direccion, costo) {
    if (costo) {
        return direccion + " -" + costo + " Pesos.";
    }
    else {
        return "" + direccion;
    }
};
console.log(envios("Calle 33 # 45-45", 4000));
console.log(" ");
/* ------------------------------- */
/* FUNCIONES CON PARAMATROS POR DEFECTO */
var cliente = function (nombre, apellido, mayuscula) {
    if (nombre === void 0) { nombre = "Nombre Defecto"; }
    if (apellido === void 0) { apellido = "Apellido Defecto"; }
    if (mayuscula === void 0) { mayuscula = true; }
    if (mayuscula)
        return nombre.toUpperCase() + " + " + apellido.toUpperCase();
    else
        return nombre + " - " + apellido;
};
console.log(cliente("Daniel Fernando", "Yepez Vélez"));
console.log(" ");
/* ------------------------------- */
/* FUNCIONES CON PARAMETROS DE TIPO REST */
var detalleCompleto = function (marca) {
    var otrosParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otrosParametros[_i - 1] = arguments[_i];
    }
    return marca + " - " + otrosParametros.join();
};
console.log(detalleCompleto("Sony", "xz1", "Negro", "55mb", "16ram"));
console.log(" ");
/* ------------------------------- */
/* DEFINIR REGLAS EN UNA FUNCIÓN(La Verdad No Tuvo Sentido ":/") */
var sumar = function (a, b) {
    return a + b;
};
var nombre = function (nombre) {
    return "" + nombre;
};
var saludo = function () {
    console.log("Buenas Noches Compañeros");
};
var miFuncion;
miFuncion = 10;
console.log(miFuncion);
miFuncion = sumar(25, 5);
console.log(miFuncion);
miFuncion = nombre("Danielito Fernandito Yepezito Vélezito");
console.log(miFuncion);
