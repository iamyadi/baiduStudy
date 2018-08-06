// 餐厅类
function Restaurant(obj) {
    const { cash, staff} = obj;
    this.cash = cash;
    this.seats = 1;
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
    console.log('finish the cook work $cook 记录工作');
    return dish
};

//服务员 单例
var waiterSingle = (function () {
    var waiter = null;
    function Waiter(id, name, salary) {
        Employees.call(this, id, name, salary)
    }
    Waiter.prototype = Object.create(Employees.prototype);
    Waiter.prototype.constructor= Waiter;
    Waiter.prototype.work = function (arg) { // 重写原型上的方法
        if (arg instanceof Array){ //数组的话，记录点菜
            console.log('finish order dish $记录work');
            return this;
        } else { //上菜行为
            console.log('finish serving a dish $记录work')
        }
    };
    // cook调用的方法，返回菜单
    Waiter.prototype.tellCookTheMenu = function () {
        return this.menu;
    };
    // cook调用的方法，拿到做好的菜
    Waiter.prototype.serving = function () {
        this.work();// 上菜行为
        this.customer.eat();
    };

    // 从顾客order方法，拿到点的菜
    Waiter.prototype.getMenu = function (arg) {
        this.customer = arg;
        this.menu = arg.dish;
        console.log('waiter get the menu', this.menu);
        return this;
    };

    return {
        name: 'waiter',
        getWaiterInstance: function (...arg) {
        if (!waiter) {
            waiter = new Waiter(...arg)
        }
        return waiter;
    }
}

})();

//厨师 利用闭包实现单例模式
var cookSingle = (function () {
    var cook = null;
    function Cook(id, name, salary) {
        Employees.call(this, id, name, salary);
    }
    Cook.prototype = Object.create(Employees.prototype);
    Cook.prototype.constructor = Cook;
    Cook.prototype.getMenu = function (arg) {
        this.workTodo = arg.tellCookTheMenu();
        console.log('get the menu from the waiter', this.workTodo);
        this.work(this.workTodo);
        arg.serving();
    };

    return {
        name: 'Cook',
        getCookInstance: function (...arg) {
        if (!cook) {
            cook = new Cook(...arg);
        }
        return cook;
    }
}
})();

//顾客类
function Customer(name) {
    this.name = name;
}
Customer.prototype.order = function (arr) {
    console.log('customer order a dish', arr);
    this.dish = arr;
};
Customer.prototype.eat = function (dish) {
    console.log('customer finish eat');
};

// 顾客队列
var customerList = ['Lily', 'Edy', 'Jone'];

// 菜单
var dishesList = [{name:'锅包肉',cost:20, price:22},{name:'鱼香肉丝',cost:10, price:15},{name:'土豆丝',cost:5, price:12},{name:'鲅鱼水饺',cost:22, price:30}];
// 点菜方法
var index = 0;
var orderDish = function (dishesList) {
    if (index>=dishesList.length){
        index = 0;
    }
    var dish = dishesList[index];
    index += 1;
    return dish
};

// dishes
function Dishes({name,cost, price}) {
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
var cookTony = cookSingle.getCookInstance(1, "Tony", 10000);
ifeRestaurant.hire(cookTony);
console.log(ifeRestaurant.staff, 'cook');

var waiter = waiterSingle.getWaiterInstance(2, 'Lucy', 5000);
ifeRestaurant.hire(waiter);
console.log(ifeRestaurant.staff, 'add waiter');

// 创建菜单实例
var dishInstanceList = [];
dishesList.forEach((item)=>{
    dishInstanceList.push(new Dishes(item))
})
console.log(dishInstanceList, 'dishInstanceList');

// 创建顾客实例LIST；
var customerInstanceList = [];
customerList.forEach((item)=>{
    customerInstanceList.push(new Customer(item))
})
console.log(customerInstanceList, 'customerInstanceList');

var behavior = function (customer) {
    // 顾客点餐
    var dish = orderDish(dishesList);
    var customer = customer;
    var dishArray = [];
    dishArray.push(dish);
    customer.order(dishArray);
    // waiter 行为
    waiter.getMenu(customer);
    waiter.work(dishArray); // 记录一次工作

    // cook 行为
    cookTony.getMenu(waiter);
};
customerInstanceList.forEach((customer)=>{
    console.log('顾客进入la:' , customer.name)
behavior(customer);
})