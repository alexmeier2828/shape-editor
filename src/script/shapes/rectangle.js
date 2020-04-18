const util = require("./util");
class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.offset = [0, 0];
    this.scale = [1, 1];
    this.rotate = 0;
  }
  draw(ctx){
    util.transform(this._draw(ctx), ctx, this.offset, this.rotate);
  }
  _draw(ctx){
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
