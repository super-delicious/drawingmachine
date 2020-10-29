let array = [];
let button1;
//let button2;
let slider;
let r = 100;
let g = 100;
let b = 100;
let noiseX = 0.0;
let strokeWidth = 5;
let colorPicker;

function setup() {
  //createCanvas(889, 500);
  createCanvas(windowWidth, windowHeight);
  //  background(255, 32, 54);
  drawGrid();
  //  strokeWeight(r, g, b);

  //  button1 = createButton("stroke weight");
  //button2 = createButton("stroke color");

  //  button1.mousePressed(increaseStrokeWeight);
  //button2.mousePressed(changeStrokeColor);
  createP("stroke weight");
  slider = createSlider(0, 30, 6);
  // color picker
  createP("Color Picker");
  createCanvas(50, 50);
  colorPicker = createColorPicker('#f5f12f');
  colorPicker.position(230, 435);

}

function draw() {

  background(colorPicker.color());

  background(255, 32, 54, 20);
  strokeWeight(strokeWidth);

  noiseOffset += 0.03;
  strokeWidth = noise(noiseOffset) * 80;

  let lineWidth = slider.value();
  if (mouseIsPressed === true) {
    stroke(map(mouseX, 0, 600, 0, 255, true))
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    // background(0);
    line(width - mouseX, height - mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);

    //array.push([mouseX, mouseY]);
  }
}



function keyTyped() {
  //  console.log(`key ${key} is being typed`)
  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    //display imgae
    //console.log(array[0]);
    //console.log(array[0][1]);
    background(25);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  } else if (key === 'c') {
    // clear the canvas
    clear();
  } else if (key === 'r') { // change color value
    r += 5;
  } else if (key === 'g') {
    g += 5;
  } else if (key === 'b') {
    b += 5;
  } else if (key === 't') {
    r -= 5;
  } else if (key === 'h') {
    g -= 5;
  } else if (key === 'n') {
    b -= 5;
  }

  return false;
}

function drawGrid() {
  numCells = 20;
  fillColor = 255;

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fillColor === 255) {
        fillColor = (125, 23, 68);
      } else {
        fillColor = (25, 68, 68);
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
}
