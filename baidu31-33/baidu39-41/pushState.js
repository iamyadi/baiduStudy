// 给checkboxwrapper加事件，每次点击都重新计算hash，更改hash
var checkboxWrapper = document.getElementById('checkboxWrapper');
checkboxWrapper.addEventListener('click', function () {
    var checkedDoms = checkboxWrapper.querySelectorAll('input');//所有input节点
    var pushStateHash = '';
    for (var checkedDom of checkedDoms) {
        if (checkedDom.checked) {
            pushStateHash += '/'+ checkedDom.value
        }
    }
    history.pushState({}, null, `#${pushStateHash}`)
});