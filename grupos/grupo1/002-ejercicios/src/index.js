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

    // Una vez obtenidos los ids de los alumnos sin repetición, se procede a buscar sus datos:
    for (let dato of [...set_alumnos]){
        let nombre_alumno = helpers.alumnoById(dato).nombre.toUpperCase();
        console.log(nombre_alumno);
        let notas = calificaciones.filter((calificacion) => calificacion.alumno === dato);
        for (const nota of notas){
            let materia = helpers.materiaById(nota.materia).nombre;
            let calif = nota.nota;
            console.log(materia+': '+calif);
        }
        console.log('\n')
        
    }

    return;
}

//console.log(infoAlumnos());


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
        id_alumno = helpers.getLastId('alumnos') + 1;
        alumnos.push({
            id: id_alumno,
            nombre: nombreAlumno,
            edad: 25,
            provincia: 1
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
        id_materia = helpers.getLastId('materias') + 1;
        materias.push({
            id: id_materia,
            nombre: nombreMateria,
            profesores: [1,2],
            universidad: 2
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

//guardarCalificacionMateria('mario','java',5)
//console.log(database.calificaciones)