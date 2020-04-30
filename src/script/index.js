/*
Author: Alex Meier
Date: April, 2020
Computer Graphics I -- Term Project
*/

var canvas = document.getElementById('shape-canvas');
canvas.width = 500;
canvas.height = 500;
var ctx = canvas.getContext('2d');

var buffer = new CanvasBuffer(canvas);
var selected = null;

//main function
function main() {
  console.log(`${canvas.height}, ${canvas.width}`)
}


main();
