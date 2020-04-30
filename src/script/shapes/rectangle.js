
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
    transform(() => this._draw(ctx), ctx, this.offset, this.rotate);
  }
  _draw(ctx){
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  inside(x, y){
    return pointInRectangle(this.x + this.offset[0], this.y + this.offset[1], this.x + this.width  + this.offset[0], this.y + this.height  + this.offset[1], x ,y)
  }
}
