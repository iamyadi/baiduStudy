//渲染chexkbox， 并且绑定事件
createCheckBox = function (domId, valueArr) {
    var selectAll = {value: 1, text: '全选'};
    var wrapper = document.getElementById(domId);
    valueArr.unshift(selectAll);
    var innerHTML = '';
    for (var singleCheckbox of valueArr) {
        innerHTML += `<label>${singleCheckbox.text}<input type="checkbox" value=${singleCheckbox.text}> </label>`
    }
    wrapper.innerHTML = innerHTML;
    //事件委托
    wrapper.onclick = function (ev) {
        if (ev.target.type === 'checkbox') {
            var domArr = Array.prototype.slice.call(wrapper.getElementsByTagName('input'));
            if (ev.target.value === '全选') { //全选逻辑
                if (ev.target.checked) {
                    domArr.forEach((e) => {
                        e.checked = true
                })
                } else {
                    domArr.forEach((e) => {
                        e.checked = false
                })
                }
            } else {
                var result = true;
                for (var single of domArr.slice(1)) {
                    if (!single.checked) {
                        result = false
                    }
                }
                if(result){
                    domArr[0].checked = true
                } else {
                    domArr[0].checked = false
                }
            }
        }
    }
};
createCheckBox('region-wrapper', [
    {value: 'east', text: '华东'},
    {value: 'north', text: '华北'},
    {value: 'south', text: '华南'}
]);
createCheckBox('product-wrapper',[
    {value: 'cellphone', text: '手机'},
    {value: 'computer', text: '笔记本'},
    {value: 'audio', text: '智能音箱'}
]);