import { database } from './baseDeDatos';

// 8) Importar helpers desde su propio módulo
import { helpers as h } from './helpers';

const getInfoById = (table, id) =>{
    return database[table].find((item) => item.id === id)
}

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
const getUniversidadById = (id) => {
    return getInfoById('universidades', id)
}

// 3) Implementar una función que obtenga un profesor por Id
const getProfesorById = (id) => {
    return getInfoById('profesores', id)
}

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
const getMateriaById = (id) => {
    return getInfoById('materias', id)
}


const getAlumnoById = (id) => {
    return getInfoById('alumnos', id)
}

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
const getLastId = (tabla) => {
    let arreglo_ids = [];
    for (let objeto of database[tabla]){
        arreglo_ids.push(objeto.id)
    }

    return arreglo_ids[arreglo_ids.length - 1] 
}

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper
const setProvinciaByName = (nombreProvincia) => {
    let lastId = getLastId('provincias');
    let provincias = database['provincias'];

    provincias.push({
        id: lastId + 1,
        nombre: nombreProvincia
    })

    return lastId;
}


// 10) Implementar una función que reciba el id de una materia y devuelva la materia con los ids de universidad y profesores resueltos a sus nombres
const getDetalleMateriaById = (id) => {
    let materia = getMateriaById(id);
    let nombre_universidad = getUniversidadById(materia.universidad).nombre;
    let profesores = materia.profesores.map((profesor)=> getProfesorById(profesor).nombre);

    materia.universidad = nombre_universidad;
    materia.profesores = profesores;

    return materia
}


// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

const getInfoAlumnos = () => {
    let calificaciones = database.calificaciones;

    console.log('NOTAS DE ALUMNOS');
    console.log('----------------');

    // Este paso es para devolver los alumnos presentes en calificación sin repeticiones:
    let set_alumnos = new Set();
    let alumnos = calificaciones.map((calificacion) => calificacion.alumno);
    for (let alumno of alumnos){
        set_alumnos.add(alumno);
    }

    // Una vez obtenidos los ids de los alumnos sin repetición, se procede a buscar sus datos:
    for (let dato of [...set_alumnos]){
        let nombre_alumno = getAlumnoById(dato).nombre.toUpperCase();
        console.log(nombre_alumno);
        let notas = calificaciones.filter((calificacion) => calificacion.alumno === dato);
        for (const nota of notas){
            let materia = getMateriaById(nota.materia).nombre;
            let calif = nota.nota;
            console.log(materia+': '+calif);
        }
        console.log('\n')
    }
}

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
const guardarCalificacionMateria = (nombreAlumno, nombreMateria, nota) => {
    // Verificar si nombreAlumno existe, sino, se agrega a la tabla:
    let alumnos = database.alumnos;
    let id_alumno;
    for (let alumno of alumnos){
        if (alumno.nombre === nombreAlumno){
            id_alumno = alumno.id;
            break;
        }
    }

    if (!id_alumno){
        id_alumno = getLastId('alumnos') + 1;
        alumnos.push({
            id: id_alumno,
            nombre: nombreAlumno,
        })
    }

    // Verificar si nombreMateria existe, sino, se agrega a la tabla:
    let materias = database.materias;
    let id_materia;
    for (let materia of materias){
        if (materia.nombre === nombreMateria){
            id_materia = materia.id;
            break;
        }
    }

    if (!id_materia){
        id_materia = getLastId('materias') + 1;
        materias.push({
            id: id_materia,
            nombre: nombreMateria,
        })
    }

    // Ingresar datos en la tabla calificación:
    let calificaciones = database.calificaciones;
    calificaciones.push({
        alumno: id_alumno,
        materia: id_materia,
        nota: nota
    })

    return;
}


// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
let helpers = {
    getUniversidadById: getUniversidadById,
    getProfesorById: getProfesorById,
    getMateriaById: getMateriaById,
    getAlumnoById: getAlumnoById,
    getLastId: getLastId,
    setProvinciaByName: setProvinciaByName,
    getDetalleMateriaById: getDetalleMateriaById,
    getInfoAlumnos: getInfoAlumnos,
    guardarCalificacionMateria: guardarCalificacionMateria
};


// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js
export {helpers};
