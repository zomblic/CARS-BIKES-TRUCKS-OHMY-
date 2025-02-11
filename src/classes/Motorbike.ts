// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ){
    super();
    this.vin = vin;
    this.color= color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (wheels.length !== 2){
      this.wheels = [new Wheel(), new Wheel()];
    } else {  
      this.wheels = wheels;
    }
  }
    
  
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  override printDetails(): void {
      super.printDetails();
      console.log(`The Motorbike details are - VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}, Top Speed: ${this.topSpeed}, Color: ${this.color}, Wheels: ${this.wheels}`);
  }

}

// Export the Motorbike class as the default export
export default Motorbike;



/*
const hyabusa = new Motorbike('123456', 'black', 'Suzuki', 'Hayabusa', 2021, 500, 186, [new Wheel(), new Wheel()]);
hyabusa.wheelie();
hyabusa.printDetails();

*/