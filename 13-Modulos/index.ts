import { PI, restar } from './Validaciones/Numeros';
import * as textos from './Validaciones/Textos';

/* Importando Con Destructuring */
console.log(PI);
console.log(restar(5, 5));

/* Importando Con  ALIAS(Todo Lo Que Tiene exports Lo Trae) */
console.log(textos.mensajes);
console.log(textos.obtenerError(1));
