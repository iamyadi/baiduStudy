var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    },
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    },
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
};
var a = Object.keys(scoreObject);
var result = [];
for (var i=0; i<a.length;i++){
    var singleArr = [];
    for (grade in scoreObject[a[i]]) {
        singleArr.push(scoreObject[a[i]][grade])
    }
    singleArr.unshift(a[i]);
    result.push(singleArr);
}
console.log(result);

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6]
];
var totalArr = [];
for (arr of menuArr) {
    var key1 = arr[0];
    var name = arr[1];
    var subMenu = arr[2];
    var singleObj = {};
    singleObj[arr[0]] = {
        name:name,
        subMenu: subMenu
    };
    console.log(singleObj);
    totalArr.push(singleObj)
}
var finalObj = {};

for (var obj of totalArr) {
    var keyStr = Object.keys(obj)[0];
    var key = Number(Object.keys(obj)[0]);
    for (var j=0; j<totalArr.length; j++) {
        if (totalArr[j][j+1].subMenu===key) {
            if (typeof obj[keyStr].subMenu === "object") {
                obj[keyStr].subMenu = {...obj[keyStr].subMenu, ...totalArr[j]};
            } else {
                obj[keyStr].subMenu = totalArr[j];
            }
        }
    }
}
for (var objj of totalArr){
    var keyString = Object.keys(objj)[0];
    if (typeof objj[keyString].subMenu === 'number') {
        delete objj[keyString]['subMenu']
    }
}
for (var arrSingle in menuArr) {
    if (menuArr[arrSingle][2] === -1) {
        finalObj = {...finalObj, ...totalArr[arrSingle]}
    }
}
console.log('1111',JSON.stringify(finalObj));



