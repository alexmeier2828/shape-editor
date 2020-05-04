class Curve {
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
    if(this.points.length > 1 && this.points.length <=2){
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
    } else if (this.points.length > 2) {
      let startX = this.points[0][0];
      let startY = this.points[0][1];
      let endX = this.points[1][0];
      let endY = this.points[1][1];
      let controlX = this.points[2][0];
      let controlY = this.points[2][1];
      ctx.beginPath();
      ctx.bezierCurveTo(startX, startY, controlX, controlY, endX, endY);
      ctx.stroke();
    }
  }

  inside(x, y){
    if(this.points.length < 2){
      return false;
    }
    let x0 = this.points[0][0];
    let y0 = this.points[0][1];
    let x1 = this.points[1][0];
    let y1 = this.points[1][1];
    let distanceX = (x - this.offset[0]) - x0;
    let distanceY = (y - this.offset[1]) - y0;

    if((distanceX + distanceY)/2 < 20){
      return true;
    }

    distanceX = (x - this.offset[0]) - x1;
    distanceY = (y - this.offset[1]) - y1;

    if((distanceX + distanceY)/2 < 20){
      return true;
    }
    return false
  }
}
