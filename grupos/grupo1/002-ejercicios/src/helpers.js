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

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
let helpers = {
    universidadById: getUniversidadById,
    profesorById: getProfesorById,
    materiaById: getMateriaById
};


// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla

const getLastId = (tabla) => {
    let arreglo_ids = [];
    for (let objeto of database[tabla]){
        arreglo_ids.push(objeto.id)
    }

    return arreglo_ids[arreglo_ids.length - 1] 
}

helpers.getLastId = getLastId;

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

export {helpers};
