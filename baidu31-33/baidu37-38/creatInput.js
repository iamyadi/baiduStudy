var show = true; //控制只有一个input
function creatInputDom() {
    var saleTdAll = document.querySelectorAll('.saleTd');
    for ( var saleSingle of saleTdAll) {
        saleSingle.addEventListener('click', function (e) {
            if(e.target.children.length === 0 && show){
                show = false;
                var data = e.target.innerText;
                e.target.innerHTML = `<input id="input" style="width: 90%" value=${e.target.innerText} type="text" /><button id="cancel">取消</button><button id="confirm">确定</button>`;
                e.target.className = '';
                document.getElementById('input').addEventListener('blur', function (ev) {
                   verify(ev.target.value)
                });
                function verify(value) {
                    if (isNaN(Number(value))) {
                        alert('输入数字啊！啊');
                        return false
                    } else {
                        return true
                    }
                }
                // 取消按钮事件
                document.getElementById('cancel').addEventListener('click', function (ev) {
                    ev.stopPropagation();
                    ev.target.parentNode.innerHTML = data;
                    show = true
                });
                //给document加点击事件，判断是不是这个单元格
                document.addEventListener('click', function (ev) {
                    var target = ev.target;
                    var flag = false;
                    while (target) {
                        if (target.className === '' && target.tagName === 'TD') {
                            flag = true;
                            break
                        }
                        target = target.parentNode
                    }
                    if (!flag) {
                        e.target.innerHTML = data;
                        show = true
                    }
                });
                //确认按钮事件
                document.getElementById('confirm').addEventListener('click', function (ev) {
                    ev.stopPropagation();
                    if (verify(document.getElementById('input').value)) {
                        ev.target.parentNode.innerHTML = document.getElementById('input').value;
                    }
                    show = true
                })
                // 键盘事件
                var keydown = function (ev) {
                    if (ev.keyCode === 27) {
                        document.getElementById('cancel').click()
                    } else if (ev.keyCode === 13) {
                        document.getElementById('confirm').click()
                    }
                    document.removeEventListener('keydown', keydown)
                };
                document.addEventListener('keydown', keydown)
            }

        });
    }
}
