

function transform(drawFunc, ctx, translate, rotate, scale){
  //translate and rotate canvas
  ctx.translate(translate[0], translate[1]);
  ctx.scale(scale[0], scale[1])
  ctx.rotate(rotate);
  console.log("test")
  drawFunc();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  //run transforms backwards to reset the canvas
}


function drawShape(shape, key){
  buffer.addShape(shape, key);
  buffer.drawAll(ctx);
}


function rotate(shape, e){
  var rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  theta = Math.atan2(x - shape.offset[0], y - shape.offset[1]);

  shape.rotate = -theta
  buffer.drawAll(ctx)

}

function scale(shape, e){
  var rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  scaleX = (x - shape.offset[0])/100;
  scaleY = (y - shape.offset[1])/100;
  shape.scale = [scaleX, scaleY];
  buffer.drawAll(ctx);
}

function translate(shape, e){
  var rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  shape.offset = [x, y];
  buffer.drawAll(ctx);
}





function pointInRectangle(x0,y0, x1, y1, px, py){
  horizontal = (px >= x0 && px <= x1)
  vertical = (py >= y0 && py <= y1)
  console.log(`horizontal: ${horizontal} vertical: ${vertical}`)
  return (vertical && horizontal)
}
