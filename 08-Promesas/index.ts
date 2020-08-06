(() => {
  const retirarDinero = (montoRetirar: number): Promise<number> => {
    let dineroActual = 1000;

    return new Promise((resolve, reject) => {
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
    .then((retiro) => console.log(retiro))
    .catch((err) => console.log(err));
})();
