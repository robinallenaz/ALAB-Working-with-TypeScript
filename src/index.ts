class Vehicle {
  status: "started" | "stopped" = "stopped"; // Union of literals for status
  make: string;
  model: string;
  wheels: number;

  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start(): void {
    this.status = "started";
  }
  stop(): void {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

class NCycle<T> extends Vehicle {
  make: T | T[];
  model: T | T[];

  constructor(make: T | T[], model: T | T[]) {
    super(
      Array.isArray(make) ? make[0] : make,
      Array.isArray(model) ? model[0] : model,
      2
    );
    this.make = make;
    this.model = model;
  }
  print(index: number = 0): void {
    if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (
      Array.isArray(this.make) &&
      Array.isArray(this.model) &&
      index < this.make.length &&
      index < this.model.length
    ) {
      console.log(
        `This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`
      );
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
}

function printStatus(vehicle: Vehicle): void {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
