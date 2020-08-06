/* Objeto Literal Y Sus Tipos De Datos Aceptados */
var persona = {
    nombre: 'Daniel Fernando',
    apellido: 'Yepez Vélez',
    correr: function () {
        return true;
    }
};
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.correr());
console.log('-----------------------------\n');
var newPerson = {
    name: 'Hero One',
    lastName: 'Hero Two',
    age: 27,
    strong: 45.55,
    getData: function (valor) {
        if (valor === void 0) { valor = ''; }
        return "Long Data " + valor;
    }
};
console.log(newPerson);
console.log('-----------------------------\n');
