var ctx = canvas.getContext('2d');

canvas.onclick = function (e) {
    var vl = myVideo.duration,
        w = canvas.width,
        x = e.clientX - 5;

    myVideo.currentTime = x / w * vl;
}
loop();

function loop() {

    var b = myVideo.buffered,
        i = b.length,
        w = canvas.width,
        h = canvas.height,
        vl = myVideo.duration,
        x1, x2;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#d00';

    while (i--) {
        x1 = b.start(i) / vl * w;
        x2 = b.end(i) / vl * w;
        ctx.fillRect(x1, 0, x2 - x1, h);
    }
    ctx.fillStyle = '#fff';

    x1 = myVideo.currentTime / vl * w;
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';

    ctx.fillText(vid.currentTime.toFixed(1), 4, 4);

    ctx.textAlign = 'right';
    ctx.fillText(vl.toFixed(1), w - 4, 4);

    ctx.beginPath();
    ctx.arc(x1, h * 0.5, 7, 0, 2 * Math.PI);
    ctx.fill();

    setTimeout(loop, 29);
}
