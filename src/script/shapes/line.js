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
    transform(() => this._draw(ctx), ctx, this.offset, this.rotate);
  }
  _draw(ctx){
    ctx.beginPath();
    ctx.moveTo(this.x0, this.y0);
    ctx.lineTo(this.x1, this.y1);
    ctx.stroke();
  }
}
