class MultiLine {
  constructor() {
    this.points = [[0,0]];
    this.selectedPoint = 0;
    this.offset = [0, 0];
    this.scale = [1, 1];
    this.rotate = 0;
  }
  addPoint(x, y){
    this.points.push([x, y]);
    this.selectedPoint++;
  }
  movePoint(x, y) {
    if(this.selectedPoint > 0){
      this.points[this.selectedPoint] = [x - this.offset[0], y - this.offset[1]];
    }else{
      this.offset = [x, y];
    }

  }
  deleteTail() {
    this.points = this.points.slice(0, this.points.length - 1);
    console.log(`deletedTail ${this.points.length}`);
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
      ctx.stroke();
    }
  }

  inside(x, y){
    if(this.points.length == 0){
      return false;
    }
    let x0 = this.points[0][0];
    let y0 = this.points[0][1];
    let x1 = this.points[this.points.length-1][0];
    let y1 = this.points[this.points.length-1][1];
    return pointInRectangle(x0, y0, x1, y1, (x - this.offset[0])/this.scale[0]  ,(y - this.offset[1])/this.scale[1])
  }
}
