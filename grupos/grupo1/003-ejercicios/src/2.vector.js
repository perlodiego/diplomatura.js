export class Vector {

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getX(){
        return this.x;
    }


    getY(){
        return this.y;
    }

    sumar(vector){
        let resultX = this.getX() + vector.getX();
        let resultY = this.getY() + vector.getY();

        let resultVector = new Vector(resultX, resultY);

        return resultVector;
    }
}