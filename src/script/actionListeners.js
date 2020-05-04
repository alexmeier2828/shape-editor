var selected = null
var shape_keys = 0;
var transformFunction = translate;
var MULTI_POINT_MODE = false;
var LINE_MODE = false;

document.getElementById("shape-canvas").addEventListener('mousemove', (e)=>{
  //capture mouse movement
  if(selected == null){

  } else {
    transformFunction(buffer.getShape(selected), e)
  }


}, false);

document.getElementById("shape-canvas").onclick = (e)=>{

  if(e.button == 0){
    if(MULTI_POINT_MODE){
      var rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      buffer.getShape(selected).addPoint(x, y);
    } else {
      console.log("clicked!");
      if(selected != null){
        selected = null;
      }else{
        var rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        console.log(`${x}, ${y}`)
        selected = buffer.getShapeAt(x, y);
        console.log(buffer.getShape(selected))
      }
    }

  }
  else{
    console.log("right Clicked!");
  }

}

document.getElementById("line").onclick = (e) => {
  clearSelection();
  shape = new Line(-20,-20, 20, 20)
  drawShape(shape, shape_keys);
  selected = shape_keys;
  shape_keys ++;
  transformFunction = translate;
}

document.getElementById("triangle").onclick = (e) => {
  clearSelection();
  shape = new Polygon(3);
  drawShape(shape, shape_keys);
  selected = shape_keys;
  shape_keys ++;
  transformFunction = translate;
}

document.getElementById("square").onclick = (e) => {
  clearSelection();
  shape = new Square();
  drawShape(shape, shape_keys);
  selected = shape_keys;
  shape_keys ++;
  transformFunction = translate;
}

document.getElementById("rectangle").onclick = (e) => {
  clearSelection();
  shape = new Rectangle(40, 50);
  drawShape(shape, shape_keys);
  selected = shape_keys;
  shape_keys ++;
  transformFunction = translate;
}

document.getElementById("circle").onclick = (e) => {
  clearSelection();
  shape = new Circle();
  drawShape(shape, shape_keys);
  selected = shape_keys;
  shape_keys ++;
  transformFunction = translate;
}

document.getElementById("elipse").onclick = (e) => {
  clearSelection();
  shape = new Elipse();
  drawShape(shape, shape_keys);
  selected = shape_keys;
  shape_keys ++;
  transformFunction = translate;
}

document.getElementById("curve").onclick = (e) => {

}

document.getElementById("poly-line").onclick = (e) => {
    clearSelection();
    MULTI_POINT_MODE = true;
    multiLine = new MultiLine();
    selected = shape_keys;
    shape_keys ++;
    transformFunction = (shape, e) =>{
      rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      shape.movePoint(x, y)
      buffer.drawAll(ctx);
    }
    drawShape(multiLine, selected);
}

document.getElementById("polygon").onclick = (e) => {
  clearSelection();
  let sides = parseInt(document.getElementById("sides").value)
  shape = new Polygon(sides);
  drawShape(shape, shape_keys);
  selected = shape_keys;
  shape_keys ++;
  transformFunction = translate;
}


/*
  Transform buttons
  These buttons select which transform you want
*/
document.getElementById("translate").onclick = (e) => {
  clearSelection();
  transformFunction = translate
}

document.getElementById("rotate").onclick = (e) => {
  clearSelection();
  transformFunction = rotate
}

document.getElementById("scale").onclick = (e) => {
  clearSelection();
  transformFunction = scale
}

document.getElementById("png").onclick = (e) => {
  clearSelection();
  url = canvas.toDataURL("export/png");
  document.write(`<img src="${url}"/>`);
}




function clearSelection(){
  if(MULTI_POINT_MODE){
    buffer.getShape(selected).deleteTail();
    buffer.drawAll(ctx);
  }
  MULTI_POINT_MODE = false;
  transformFunction = translate;
  selected = null;
}
