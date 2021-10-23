canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.linewidth= 1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.linewidth=5;
ctx.arc(250,210,40,0,2* MATH.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.linewidth=5;
ctx.arc(260,250,40,0,2* MATH.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.linewidth=5;
ctx.arc(2570,210,40,0,2* MATH.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.linewidth=5;
ctx.arc(280,250,40,0,2* MATH.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.linewidth=5;
ctx.arc(290,210,40,0,2* MATH.PI);
ctx.stroke();