var selected = null
var shape_keys = 0;
var transformFunction = translate;

document.getElementById("shape-canvas").addEventListener('mousemove', (e)=>{
  //capture mouse movement
  if(selected == null){

  } else {
    transformFunction(buffer.getShape(selected), e)
  }


}, false);

document.getElementById("shape-canvas").onclick = (e)=>{
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

document.getElementById("line").onclick = (e) => {
  shape = new Line(-20,-20, 20, 20)
  drawShape(shape, shape_keys);
  selected = shape_keys;
  shape_keys ++;
  transformFunction = translate;
}

document.getElementById("triangle").onclick = (e) => {

}

document.getElementById("square").onclick = (e) => {

}

document.getElementById("rectangle").onclick = (e) => {
  shape = new Rectangle(40, 50)
  drawShape(shape, shape_keys);
  selected = shape_keys;
  shape_keys ++;
  transformFunction = translate;
}

document.getElementById("circle").onclick = (e) => {

}

document.getElementById("elipse").onclick = (e) => {

}

document.getElementById("curve").onclick = (e) => {

}

document.getElementById("poly-line").onclick = (e) => {

}

document.getElementById("polygon").onclick = (e) => {

}


/*
  Transform buttons
  These buttons select which transform you want
*/


document.getElementById("translate").onclick = (e) => {
  transformFunction = translate
}

document.getElementById("rotate").onclick = (e) => {
  transformFunction = rotate
}

document.getElementById("scale").onclick = (e) => {
  transformFunction = scale
}
