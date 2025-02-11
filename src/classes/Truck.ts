// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
    this.towingCapacity = towingCapacity;
  };

  tow(vehicle: Truck | Motorbike | Car): void {
    let obj = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${obj} is being towed`);
    } else if (vehicle.weight > this.towingCapacity) {
      console.log(`${obj} is too heavy to be towed`);
    };
  }


  override printDetails(): void {
    super.printDetails();
    console.log(`The Truck Details
      VIN: ${this.vin}, 
      Make: ${this.make}, 
      Model: ${this.model}, 
      Year: ${this.year}, 
      Weight: ${this.weight}, 
      Top Speed: ${this.topSpeed}, 
      Color: ${this.color}, 
      Wheels: ${this.wheels.join(',')}, 
      towingCapacity: ${this.towingCapacity}.`);
  }

}


// Export the Truck class as the default export
export default Truck;
