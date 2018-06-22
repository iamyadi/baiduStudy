function GoSteps(n) {
    if (typeof n === 'undefined') {
        console.log('Go')
    } else if (typeof n === 'number' && n > 0) {
        var num = parseInt(n);
        for (var i = 0; i < num; i++) {
            console.log('Go')
        }
    } else if (n === true) {
        console.log('Go')
    }
}

GoSteps(10); // Go 10次
GoSteps(1); // Go 1次
GoSteps(); // Go 1次，认为缺少参数时，默认参数为1
GoSteps(0);  // 0次
GoSteps(-1);  // 0次
GoSteps(1.4);  // Go 1次
GoSteps(1.6);  // Go 1次
GoSteps(-1);  // 0次
GoSteps(true);  // Go 1次
GoSteps(false);  // 0次
GoSteps("Test");  // 0次
GoSteps(NaN);  // 0次
GoSteps(null);  // 0次