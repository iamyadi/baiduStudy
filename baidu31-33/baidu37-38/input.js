function inputOnblur() {
    var inputAll = document.querySelectorAll('input[type=text]');
//挨个加onblur事件 它应该是个空数组嗯
    for (var input of inputAll) {
        input.addEventListener('blur', function (e) {
            if (isNaN(Number(e.target.value))) {
                alert('输入数字啊！啊')
            }
        })
    }
}

