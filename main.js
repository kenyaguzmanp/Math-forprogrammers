function draw() {
  const canvas = document.getElementById('coordinateSystem');
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const marginVertical = 20;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

   drawCoordinateSystem(ctx, canvasWidth, canvasHeight, marginVertical);

  }
}


function drawLine(context, initX, initY, finalX, finalY) {
  context.beginPath();       // Start a new path
  context.moveTo(initX, initY,);
  context.lineTo(finalX, finalY);
  context.lineWidth = 1;
  context.stroke();          // Render the path 
}

function drawRectangle(context, x, y, width, height, color) {
  context.fillStyle=color;
  context.fillRect(x,y, width, height);
}

function drawCoordinateSystem(context, width, height, margin) {
   // X axis                                                                                                                                                                                                                                                                                 
   drawLine(context, width / 2, margin, width / 2, height - margin);
   // Y axis
   drawLine(context, margin, height / 2, width - margin, height / 2);
   // Origin
   drawRectangle(context, width / 2 - 2.5, height / 2 - 2.5, 5, 5, "blue");
}

draw();