class Counter {
    constructor(nameObj, countObj = 0) {
        this.ID = String(Math.floor(Math.random() * 9999999) + 1000000);
        this.name = String(nameObj);
        this.count = Number(countObj);
    }

    changeName() {
        return this.name = value;
    }

    changeCount() {
        return this.count = this.count + 1;
    }
}

const counterObj = new Counter('Счётчик', 0);
console.log(counterObj)