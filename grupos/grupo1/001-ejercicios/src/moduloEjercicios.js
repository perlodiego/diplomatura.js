import basededatos, { database } from './basededatos';

/**
 * Obtiene la lista de materias aprobadas (nota >= 4) para el nombre de alumno dado.
 * En caso de no existir el alumno, devolver undefined.
 * En caso de que no encuentre ninguna materia para el alumno, devuelve un array vacio []
 * Ejemplo del formato del resultado suponiendo que el alumno cursa dos materias y tiene mas de 4.
 *  [
    {
      id: 1,
      nombre: 'Análisis matemático',
      profesores: [1, 2],
      universidad: 1,
    },
    {
      id: 2,
      nombre: 'Corte y confección de sabanas',
      profesores: [3],
      universidad: 2,
    }
  ]
 * @param {nombreAlumno} nombreAlumno
 */
export const materiasAprobadasByNombreAlumno = (nombreAlumno) => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  // console.log(basededatos.alumnos);
  let alumnos = basededatos.alumnos;
  let idAlumno = alumnos.find((alumno) => alumno.nombre === nombreAlumno).id;

  if (!idAlumno){
    return undefined;
  }

  let calificaciones = basededatos.calificaciones;
  let materiasAprobadasAlumno = calificaciones.filter((calificacion)=>calificacion.alumno === idAlumno && calificacion.nota >= 4);

  if(!materiasAprobadasAlumno){
    return [];
  }

  let materias = basededatos.materias;
  let materiasAprobadas = [];
  for(let i = 0; i< materiasAprobadasAlumno.length; i++){
    let materia = materias.find((materia)=>materia.id === materiasAprobadasAlumno[i].materia);
    if(materia){
      materiasAprobadas.push(materia);
    }
  }
  
  return materiasAprobadas;
};

/**
 * Devuelve informacion ampliada sobre una universidad.
 * Si no existe la universidad con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto universidad,
 * agregar la lista de materias dictadas por la universidad y
 * tambien agrega informacion de los profesores y alumnos que participan.
 * Ejemplo de formato del resultado (pueden no ser correctos los datos en el ejemplo):
 *{
      id: 1,
      nombre: 'Universidad del Comahue',
      direccion: {
        calle: 'Av. Siempre viva',
        numero: 2043,
        provincia: 'Neuquen',
      },
      materias: [
        {
          id: 1,
          nombre: 'Análisis matemático',
          profesores: [1, 2],
          universidad: 1,
        },
        {
          id: 4,
          nombre: 'Programación orientada a objetos',
          profesores: [1, 3],
          universidad: 1,
        },
      ],
      profesores:[
        { id: 1, nombre: 'Jorge Esteban Quito' },
        { id: 2, nombre: 'Marta Raca' },
        { id: 3, nombre: 'Silvia Torre Negra' },
      ],
      alumnos: [
         { id: 1, nombre: 'Rigoberto Manchu', edad: 22, provincia: 1 },
         { id: 2, nombre: 'Alina Robles', edad: 21, provincia: 2 },
      ]
    }
 * @param {string} nombreUniversidad
 */
export const expandirInfoUniversidadByNombre = (nombreUniversidad) => {

  let universidades = database.universidades;
  let universidad = universidades.find((universidad) => universidad.nombre === nombreUniversidad);

  if(!universidad){
    return undefined;
  }

  // Obtenemos las materias dictadas por la universidad con sus profesores

  let materias = database.materias;
  let materiasUniversidad = [];
  let profesoresUniversidad = [];
  let idMateriasUniversidad = [];
  for (let materia of materias){
    let univ = materia.universidad;
    if (univ === universidad.id){
      materiasUniversidad.push(materia);
      profesoresUniversidad.push(materia.profesores);
      idMateriasUniversidad.push(materia.id);
    }
  }

  // Convertimos la lista de profesores en valores únicos
  profesoresUniversidad = [...new Set(profesoresUniversidad.flat())];

  // Extraemos los datos de los profesores
  let profesores = database.profesores;
  let datosProfesores = [];
  for (let profesor of profesores){
    for (let i = 0; i < profesoresUniversidad.length; i++){
      if(profesor.id === profesoresUniversidad[i]){
        datosProfesores.push(profesor);
        break;
      }
    }
  }

  // Obtenemos los datos de los alumnos
  let alumnos = database.alumnos;
  let calificaciones = database.calificaciones;
  let alumnosUniversidad = [];

  for (let calificacion of calificaciones){
    for (let i = 0; i<idMateriasUniversidad.length; i++){
      if (calificacion.materia === idMateriasUniversidad[i]){
        alumnosUniversidad.push(alumnos.find((alumno) => alumno.id === calificacion.alumno))
      }
    }
  }

  alumnosUniversidad = [...new Set(alumnosUniversidad)];
  return Object.assign(universidad, {materias: materiasUniversidad, profesores: datosProfesores, alumnos: alumnosUniversidad})
  //return {universidad, materias: materiasUniversidad, profesores: datosProfesores, alumnos: alumnosUniversidad};
};

// /**
//  * Devuelve el promedio de edad de los alumnos.
//  */
// export const promedioDeEdad = () => {
//   return [];
// };

// /**
//  * Devuelve la lista de alumnos con promedio mayor al numero pasado
//  * por parametro.
//  * @param {number} promedio
//  */
// export const alumnosConPromedioMayorA = (promedio) => {
//   return [];
// };

// /**
//  * Devuelve la lista de materias sin alumnos
//  */
// export const materiasSinAlumnosAnotados = () => {
//   return [];
// };

// /**
//  * Devuelve el promdedio de edad segun el id de la universidad.
//  * @param {number} universidadId
//  */
// export const promedioDeEdadByUniversidadId = (universidadId) => {
//   return [];
// };
