var canvas=document.getElementById("canvasId")

var context = canvas.getContext("2d")

//code for drawing on canvas
context.moveTo(0,0)
context.lineTo(320,240)
context.stroke()
context.fillStyle="#ff0000"
context.fillRect(50,50,100,200)
context.strokeRect(50,50,100,200)
context.font='20px serif'
context.fillText("Canvas Style", 200,200)
