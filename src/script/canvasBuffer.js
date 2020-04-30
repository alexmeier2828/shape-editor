

class CanvasBuffer {
  constructor(canvas){
    this.canvas = canvas
    this.shapes = new Object();
  }

  addShape(shape, key){
    this.shapes[key] = shape
  }

  drawAll(ctx){
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for(let key in this.shapes){
      this.shapes[key].draw(ctx)
    }
  }

  getShape(key){
    return this.shapes[key]
  }

  getShapeAt(x, y){
    for(let key in this.shapes){
      if(this.shapes[key].inside(x, y)){
        return key
      }
    }
    return null
  }

}
