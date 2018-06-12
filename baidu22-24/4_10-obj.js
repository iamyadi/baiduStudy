var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }
        }
    }
};

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name,node) {
    if(node){
        if (node.name === name) {
            console.log(node.id);
        } else {
            findIdByName(name, node.left);
            findIdByName(name, node.right);
        }
    }
}
findIdByName('Carl',tree);

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id,node) {
    if (node){
        if (node.id === id) {
            console.log(node.name);
        } else {
            findNameById(id, node.left);
            findNameById(id, node.right);
        }
    }
}
findNameById(5,tree);
// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(node) {
    if(node){
        console.log(node.name);
        getListWithDLR(node.left);
        getListWithDLR(node.right);
    }
}
getListWithDLR(tree);
// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR(node) {
    if(node){
        getListWithLDR(node.left);
        console.log(node.name);
        getListWithLDR(node.right);
    }
}
getListWithLDR(tree);
// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD(node) {
    if(node){
        getListWithLDR(node.left);
        getListWithLDR(node.right);
        console.log(node.name);
    }
}
getListWithLRD(tree);