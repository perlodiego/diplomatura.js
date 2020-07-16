/*

Escribir una clase Collection que representa una colección de elementos. Esta clase debe:

- Poder construirse o vacía (sin elementos) o con una lista inicial de elemenetos
- Debe tener un método `add` para poder agregar un elemento
- Debe tener un método `delete` para poder eliminar un elemento
- Debe tener un método `has` para poder determinar un elemento existe en la colección

*/

export class Collection {
    constructor(elements=null){
        this.elements=elements||[];
    };
    add(elem){
        if (!this.has(elem))
            this.elements.push(elem);
    };
    delete(elem){
        const destroy=this.elements.indexOf(elem);
        if (destroy>-1) {
            return this.elements.splice(destroy,1);
        }
    };
    has(elem){
        return this.elements.indexOf(elem)>-1;
    };
}