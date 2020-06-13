import { helpers } from './helpers';
import { database } from './baseDeDatos';

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper

const setProvinciaByName = (nombreProvincia) => {
    let lastId = helpers.getLastId('provincias');
    let provincias = database['provincias'];

    provincias.push({
        id: lastId + 1,
        nombre: nombreProvincia
    })
}

//setProvinciaByName('Zulia');

//console.log(database['provincias']);

// 10) Implementar una función que reciba el id de una materia y devuelva la materia con los ids de universidad y profesores resueltos a sus nombres

const getDetalleMateriaById = (id) => {

    let materia = helpers.materiaById(id);

    let nombre_universidad = helpers.universidadById(materia.universidad).nombre;

    let profesores = materia.profesores.map((profesor)=> helpers.profesorById(profesor).nombre);

    materia.universidad = nombre_universidad;
    materia.profesores = profesores;


    return materia
}

//console.log(getDetalleMateriaById(1));


// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

const infoAlumnos = () => {

    let calificaciones = database.calificaciones;

    console.log('NOTAS DE ALUMNOS');
    console.log('----------------');

    // Este paso es para devolver los alumnos presentes en calificación sin repeticiones:
    let set_alumnos = new Set();
    let alumnos = calificaciones.map((calificacion) => calificacion.alumno);
    for (let alumno of alumnos){
        set_alumnos.add(alumno);
    }

    
    return set_alumnos.values();
    //return calificaciones.filter((calificacion) => calificacion.alumno === 1);
}

console.log(infoAlumnos());


// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
