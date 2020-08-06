/* Arrays */

let frutas: string[] = [];
frutas = ["Manzana", "Peras", "Piñas"];

frutas.forEach((fruta: string) => {
  console.log(fruta);
});
console.log(" ");
/* ------------------------------ */

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

numbers.map((number: number) => {
  console.log(number.toPrecision());
});
console.log(" ");
/* ------------------------------ */

/* Tuplas(Clave-Valor) */
let products: [string, number, boolean] = ["Panaderia", 20, false];

products[0] = "Pan";
products[1] = 30;
products[2] = true;

products.forEach((product: string | number | boolean) => {
  console.log(product);
});
console.log(" ");
/* ------------------------------ */
