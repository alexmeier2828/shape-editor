

class CanvasBuffer {
  constructor(){
    this.shapes = [];
  }

  addShape(shape){
    this.shapes.push = [];
  }

  drawAll(ctx){
    this.shapes.foreach((shape) = {shape.draw(ctx)})
  }

}


module.exports = CanvasBuffer
