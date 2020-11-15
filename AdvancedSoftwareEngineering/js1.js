// JavaScript Document

class Car {
    constructor(name) {
        this.name = name;
    }

    clone() {
        return new Car(this.name);
    }
}
  
var CAR1 = new Car('Benz');
var CAR2 =CAR1.clone();


document.write(JSON.stringify(CAR2));



