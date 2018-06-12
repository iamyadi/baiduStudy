var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
console.log(arr.sort(function (a,b) { return a-b  }));
console.log(arr.sort(function (a,b) { return b-a  }));
var arr1 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
console.log(arr1.sort());
function compare(a, b) {
    if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
        return 1;
    }
    if (a > b ) {
        return -1;
    }
    // a must be equal to b
    return 0;
}
console.log(arr1.sort(compare));

var arr2 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
function compare1(a,b) {
    if (a[1] < b[1]){
        return 1
    }
    if (a[1] > b[1]){
        return -1
    }
    return 0;
}
console.log(arr2.sort(compare1));

var arr3 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];

function compare2(a,b) {
 if (a.value < b.value) {
        return -1
 } if (a.value > b.value) {
     return 1
    }
    return 0
}
console.log(arr3.sort(compare2));

