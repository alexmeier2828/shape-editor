
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.x = -(0.5 * width);
    this.y = -(0.5 * height);
    this.offset = [0, 0];
    this.scale = [1, 1];
    this.rotate = 0;
    console.log(this);
  }
  draw(ctx){
    transform(() => this._draw(ctx), ctx, this.offset, this.rotate, this.scale);
  }
  _draw(ctx){
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  inside(x, y){

    let x0 = this.x;
    let y0 = this.y;
    let x1 = (this.x + this.width);
    let y1 = (this.y + this.height);
    return pointInRectangle(x0, y0, x1, y1, (x - this.offset[0])/this.scale[0]  ,(y - this.offset[1])/this.scale[1])

  }
}
