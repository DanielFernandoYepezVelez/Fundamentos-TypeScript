(function () {
    var retirarDinero = function (montoRetirar) {
        var dineroActual = 1000;
        return new Promise(function (resolve, reject) {
            if (montoRetirar > dineroActual) {
                reject("No Hay Suficientes Fondos");
            }
            if (dineroActual > montoRetirar) {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(400)
        .then(function (retiro) { return console.log(retiro); })["catch"](function (err) { return console.log(err); });
})();
