export class Collection{
    constructor(lista=[]){
        this.lista=lista
    }
    
    add(value){
        this.lista.push(value)
    }
    delete(value){
        const index = this.lista.indexOf(value)
        if(index!=-1){
            this.lista.splice(index,1)
        }
    }
    has(value){
        return this.lista.includes(x=>x===value)
    }
}