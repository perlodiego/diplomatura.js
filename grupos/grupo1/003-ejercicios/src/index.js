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
delay.delay('Termino 1',1000)
delay.delay('Termino 2',1000)
delay.delay('Termino 3',1000)
delay.run()
delay.delay('Termino 1',3000)
delay.delay('Termino 2',2000)
delay.delay('Termino 3',1000)
