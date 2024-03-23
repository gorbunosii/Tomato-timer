function Cart(items) {
    this.items = items;
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;

    this.calculateGoodsPrice = function() {
        return this.totalPrice = this.goods.reduce((acc, item) => {
            return acc + item.price
        }, 0);
    };

    this.addGoods = function() {
        this.goods.push(this.items);
        this.increaseCount();
    };

    this.getTotalPrice = function() {
        return this.totalPrice
    };
    
    this.increaseCount = function() {
        return this.count = this.count + 1;
    };
    
    this.clear = function() {
        this.items = this.goods[0];
        this.goods = [];
        this.totalPrice = 0;
        this.count = 0;
    };
    
    this.print = function() {
        console.log(JSON.stringify(this.items));
        console.log(`Общяя стоимость корзины: ${this.totalPrice}`);
    };
};

function Goods(price = 0, name = ``, discount = 0) {
    this.price = price;
    this.name = name;
    this.discount = discount;

    this.TechnicsGoods = function() {
        this.calories = Math.floor(Math.random() * 100) + 1;
   };
   
   this.FoodGoods = function() {
        this.material = `aluminum`;
   };
   
   this.СlothingGoods = function() {
        this.type = `build`;
   };
};

Object.setPrototypeOf(Goods.prototype, Cart.prototype);

const calories = new Goods(50, `Булочка`, `10%`);
const car = new Goods(1000050, `Машина`, `20%`);
const build = new Goods(9999950, `Строительная`, `40%`);
calories.TechnicsGoods();
car.FoodGoods();
build.СlothingGoods();
// const cartCalories = new Cart(calories);
const cartCar = new Cart(car);
// const cartBuild = new Cart(build);
