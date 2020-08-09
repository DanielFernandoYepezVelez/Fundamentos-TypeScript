/* Los namespace por defecto traen todos sus métodos
y propiedades protegidos, lo cual no permite que sean
visibles en otros espacios de trabajo, por tal motivo,
se debe ante-poner la palabra export */
var Validaciones;
(function(Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        } else {
            return false;
        }
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
/* Los namespace por defecto traen todos sus métodos
y propiedades protegidos, lo cual no permite que sean
visibles en otros espacios de trabajo, por tal motivo,
se debe ante-poner la palabra export */
var Validaciones;
(function(Validaciones) {
    Validaciones.hoy = new Date();

    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        } else {
            return true;
        }
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));