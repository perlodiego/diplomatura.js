export class Collection{
    constructor(value=[]){
        this.lista = value || [];
    }
    add(elemento){
        if(!this.has(elemento)) this.lista.push(elemento);
    }
    delete(elemento){
        if(this.has(elemento)){
        let index = this.lista.indexOf(elemento);
        if(index != -1) this.lista.splice(index,1);}
    }
    has(elemento){ return this.lista.includes(elemento)};
}

