import { Collection } from './1.collection';
import { Vector     } from './2.vector';
import { Callbacks  } from './3.delayConCallbacks';
import { forFetch   } from './4.api';
import { getRemoteData } from './5.asyncAwait';
import { CallbackRecargado } from './6.delay';

//Ejercicio 1
console.log('--- Probamos el ejercicio 1 ---')

console.log('\n- Se crea un nuevo objeto -');
//Creando la colección
const a=new Collection();
a.add('Galletita');

//Agregando elementos
console.log('Agrega el elemento Galletita:');
console.log(a);
a.add(1);

console.log('Agrega el elemento "1": ');
console.log(a);
a.add('Casa');

console.log('Agrega el elemento "Casa": ');
console.log(a);

//Borro un elemento
console.log('\nBorra el elemento "1": ');
a.delete(1);
console.log(a);

//Buscando elementos
console.log('\nVemos si existe el elemento 1 en el array');
console.log(a.has(1));
console.log('Vemos si existe el elemento Galletita en el array');
console.log(a.has('Galletita'));

//Se imprime el array final
console.log('\nFinalmente imprimo el array "elements"');
console.log(a.elements);

//Ejercicio 2 - para la casa
console.log('\n--- Probamos el ejercicio 2 ---')
console.log('Probamos new Vector(1, 2).sumar(new Vector(2, 3))')

const vectorNuevo=new Vector(1, 2).sumar(new Vector(2, 3));
console.log(vectorNuevo);
console.log('\nObtenemos los valores de x e y mediante vectorNuevo.getX() y vectorNuevo.getY()')
console.log(vectorNuevo.getX())
console.log(vectorNuevo.getY())

//Ejercicio 3
console.log('\n--- Probamos el ejercicio 3 ---')
Callbacks.run();

//Ejercicio 4
console.log('\n--- Probamos el ejercicio 4 ---')

forFetch.then((res)=>{
    console.log('Ejercicio 4 -> resultado');
    console.log(res);
    res.json().then((response)=>{
        const datos = response.map(persona=>`Name: ${persona.name} City: ${persona.address.city}`);
        console.log('Ejercicio 4 -> datos finales');
        console.log(datos)
    })
}).catch(err=>console.log(err));

//Ejercicio 5
console.log('\n--- Probamos el ejercicio 5 ---')
getRemoteData().then((res,rej)=>{
    console.log('Ejercicio5 -> datos finales');
    console.log(res.map(persona=>`Name: ${persona.name} City: ${persona.address.city}`));
}).catch(err=>console.log(err));


//Ejercicio 6
console.log('\n--- Probamos el ejercicio 6 ---')
CallbackRecargado.run();