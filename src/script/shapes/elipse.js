class Elipse {
  constructor() {
    this.radiusX = 40;
    this.radiusY = 20;
    this.offset = [0, 0];
    this.scale = [1, 1];
    this.rotate = 0;
  }
  draw(ctx){
    transform(() => this._draw(ctx), ctx, this.offset, this.rotate, this.scale);
  }
  _draw(ctx){
    ctx.beginPath();
    ctx.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, 2* Math.PI, false)
    ctx.fill();
  }

  inside(x, y){
    let x1 = x - this.offset[0];
    let y1 = y - this.offset[1];
    console.log(((x1**2 + y1**2)**(0.5)))
    return ((x1**2 + y1**2)**(0.5) <= Math.max(this.radiusY, this.radiusX));
  }
}
