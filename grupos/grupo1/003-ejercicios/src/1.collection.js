export class Collection {

    constructor(lista = []){
        this.lista = lista;
    }

    add(elemento){
        if(!this.has(elemento)){
            this.lista.push(elemento)
        };
    }

    delete(elemento){
        let indice = this.lista.indexOf(elemento);
        if (indice > -1){
            this.lista.splice(indice, 1);
        }
    }

    has(elemento){
        return this.lista.indexOf(elemento) > -1;
    }
}

//module.exports = Collection;