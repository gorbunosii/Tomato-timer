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

  needPetrol() {
    return this.#maxTank - this.nowTank;
  }

  fillUp() {
    return this.nowTank - this.#maxTank;
  }

  get maxTank() {
    return this.#maxTank;
  }

  set maxTank(data) {
    console.log('123');
  }
}
