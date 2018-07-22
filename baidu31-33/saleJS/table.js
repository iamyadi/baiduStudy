//table渲染模块
function renderTable() {
    var { tableData, regionLength, productLength } = handleDoubleData();
    //月份渲染
    var thCollection = '';
    for (var i=1; i<13; i++) {
        thCollection += '<th style="width: 70px;">' + i + '月</th>'
    }
    // thead渲染
    var a='', b='';

    //不同情况thead渲染不同
    if (regionLength === 1 && productLength > 1) {
        a = '地区';
        b = '商品'
    } else if ((productLength ===1 && regionLength > 1) || (productLength > 1 && regionLength >1) || (productLength===1 && regionLength===1)){
        a = '商品';
        b = '地区'
    }
    var theadString = '<thead>' +
        '<tr>' +
        '<th>'+ a + '</th>' +
        '<th>'+ b + '</th>' + thCollection +
        '</tr>' +
        '</thead>';
    //tbody渲染 没有就加一个啊
    var tbodyRowString = '';
    var productGroup = {
        '手机':[],
        '笔记本':[],
        '智能音箱':[]
    };
    // 就是给第二列加一个自定属性 不是index
    for (var i=0; i<tableData.length; i++) {
        var singleRow = tableData[i];
        var saleString = '';
        for (var sale of singleRow.sale) {
            saleString += '<td class="saleTd">' + sale + '</td>';
        }
        if(regionLength === 1 && productLength > 1){ //地区一个，商品多个
            if (i === 0) {
                tbodyRowString += `<tr data-region=${singleRow.region} date-product = ${singleRow.product}>`+'<td class="rowspan" rowspan='+ productLength+'>' + singleRow.region + '</td><td>' + singleRow.product + '</td>' + saleString + '</td></tr>'
            } else {
                tbodyRowString += `<tr data-region=${singleRow.region} date-product = ${singleRow.product}>`+'<td>' + singleRow.product + '</td>' + saleString + '</tr>'
            }
        } else if (productLength === 1 && regionLength > 1) { //商品一个，地区多个
            if (i === 0) {
                tbodyRowString += `<tr data-region=${singleRow.region} date-product = ${singleRow.product}>`+'<td class="rowspan" rowspan='+ regionLength+'>' + singleRow.product + '</td><td>' + singleRow.region + '</td>' + saleString + '</td></tr>'
            } else {
                tbodyRowString += `<tr data-region=${singleRow.region} date-product = ${singleRow.product}>`+'<td>' + singleRow.region + '</td>' + saleString + '</tr>'
            }
        } else if (productLength ===1 && regionLength === 1) { //都是一个
            tbodyRowString += `<tr data-region=${singleRow.region} date-product = ${singleRow.product}>`+'<td>' + singleRow.product + '</td><td>' +singleRow.region +'</td>' + saleString + '</tr>'
        } else if (regionLength > 1 && productLength > 1) { //均选择了多个
            // 数据处理部分
            productGroup[singleRow.product].push(singleRow)
        }
    }

    //渲染多选tbody
    if (regionLength > 1 && productLength > 1) {
        for (var key in productGroup) {
            if (productGroup[key].length !== 0) {
                for (var j=0; j<productGroup[key].length; j++) {
                    var single = productGroup[key][j];
                    var saleStr = '';
                    for (var saleValue of single.sale) {
                        saleStr += '<td class="saleTd">' + saleValue + '</td>'
                    }
                    if (j === 0 ) {
                        tbodyRowString += `<tr data-region=${singleRow.region} date-product = ${single.product}>`+'<td class="rowspan" rowspan='+ productGroup[key].length+'>' + single.product + '</td><td>' + single.region + '</td>' + saleStr + '</td></tr>'
                    } else {
                        tbodyRowString += `<tr data-region=${singleRow.region} date-product = ${single.product}>`+'<td>' + single.region + '</td>' + saleStr + '</tr>'
                    }
                }
            }
        }
    }

    htmlString = '<table>' +
        theadString + '<tbody id="tbody">' +
        tbodyRowString + '</tbody>' +
        '</table>';
    tableWrapper.innerHTML = htmlString;


    // 当mouseover时候，渲染折线图
    var tbody = document.getElementById('tbody');
    tbody.onmouseover = function (ev) {
        target = ev.target;
        while(target.tagName.toLowerCase()!== 'td') {//记不清大写小写了
            target = target.parentNode
        }
        var tr = target.parentNode.children;
        var result = [];
        for (var td of tr) {
            // if (td.children.length !== 0) {
                result.push(td.innerText)
            // }
        }
        var finalData = [];
        for (var data of result) {
            if (Number(data)) {
                finalData.push(Number(data))
            }
        }
        var doubleArray = [];
        doubleArray.push(finalData);
        if (finalData.length===0) {
            DrawLine.setData();
            drawColumn([120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270])
        } else {
            DrawLine.setData(doubleArray);
            drawColumn(finalData)
        }
    };
}