<<<<<<< HEAD
import { Collection } from './1.collection';
import { Vector } from './2.vector';
//import { delay, run } from './3.delay';
//import { respuesta } from './4.api';
import { getRemoteData } from './5.api';
import { delay, run } from './6.delay';

// /* 1. COLLECTION */

// // Constructor solo o con argumento
// let coleccion = new Collection([1,2,3]);
// console.log(coleccion.lista);

// // Método add:
// coleccion.add(4);
// console.log(coleccion.lista);

// // Método delete:
// coleccion.delete(2);
// console.log(coleccion.lista);

// // Método has:
// console.log(coleccion.has(1))
// console.log(coleccion.has(2))

// /* 2. VECTOR */

// console.log(new Vector(1, 2).sumar(new Vector(2, 3)));

// /* 3. DELAY */

// run();

/* 4. API */

// Remover comentario en import

// /* 5 Consumir una API con async/await*/
// getRemoteData();

/* 6 Modificar Delay */

// const promesa = delay(1)
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response));

run();
=======
'use strict';
const Collection = require('./1.collection.js');
const Vector = require('./2.vector.js');
const delay = require('./3.delay.js');
//const api = require('./4.api.js');
//const api2 = require('./5.api.js');
const delayPromise = require('./6.delay.js');

let collection = new Collection([1, 2, 3]);
//console.log(collection.add("x"));
//console.log(collection.delete("3"));
//console.log(collection.has(1));

//console.log(new Vector(1, 2).sumar(new Vector(10, 20)));
//console.log(new Vector(1, 2));

//delay.run();

//api.respuestaBulk;
//api.respuestaJson;
//api.respuestaDatos(1);

//api2.getRemoteData(1);

//delayPromise.run();
>>>>>>> 54ca61f1dd7744c9869792294aafd36e7fa126e8
