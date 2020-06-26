import {Collection} from './1.collection'
import {Delay } from './3.delay'

const colection = new Collection();
colection.add('manzana')
colection.add('naranja')
console.log(colection.lista)
colection.delete('naranja')
console.log(colection.lista)
console.log(colection.has('manzana'))

const delay= new Delay()
/* console.log(1);
delay.delay('Terminó 1', 1000);
console.log(2);
delay.delay('Terminó 2', 1000);
console.log(3);
delay.delay('Terminó 3', 1000); */

console.log(1);
delay.delay('Terminó 1', 3000);
console.log(2);
delay.delay('Terminó 2', 2000);
console.log(3);
delay.delay('Terminó 3', 1000);