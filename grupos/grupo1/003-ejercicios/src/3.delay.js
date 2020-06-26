export class Delay{
    delay(message,time){
        setTimeout(() =>  this.run(message), time);

    }

    run(value){
        console.log(value)
    }
}