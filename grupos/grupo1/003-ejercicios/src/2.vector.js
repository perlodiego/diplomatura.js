<<<<<<< HEAD
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
=======
class Vector {
  constructor(x = null, y = nul) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  sumar(vector = null) {
    let response = {
      x: this.x + vector.x,
      y: this.y + vector.y,
    };
    return response;
  }
}

module.exports = Vector;
>>>>>>> 54ca61f1dd7744c9869792294aafd36e7fa126e8
