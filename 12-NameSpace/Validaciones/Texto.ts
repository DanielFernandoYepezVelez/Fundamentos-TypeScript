/* Los namespace por defecto traen todos sus métodos
y propiedades protegidos, lo cual no permite que sean
visibles en otros espacios de trabajo, por tal motivo,
se debe ante-poner la palabra export */

namespace Validaciones {
 export function validarTexto(texto: string): boolean {
  if (texto.length > 3) {
   return true;
  } else {
   return false;
  }
 }
}
