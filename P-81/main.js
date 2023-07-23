var canvas= document.getElementById("mycanvas");
var ctx= canvas.getcontext("2d");

function draw(){


    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.rect(150, 143, 430, 200);
    ctx.stroke();
    ctx.arc(170 ,153, 40, 0, 2*Math.pi);
}