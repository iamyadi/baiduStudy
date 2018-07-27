// 给checkboxwrapper加事件，每次点击都重新计算hash，更改hash
var checkboxWrapper = document.getElementById('checkboxWrapper');
checkboxWrapper.addEventListener('click', function () {
    window.location.hash = '';
    var checkedDoms = checkboxWrapper.querySelectorAll('input');//所有input节点
    for (var checkedDom of checkedDoms) {
        if (checkedDom.checked) {
            window.location.hash += '/'+ checkedDom.value
        }
    }
});
