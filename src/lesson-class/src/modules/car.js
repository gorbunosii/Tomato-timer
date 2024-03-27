export class Car {
  #maxTank;
  constructor(brand, model, maxTank) {
    this.brand = brand;
    this.model = model;
    this.#maxTank = maxTank;
    this.nowTank = Math.floor(Math.random() * maxTank);
  }

  getTitle() {
    return `${this.brand} ${this.model}`;
  }

  setTitle(model) {
    this.model = model;
    return this.model;
  }

  get needPetrol() {
    return this.#maxTank - this.nowTank;
  }

  fillUp() {
    return this.nowTank - this.#maxTank;
  }

  get maxTank() {
    return this.#maxTank;
  }

  static string = 'New car';

  static logger(str) {
    console.log('str');
  }

  static from({brand, model, maxTank}) {
    const car = new Car(brand, model, maxTank);
    Car.logger(Car.string + car.getTitle());
    return car;
  }
}

export class Truck extends Car {
  typeCar = 'Truck';
  constructor(brand, model, maxTank, typeFuel = 'diesel') {
    super(brand, model, maxTank);
    this.typeFuel = typeFuel;
  }
}

export class PassangerCar extends Car {
  typeCar = 'passanger';
  constructor(brand, model, maxTank, typeFuel = 'petrol') {
    super(brand, model, maxTank);
    this.typeFuel = typeFuel;
  }
}

