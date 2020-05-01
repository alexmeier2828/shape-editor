class Line {
  constructor(x0, y0, x1, y1) {
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.offset = [0, 0];
    this.scale = [1, 1];
    this.rotate = 0;
  }
  draw(ctx){
    transform(() => this._draw(ctx), ctx, this.offset, this.rotate, this.scale);
  }
  _draw(ctx){
    ctx.beginPath();
    ctx.moveTo(this.x0, this.y0);
    ctx.lineTo(this.x1, this.y1);
    ctx.stroke();
  }

  inside(x, y){
    let x0 = this.x0;
    let y0 = this.y0;
    let x1 = this.x1;
    let y1 = this.y1;
    return pointInRectangle(x0, y0, x1, y1, (x - this.offset[0])/this.scale[0]  ,(y - this.offset[1])/this.scale[1])
  }
}
