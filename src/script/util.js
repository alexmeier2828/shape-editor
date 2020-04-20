

function transform(drawFunc, ctx, translate, rotate){
  //translate and rotate canvas

  drawFunc();

  //run transforms backwards to reset the canvas
}


function drawShape(shape){
  buffer.addShape(shape);
  buffer.drawAll(ctx);
}
