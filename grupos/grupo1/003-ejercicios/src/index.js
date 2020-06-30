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
