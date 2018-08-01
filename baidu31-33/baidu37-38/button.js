//button点击事件 保存到localStorage中 遍历table，拿到数据
var btn = document.getElementById('save');
btn.onclick = function () {
    var data = [];
    var trAll = document.querySelectorAll('tbody tr');
    for (var tr of trAll) {
        var rowData = {};
        rowData.sale = [];
        for (var td of tr.children) {
            rowData.product = tr.getAttribute('date-product');
            rowData.region = tr.getAttribute('data-region');
            if (!isNaN(Number(td.innerText))) {
                rowData.sale.push(td.innerText)
            }
        }
        data.push(rowData);
    }
    localStorage.setItem('totalData', JSON.stringify(data));
    renderTable();
    creatInputDom();
    inputOnblur();
    multiLine()
};