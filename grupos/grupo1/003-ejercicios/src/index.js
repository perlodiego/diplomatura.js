import {Collection} from './1.Collection'

console.log('Se crea un nuevo elemento Lista');
let frutas = ['frutilla'];
let lista = new Collection(frutas);
console.log("Se agregan 3 frutas");
console.log(lista); 
lista.add('manzana');
lista.add('naranja');
lista.add('banana');
console.log(lista);
console.log("tiene elemento banana?");
console.log(lista.has('banana'));
console.log("borrar elemento naranja");
lista.delete('naranja');

console.log(lista);
console.log("tiene elemento naranja?");
console.log(lista.has('naranja'));