// 餐厅类
class Restaurant {
    constructor(arg){
        const {cash, seats, staff} = arg;
        this.cash = cash;
        this.seats = seats;
        this.staff = staff;
    }
    hire(people){
        this.staff.push(people)
    }
    fire(people){
        var index = this.staff.indexOf(people);
        this.staff.splice(index,1)
    }
}

// 职员类
class Employees {
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    work(dish){
        return dish
    }
}

// Waiter
class Waiter extends Employees {
    constructor(){
        super()
    }
    work(arg){
        if (arg instanceof Array){ //数组的话，记录点菜
            return arg
        } else { //上菜行为
            debugger
        }
    }
}

// cook
class Cook extends Employees {
    constructor(...arg){
        super(...arg);
    }
}
// Customer
class Customer {
    constructor(){
        this.dishArr = [];
    }
    order(arr){
        this.dishArr = arr;
    }
    eat(dish){
        var index = this.arr.indexOf(dish);
        return index
    }
}
// Dishes
class Dishes {
    constructor(name,cost, price){
        this.name = name;
        this.cost = cost;
        this.price = price;
    }
}

// 测试代码
var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});
var newCook = new Cook(1, "Tony", 10000);
var Cook2 = new Cook(2, 'aaa', 5000);
console.log(newCook, 'newCook');
console.log(Cook2, 'cook2');
ifeRestaurant.hire(newCook);
ifeRestaurant.hire(Cook2);
console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);