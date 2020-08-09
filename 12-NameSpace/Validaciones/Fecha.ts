/* Los namespace por defecto traen todos sus métodos
y propiedades protegidos, lo cual no permite que sean
visibles en otros espacios de trabajo, por tal motivo,
se debe ante-poner la palabra export */

namespace Validaciones {
 export const hoy = new Date();

 export function validarFecha(fecha: Date): boolean {
  if (isNaN(fecha.valueOf())) {
   return false;
  } else {
   return true;
  }
 }
}
