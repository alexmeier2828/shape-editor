class Polygon{
  constructor(vertices) {
    this.radius = 40;
    this.points = generateRegularPolygon(vertices, this.radius);
    this.selectedPoint = 0;
    this.offset = [0, 0];
    this.scale = [1, 1];
    this.rotate = 0;
  }

  draw(ctx){
    transform(() => this._draw(ctx), ctx, this.offset, this.rotate, this.scale);
  }
  _draw(ctx){
    if(this.points.length > 1){
      let x = this.points[0][0];
      let y = this.points[0][1];
      ctx.beginPath();
      ctx.moveTo(x, y);
      for(let i = 1; i < this.points.length; i++){
        x = this.points[i][0];
        y = this.points[i][1];
        ctx.lineTo(x, y);
      }
      ctx.lineTo(this.points[0][0], this.points[0][1]);
      ctx.fill();
    }
  }

  inside(x, y){
    let x1 = x - this.offset[0];
    let y1 = y - this.offset[1];
    console.log(((x1**2 + y1**2)**(0.5)))
    return ((x1**2 + y1**2)**(0.5) <= this.radius);
  }
}
