//处理checkbox数据
function handleDoubleData() {
    var data=[];
    var tempData = '';
    if (localStorage.getItem('totalData')) {
        tempData = JSON.parse(localStorage.getItem('totalData'))
    } else {
        tempData = sourceData.slice();
    }
    var regionAllDom = regionWrapper.querySelectorAll('input');
    var regionCheckedValue = [];
    for (var regionDom of regionAllDom) {
        if (regionDom.checked) {
            regionCheckedValue.push(regionDom.value)
        }
    }
    var regionLength = regionCheckedValue.length;

    var productAllDOM = productWrapper.querySelectorAll('input');
    var productValue = [];
    for (var product of productAllDOM){
        if (product.checked) {
            productValue.push(product.value)
        }
    }
    var productLength = productValue.length;
    for (var single of tempData) {
        if (regionCheckedValue.includes(single.region)) {
            if (productValue.includes(single.product)) {
                data.push(single)
            }
        }
    }
    return {
        tableData: data,
        regionLength: regionLength,
        productLength: productLength,
        productValue: productValue
    }
}