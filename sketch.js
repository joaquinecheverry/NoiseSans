let densitySlider, sizeSlider, speedSlider, chaosSlider;
let shapeSelect;
let noiseOffset = 0; // Track the noise offset separately
let gridWidth, gridHeight; // Store the grid dimensions separately from canvas dimensions
let padding = 100; // Padding around the grid
const noiseFrequency = 0.7; // Fixed noise frequency value (previously controlled by slider)

// Shape definitions with 5x7 grid
const shapes = {
  A: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1]
  ],
  B: [
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0]
  ],
  C: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  D: [
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0]
  ],
  E: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  F: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0]
  ],
  G: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,0],
    [1,0,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  H: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1]
  ],
  I: [
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0]
  ],
  J: [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  K: [
    [1,0,0,0,1],
    [1,0,0,1,0],
    [1,0,1,0,0],
    [1,1,0,0,0],
    [1,0,1,0,0],
    [1,0,0,1,0],
    [1,0,0,0,1]
  ],
  L: [
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1]
  ],
  M: [
    [1,0,0,0,1],
    [1,1,0,1,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1]
  ],
  N: [
    [1,0,0,0,1],
    [1,1,0,0,1],
    [1,0,1,0,1],
    [1,0,0,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1]
  ],
  O: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  P: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0]
  ],
  Q: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,1,0,1],
    [0,1,1,1,0],
    [0,0,1,0,0],
    [0,0,1,0,0]
  ],
  R: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1]
  ],
  S: [
    [0,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0]
  ],
  T: [
    [1,1,1,1,1],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0]
  ],
  U: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  V: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0]
  ],
  W: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,1,0,1],
    [1,1,0,1,1],
    [1,0,0,0,1]
  ],
  X: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [0,1,0,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1]
  ],
  Y: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,0]
  ],
  Z: [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [1,1,1,1,1]
  ],
};

let currentShape = 'A';

let controlDiv;


function setup() {
  // Create a canvas that fits the window size
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noiseDetail(4, 0.5);
  
  // Set fixed grid size (same as the original letterform dimensions)
  gridWidth = 400;
  gridHeight = 600;
  
  // Create a container div for all controls
  controlDiv = createDiv('');
  controlDiv.id('control-panel');
  
  // Create a table structure for better alignment
  const table = createElement('table');
  table.parent(controlDiv);
  
  // Add each control as a row in the table
  addControlRow(table, 'Noise Speed:', speedSlider = createSlider(0, 0.1, 0.01, 0.001));
  addControlRow(table, 'Rectangle Density:', densitySlider = createSlider(5, 50, 10, 1));
  addControlRow(table, 'Size Variation:', sizeSlider = createSlider(0.1, 1.5, 0.5, 0.01));
  addControlRow(table, 'Chaos Level:', chaosSlider = createSlider(0, 5, 0, 0.1));
  
  // Add shape selector in the same format
  const shapeRow = createElement('tr');
  shapeRow.parent(table);
  
  const shapeLabel = createElement('td', 'Select Shape:');
  shapeLabel.parent(shapeRow);
  
  const shapeCell = createElement('td');
  shapeCell.parent(shapeRow);
  
  shapeSelect = createSelect();
  shapeSelect.parent(shapeCell);
  for (const shape in shapes) {
    shapeSelect.option(shape);
  }
  shapeSelect.changed(shapeSelectChanged);
  
  // Set initial values
  currentShape = 'A';
}

// Helper function to add a control row to the table
function addControlRow(table, labelText, slider) {
  const row = createElement('tr');
  row.parent(table);
  
  const label = createElement('td', labelText);
  label.parent(row);
  
  const control = createElement('td');
  control.parent(row);
  slider.parent(control);
  
  return row;
}


// Helper function to create a control row with label and slider
function createControlRow(labelText, slider) {
  const row = createDiv('');
  row.parent(controlDiv);
  row.style('margin-bottom', '10px');
  row.style('display', 'flex');
  row.style('align-items', 'center');
  
  const label = createElement('span', labelText);
  label.parent(row);
  label.style('flex', '1');
  
  slider.parent(row);
  slider.style('flex', '2');
  
  return row;
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // No need to reposition controls as they're in a draggable div
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // Reposition controls when window is resized
  const controlPanelY = height - 150;
  
  let currentY = controlPanelY;
  createSpan('Noise Speed: ').position(20, currentY);
  speedSlider.position(150, currentY);
  currentY += 30;
  
  createSpan('Rectangle Density: ').position(20, currentY);
  densitySlider.position(150, currentY);
  currentY += 30;
  
  createSpan('Size Variation: ').position(20, currentY);
  sizeSlider.position(150, currentY);
  currentY += 30;
  
  createSpan('Chaos Level: ').position(20, currentY);
  chaosSlider.position(150, currentY);
  currentY += 40;
  
  createSpan('Select Shape: ').position(20, currentY);
  shapeSelect.position(150, currentY);
}

function shapeSelectChanged() {
  currentShape = shapeSelect.value();
}

function getActiveShape() {
  return shapes[currentShape];
}

function draw() {
  // Clear with white background
  background(255);
  
  let noiseSpeed = speedSlider.value();
  let rectDensity = densitySlider.value();
  let sizeVariation = sizeSlider.value();
  let chaosLevel = chaosSlider.value();
  
  // Update noise offset based on speed
  noiseOffset += noiseSpeed;
  
  const activeShape = getActiveShape();
  const rows = activeShape.length;      
  const cols = activeShape[0].length;   
  
  // Calculate cell dimensions based on the grid size, not the canvas size
  const cellWidth = gridWidth / cols;
  const cellHeight = gridHeight / rows;
  
  // Calculate offset to center the grid in the canvas
  const offsetX = (width - gridWidth) / 2;
  const offsetY = (height - gridHeight) / 2;
  
  let noiseSeedOffset = noiseOffset;
  
  // Optional: draw grid outline for debugging
  // stroke(220);
  // noFill();
  // rect(offsetX, offsetY, gridWidth, gridHeight);
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (activeShape[row][col] === 1) {
        let numRects = Math.floor(map(noise(col * noiseFrequency, row * noiseFrequency, noiseSeedOffset), 0, 1, rectDensity - 5, rectDensity));
        
        for (let i = 0; i < numRects; i++) {
          // Apply chaos level to position offsets - allowing rectangles to move outside their cells
          let chaosXFactor = map(noise(col * noiseFrequency * 2, row * noiseFrequency * 2, i + noiseSeedOffset), 0, 1, -chaosLevel, chaosLevel);
          let chaosYFactor = map(noise(row * noiseFrequency * 2, col * noiseFrequency * 2, i + noiseSeedOffset), 0, 1, -chaosLevel, chaosLevel);
          
          // Calculate base position within the cell
          let xOffset = map(noise(col * noiseFrequency, row * noiseFrequency, i + noiseSeedOffset), 0, 1, 0, cellWidth);
          let yOffset = map(noise(row * noiseFrequency, col * noiseFrequency, i + noiseSeedOffset), 0, 1, 0, cellHeight);
          
          // Apply chaos to position - allows rectangles to travel to neighboring cells
          // Include the offset to center the grid
          let x = offsetX + col * cellWidth + xOffset + (chaosXFactor * cellWidth);
          let y = offsetY + row * cellHeight + yOffset + (chaosYFactor * cellHeight);
          
          // Size calculations
          let rectWidth = map(noise(x * noiseFrequency * 0.1, y * noiseFrequency * 0.1, i + noiseSeedOffset), 0, 1, 
                             cellWidth * (sizeVariation * 0.5), 
                             cellWidth * (sizeVariation + 0.2));
          let rectHeight = map(noise(y * noiseFrequency * 0.1, x * noiseFrequency * 0.1, i + noiseSeedOffset), 0, 1, 
                              cellHeight * (sizeVariation * 0.5), 
                              cellHeight * (sizeVariation + 0.2));
          
          push();
          translate(x, y);
          noStroke();
          fill(0); // Black fill
          rectMode(CENTER);
          rect(0, 0, rectWidth, rectHeight);
          pop();
        }
      }
    }
  }
}