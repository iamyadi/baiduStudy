// 餐厅类
function Restaurant(obj) {
    const { cash, seats, staff} = obj;
    this.cash = cash;
    this.seats = seats;
    this.staff = staff;
}
Restaurant.prototype.hire = function (people) {
    this.staff.push(people)
};
Restaurant.prototype.fire = function (people) {
    var index = this.staff.indexOf(people);
    this.staff.splice(index,1)
};

// 职员类
function Employees(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
Employees.prototype.work = function (dish) {
    return dish
};

//服务员
function Waiter(id, name, salary) {
    Employees.call(this, id, name, salary)
}
Waiter.prototype = Object.create(Employees.prototype);
Waiter.prototype.constructor= Waiter;
Waiter.prototype.work = function (arg) { // 重写原型上的方法
    if (arg instanceof Array){ //数组的话，记录点菜
        return arg
    } else { //上菜行为
        debugger
    }
};

//厨师
function Cook(id, name, salary) {
    Employees.call(this, id, name, salary);
}
Cook.prototype = Object.create(Employees.prototype);
Cook.prototype.constructor = Cook;

//顾客类
function Customer() {
}
Customer.prototype.order = function (arr) {
    return this.arr
};
Customer.prototype.eat = function (dish) {
    var index = this.arr.indexOf(dish);
    return index
};

// dishes
function Dishes(name,cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}
// 测试代码
var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});
var newCook = new Cook(1, "Tony", 10000);
ifeRestaurant.hire(newCook);
console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);
