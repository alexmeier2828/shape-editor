/*
Author: Alex Meier
Date: April, 2020
Computer Graphics I -- Term Project
*/

var canvas = document.getElementById('shape-canvas');
var ctx = canvas.getContext('2d');


//main function
function main() {
    buffer = new CanvasBuffer();
    rect = new Rectangle(50, 50, 50, 40);
    buffer.addShape(rect);
    buffer.drawAll(ctx);
}


main();
