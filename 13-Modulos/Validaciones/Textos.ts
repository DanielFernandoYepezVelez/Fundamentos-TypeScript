export const mensajes: string[] = ['texto muy corto', 'texto muy largo'];

export const obtenerError = (numError: number): string => {
 if (mensajes[numError] === undefined) {
  return 'No Existe Dicho Indice';
 }

 return mensajes[numError];
};
