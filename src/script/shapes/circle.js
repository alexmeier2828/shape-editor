class Circle {
  constructor() {
    this.radius = 40;
    this.offset = [0, 0];
    this.scale = [1, 1];
    this.rotate = 0;
  }
  draw(ctx){
    let squareScale = [this.scale[0] + this.scale[1], this.scale[0] + this.scale[1]]
    transform(() => this._draw(ctx), ctx, this.offset, this.rotate, squareScale);
  }
  _draw(ctx){
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 2* Math.PI, false)
    ctx.fill();
  }

  inside(x, y){
    let x1 = x - this.offset[0];
    let y1 = y - this.offset[1];
    console.log(((x1**2 + y1**2)**(0.5)))
    return ((x1**2 + y1**2)**(0.5) <= this.radius);
  }
}
