
var sourceData = [ // 嗯 对 去localStorage里拿 不是 没有先存进去再拿 对  为啥都换成input 为啥这么干 昨天不是取过吗 一行的数据啊
    {
        product: "手机",
        region: "华东",
        sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
    }, {
        product: "手机",
        region: "华北",
        sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
    }, {
        product: "手机",
        region: "华南",
        sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
    }, {
        product: "笔记本",
        region: "华东",
        sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
    }, {
        product: "笔记本",
        region: "华北",
        sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
    }, {
        product: "笔记本",
        region: "华南",
        sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
    }, {
        product: "智能音箱",
        region: "华东",
        sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
    }, {
        product: "智能音箱",
        region: "华北",
        sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
    }, {
        product: "智能音箱",
        region: "华南",
        sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
    }];
var regionSelect = document.getElementById('region-select');
var tableWrapper = document.getElementById('table-wrapper');
var commoditySelect = document.getElementById('commodity-select');
var regionWrapper = document.getElementById('region-wrapper');
var productWrapper = document.getElementById('product-wrapper');
var checkboxWrapper = document.getElementById('checkboxWrapper');

//select选项模块
// regionSelect.onchange = function () {
//     renderTable();
// };
// commoditySelect.onchange = function () {
//     renderTable();
// };

//根据数据渲染
function multiLine() {
    var { tableData } = handleDoubleData();
    var totalData = [];
    for (var row of tableData) {
        totalData.push(row.sale)
    }
    DrawLine.setData(totalData)
}
//当从table离开的时候，进行渲染
tableWrapper.onmouseleave = function (ev) {
    multiLine()
};
//点击checkbox,渲染table，渲染折线图
checkboxWrapper.onclick = function () {
    renderTable();
    creatInputDom();
    inputOnblur();
    multiLine()
};


//下面两个方法没有用上。这是上面select的方法。

//数据处理模块
function handleRegionData() {
    //获取select选中的文本
    var index = select.selectedIndex;
    var selectedText = select.options[index].text;
    //拼接新的数据（array类型）
    var tempData = sourceData.slice();
    var data = [];
    if (selectedText === '请选择地区') {
        data = tempData.slice()
    } else {
        for (var singleData of tempData) {
            if (singleData.region === selectedText) {
                data.push(singleData)
            }
        }
    }
    return data
}

function handleCommodityData() {
    var tempData = handleRegionData();
    var index = commoditySelect.selectedIndex;
    var selectedText = commoditySelect.options[index].text;
    var data = [];
    if (selectedText === '请选择商品') {
        data = tempData.slice()
    } else {
        for (var singleData of tempData) {
            if (singleData.product === selectedText) {
                data.push(singleData)
            }
        }
    }
    return data
}


