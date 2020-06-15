import { helpers } from './helpers';
import { database } from './baseDeDatos';

// Test de función punto 9:
helpers.setProvinciaByName('Zulia');
console.log(database['provincias']);

// Test de función punto 10:
console.log(helpers.getDetalleMateriaById(1));

// Test de función 11:
//console.time();
console.log(helpers.getInfoAlumnos());
//console.timeEnd();

// Test de función 12:
helpers.guardarCalificacionMateria('mario','java',5);
console.log(database.calificaciones);
console.log(database.alumnos);
console.log(database.materias);
