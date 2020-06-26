export class Collection{
    constructor(tipo=[]){
        this.tipo = tipo || [];
    }
    add(elemento){
        this.tipo.push(elemento);
     }
    delete(elemento){
        let index = this.tipo.indexOf(elemento);
        if(index != -1) this.tipo.splice(index,1);
    }
    has(elemento){ return this.tipo.indexOf(elemento)!=-1 };
}

