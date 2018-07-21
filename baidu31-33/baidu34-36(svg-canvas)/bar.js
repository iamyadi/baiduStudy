function drawColumn(data) {
    var nameSpace = 'http://www.w3.org/2000/svg';
    var max = Math.max.apply(null, data);
    var proportion = 350/max;
    var interval = 35; //column间隔
    var columnStyle = 'stroke: blue; fill: orange';
    var embedSVG = document.getElementById('embed').getSVGDocument().getElementById('svgColumn');

    //删除原来的矩形数据柱子
    var children = embedSVG.querySelectorAll('rect');
    for (var child of children ) {
        embedSVG.removeChild(child)
    }
    for (let singleColumn of data) {
        var rect = document.createElementNS(nameSpace,'rect');
        rect.style = columnStyle;
        height = singleColumn*proportion;
        rect.setAttribute('width', '30');
        rect.setAttribute('height', height);
        rect.setAttribute('x', interval);
        rect.setAttribute('y', 380-height);
        embedSVG.appendChild(rect);
        interval += 45
    }
}
