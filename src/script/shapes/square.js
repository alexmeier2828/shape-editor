
class Square {
  constructor() {
    this.size = 50
    this.x = -(0.5 * this.size);
    this.y = -(0.5 * this.size);
    this.offset = [0, 0];
    this.scale = [1, 1];
    this.rotate = 0;
    console.log(this);
  }
  draw(ctx){
    let squareScale = [this.scale[0] + this.scale[1], this.scale[0] + this.scale[1]]
    transform(() => this._draw(ctx), ctx, this.offset, this.rotate, squareScale);
  }
  _draw(ctx){
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  inside(x, y){

    let x0 = this.x;
    let y0 = this.y;
    let x1 = (this.x + this.size);
    let y1 = (this.y + this.size);
    return pointInRectangle(x0, y0, x1, y1, (x - this.offset[0])/this.scale[0]  ,(y - this.offset[1])/this.scale[1])

  }
}
