//折线图canvas
var DrawLine = {
    canvas: document.getElementById('line'),
    toggle: true,
    data: [[120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]],
    drawLine: function () {
    if (this.canvas.getContext){
        var ctx = this.canvas.getContext('2d');
        //画x y轴
        //重置原点
        if (this.toggle){
            ctx.translate(20,400);
            this.toggle = false
        }
        ctx.clearRect(20,-400, 560, 400);
        //x轴
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(560, 0);
        ctx.lineTo(560, 10);
        ctx.lineTo(580, 0);
        ctx.lineTo(560, -10);
        ctx.lineTo(560, 0);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
        //y轴
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(0, -380);
        ctx.lineTo(10, -360);
        ctx.lineTo(-10, -360);
        ctx.lineTo(0, -380);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();

        //每一个数据点的直径，颜色，线的颜色，宽度
        function drawDataArc(x,y) {
            var r = 5;
            ctx.beginPath();
            ctx.arc(x,y,r,0,2*Math.PI);
            ctx.fillStyle = 'green';
            ctx.lineWidth = 1.5;
            ctx.fill();
            ctx.closePath()
        }
        //两个数据点之间的横向距离 和比例
        var interval = 40;
        //遍历数据，绘制数据点
        for (var j=0,lengthJ=this.data.length;j<lengthJ;j++) {
            var temp = {};
            var proportion = 360/Math.max.apply(null, this.data[j]);
                for (var i=0, length= this.data[j].length; i<length; i++) {
                    var x = '', y='', color = ['blue','red', 'orange', 'black'];
                    x = interval;
                    y = -proportion*this.data[j][i];
                    interval += 40;
                    drawDataArc(x, y);
                    if (i !== 0) {
                        ctx.beginPath();
                        ctx.moveTo(x,y);
                        ctx.lineTo(temp.x, temp.y);
                        ctx.strokeStyle = color[j];
                        ctx.lineWidth = 1.5;
                        ctx.stroke();
                        ctx.closePath()
                    }
                    temp.x = x;
                    temp.y = y;
                }
                interval = 40
        }
    }
},
    setData:function (newData) {
        if (newData){
            this.data = newData;
        }
        this.drawLine()
    }
};