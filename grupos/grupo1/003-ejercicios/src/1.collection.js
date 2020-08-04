<<<<<<< HEAD
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
=======
class Collection {
  constructor(elementos = null) {
    this.elementos = elementos || [];
  }

  add(elemento) {
    this.elementos.push(elemento);
    return this.elementos;
  }

  delete(elemento) {
    if (this.has(elemento)) {
      let index = this.elementos.indexOf(elemento);
      this.elementos.splice(index, 1);
      return this.elementos;
    }
  }

  has(elemento) {
    return this.elementos.find((e) => e == elemento);
  }
}

module.exports = Collection;
>>>>>>> 54ca61f1dd7744c9869792294aafd36e7fa126e8
