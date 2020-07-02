export class Vector{

    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    get valorX(){
        return this.x;
    }

    get valorY(){
        return this.y;
    }

    sumar(vector){
        this.x+=vector.x;
        this.y+=vector.y;
        return this
    }

}