

class CanvasBuffer {
  constructor(){
    this.shapes = [];
  }

  addShape(shape){
    this.shapes.push(shape);
  }

  drawAll(ctx){
    this.shapes.forEach((shape) => {shape.draw(ctx)})
  }

}
