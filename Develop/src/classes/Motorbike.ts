// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
 
 vin: string;
 color: string;
 make: string;
 model: string;
 year: number;
 weight: number;
 topSpeed: number;
 wheels: Wheel[];
 
  
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]''
  
  {
  super();
  
  this.vin = vin;
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
  this.weight = weight;
  this.topSpeed = topSpeed;
  
  if (wheels.length !== 2) {
    this.wheels = [new Wheel(), new Wheel()];
  } else {
    this.wheels = wheels;
  }
}
  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    performWheelie(): void {
      if (!this.isWheelie) {
          console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
          this.isWheelie = true;
      } else {
          console.log("Already doing a wheelie!");
      }
  }

  stopWheelie(): void {
      if (this.isWheelie) {
          console.log("Stopping the wheelie.");
          this.isWheelie = false;
      } else {
          console.log("Not currently doing a wheelie.");
      }
  }

  getStatus(): string {
      return this.isWheelie ? "Currently doing a wheelie." : "Not doing a wheelie.";
  }
}

  
  override printDetails(): void {
    
    super.printDetails();

    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Wheels: ${this.wheels}`);
  }
  
}

// Export the Motorbike class as the default export
export default Motorbike;
