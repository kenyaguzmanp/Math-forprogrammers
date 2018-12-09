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

function drawTriangle(context, initX, initY, finalX, finalY, width, height) {
  drawLine(context, initX, initY, finalX, finalY);
}

function drawText(context, text, x, y) {
  context.font = '12px serif';
  context.fillText(text, x, y);
}

function drawOrigin(context, x, y, width, color) {
  drawRectangle(context, x - (width / 2), y - (width / 2), 5, width, color);
  drawText(context, "Origin", x + 10, y - 10);
}

function drawXAxis(context, width, height, margin) {
  drawLine(context, margin, height / 2, width - margin, height / 2);                                                                                                                                                                                                                                                                                 
  drawText(context, "X", width - margin, height / 2 - 10);
  drawText(context, "-X", margin, height / 2 - 10);
}

function drawYAxis(context, width, height, margin){
  drawLine(context, width / 2, margin, width / 2, height - margin);
  drawText(context, "Y", width / 2 + 10, margin);
  drawText(context, "-Y", width / 2 + 10, height - margin);
}

function drawCoordinateSystem(context, width, height, margin) {
  // X axis
  drawXAxis(context, width, height, margin);
  // Y axis
  drawYAxis(context, width, height, margin);
  // Origin
  drawOrigin(context, width / 2, height / 2, 5, "blue");
}

draw();