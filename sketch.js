let densitySlider, sizeSlider, speedSlider, chaosSlider;
let shapeSelect;
let textInput; // Text input field
let inputText = "PERLIN SANS"; // Store the user's input text
let noiseOffset = 0;
let gridWidth, gridHeight;
let padding = 100;
const noiseFrequency = 0.7;

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

  " ": [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ],
};

let currentShape = 'A';
let showAllLetters = false;
let showInputText = true; // Flag to show input text

let controlDiv;
let shapeSelectDiv;
let textInputDiv; // Div for text input

let scrollX = 0;




function setup() {
  const fullWidth = window.innerWidth * 5;
  createCanvas(fullWidth, windowHeight).parent('textcontainer').style('pointer-evnts', 'none');
  const scrollCenter = (fullWidth/2) - (window.innerWidth/2);
  window.scrollTo({left: scrollCenter, top:0});




  frameRate(30);
  noiseDetail(4, 0.5);
  
  gridWidth = 500;
  gridHeight = 730;
  
  // Create a container div for slider controls
  controlDiv = createDiv('');
  controlDiv.id('control-panel');
  
  // Create a separate div for shape selector
  shapeSelectDiv = createDiv('');
  shapeSelectDiv.id('shape-select-panel');
  
  // Create a div for text input (now separate from shape selector)
  textInputDiv = createDiv('');
  textInputDiv.id('text-input-panel');
  
  // Create the shape selector in its own div
  const shapeLabel = createElement('span', 'Select Letter:');
  shapeLabel.parent(shapeSelectDiv);
  shapeLabel.style('margin-right', '10px');
  
  shapeSelect = createSelect();
  shapeSelect.parent(shapeSelectDiv);
  shapeSelect.option('All'); // Add "All" option
  for (const shape in shapes) {
    if (shape !== " ") { // Don't add space to dropdown
      shapeSelect.option(shape);
    }
  }
  shapeSelect.changed(shapeSelectChanged);
  
  // Create text input field (now always visible)
  const textLabel = createElement('span', 'Enter Text:');
  textLabel.parent(textInputDiv);
  textLabel.style('margin-right', '10px');
    
  textInput = createInput('PERLIN SANS');
  textInput.parent(textInputDiv);
  textInput.input(textInputChanged);

  const table = createElement('table');
  table.parent(controlDiv);
  
  addControlRow(table, 'Speed', speedSlider = createSlider(0, 0.1, 0.01, 0.001));
  addControlRow(table, 'Quantity', densitySlider = createSlider(3, 20, 6, 0.1));
  addControlRow(table, 'Size', sizeSlider = createSlider(0.1, 2.3 , 0.5, 0.01));
  addControlRow(table, 'Chaos', chaosSlider = createSlider(0, 50, 50, 0.01));
}

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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function textInputChanged() {
  inputText = textInput.value().toUpperCase();
  
  // Automatically show text when typing
  if (inputText.length > 0) {
    showInputText = true;
    showAllLetters = false;
  } else {
    // If text input is empty, revert to previous selection
    // [logic to display either all letters or a single letter]
  }
}

function toggleTextDisplay() {
  if (inputText.length > 0) {
    showInputText = !showInputText;
    if (showInputText) {
      showAllLetters = false;
    }
  }
}

function shapeSelectChanged() {
  let value = shapeSelect.value();
  if (value === 'All') {
    showAllLetters = true;
    showInputText = false;
  } else {
    showAllLetters = false;
    currentShape = value;
  }
}

// Mouse event handlers for scrolling



// Add wheel (mousewheel) event for scrolling with mousewheel
// function mouseWheel(event) {
//   if (showInputText && inputText.length > 0) {
//     // Adjust scroll speed as needed
//     scrollX -= event.delta;
    
//     // Calculate constraints
//     const scaleFactor = 1;
//     const letterWidth = gridWidth * scaleFactor;
//     const spacing = letterWidth * 0.3;
//     const totalWidth = (letterWidth * inputText.length) + (spacing * (inputText.length - 1));
    
//     // Constrain scrolling to prevent excessive scrolling
//     if (totalWidth <= width) {
//       // If content fits, center it
//       scrollX = 0;
//     } else {
//       // If content doesn't fit, limit scrolling
//       const minScroll = -(totalWidth - width);
//       if (scrollX < minScroll) scrollX = minScroll;
//       if (scrollX > 0) scrollX = 0;
//     }
    
//     return false; // Prevent default behavior
//   }
// }

function draw() {
  background(255);
  
  let noiseSpeed = speedSlider.value();
  let rectDensity = densitySlider.value();
  let sizeVariation = sizeSlider.value();
  let chaosLevel = chaosSlider.value();
  
  // Update noise offset based on speed
  noiseOffset += noiseSpeed;
  
  if (showInputText && inputText.length > 0) {
    drawInputText(rectDensity, sizeVariation, chaosLevel);
  } else if (showAllLetters) {
    drawAllLetters(rectDensity, sizeVariation, chaosLevel);
  } else {
    drawSingleLetter(currentShape, rectDensity, sizeVariation, chaosLevel);
  }
}

function drawSingleLetter(letterKey, rectDensity, sizeVariation, chaosLevel) {
  const activeShape = shapes[letterKey];
  const rows = activeShape.length;      
  const cols = activeShape[0].length;   
  
  // Calculate cell dimensions based on the grid size, not the canvas size
  const cellWidth = gridWidth / cols;
  const cellHeight = gridHeight / rows;
  
  // Calculate offset to center the grid in the canvas
  const offsetX = (width - gridWidth) / 2;
  const offsetY = (height - gridHeight) / 2;
  
  let noiseSeedOffset = noiseOffset;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (activeShape[row][col] === 1) {
        let numRects = Math.floor(map(noise(col * noiseFrequency, row * noiseFrequency, noiseSeedOffset), 0, 1, rectDensity - 5, rectDensity));
        
        for (let i = 0; i < numRects; i++) {
          // Apply chaos level to position offsets
          let chaosXFactor = map(noise(col * noiseFrequency * 2, row * noiseFrequency * 2, i + noiseSeedOffset), 0, 1, -chaosLevel, chaosLevel);
          let chaosYFactor = map(noise(row * noiseFrequency * 2, col * noiseFrequency * 2, i + noiseSeedOffset), 0, 1, -chaosLevel, chaosLevel);
          
          // Calculate base position within the cell
          let xOffset = map(noise(col * noiseFrequency, row * noiseFrequency, i + noiseSeedOffset), 0, 1, 0, cellWidth);
          let yOffset = map(noise(row * noiseFrequency, col * noiseFrequency, i + noiseSeedOffset), 0, 1, 0, cellHeight);
          
          // Apply chaos to position
          let x = offsetX + col * cellWidth + xOffset + (chaosXFactor * cellWidth);
          let y = offsetY + row * cellHeight + yOffset + (chaosYFactor * cellHeight);
          
     
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

function drawAllLetters(rectDensity, sizeVariation, chaosLevel) {
  const letterKeys = Object.keys(shapes).filter(key => key !== " "); 
  const lettersPerRow = 10;
  const numRows = 4;
  
  const scaleFactor = 0.3;
  const smallGridWidth = gridWidth * scaleFactor;
  const smallGridHeight = gridHeight * scaleFactor;
  
  const spacing = 20;
  const totalWidth = (smallGridWidth * lettersPerRow) + (spacing * (lettersPerRow - 1));
  const totalHeight = (smallGridHeight * numRows) + (spacing * (numRows - 1));
  
  let startX = (width - totalWidth) / 2;
  let startY = (height - totalHeight) / 2;
  
  let smallerDensity = rectDensity * 0.4;
  
  for (let i = 0; i < letterKeys.length; i++) {
    const letterKey = letterKeys[i];
    const row = Math.floor(i / lettersPerRow);
    const col = i % lettersPerRow;
    
    const x = startX + col * (smallGridWidth + spacing);
    const y = startY + row * (smallGridHeight + spacing);
    
    drawLetterAtPosition(letterKey, x, y, smallGridWidth, smallGridHeight, smallerDensity, sizeVariation, chaosLevel);
  }
}

function drawInputText(rectDensity, sizeVariation, chaosLevel) {
  if (inputText.length === 0) return;
  
  // Use a constant scale factor instead of adjusting based on length
  const scaleFactor = 1;
  
  const letterWidth = gridWidth * scaleFactor;
  const letterHeight = gridHeight * scaleFactor;
  const spacing = letterWidth * 0.3; 
  
  // Calculate starting position from left side of canvas
  // We'll keep this centered vertically but start from a fixed position horizontally
  const startX = (width / 2) - ((letterWidth * inputText.length + spacing * (inputText.length - 1)) / 2);
  const startY = (height - letterHeight) / 2;
  
  // Adjust density for the smaller letters
  let adjustedDensity = rectDensity * 0.6;
  
  // Draw each character
  let currentX = startX;
  
  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i];
    
    if (shapes[char]) {
      drawLetterAtPosition(char, currentX, startY, letterWidth, letterHeight, adjustedDensity, sizeVariation, chaosLevel);
    } else if (char === ' ') {
      // Space - just advance position
    } else {
      // Unknown character - use 'A' as fallback
      drawLetterAtPosition('A', currentX, startY, letterWidth, letterHeight, adjustedDensity, sizeVariation, chaosLevel);
    }
    
    currentX += letterWidth + spacing;
  }
}

function drawLetterAtPosition(letterKey, offsetX, offsetY, letterWidth, letterHeight, rectDensity, sizeVariation, chaosLevel) {
  const activeShape = shapes[letterKey];
  const rows = activeShape.length;      
  const cols = activeShape[0].length;   

  const cellWidth = letterWidth / cols;
  const cellHeight = letterHeight / rows;
  
  let noiseSeedOffset = noiseOffset;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (activeShape[row][col] === 1) {
        let numRects = Math.floor(map(noise(col * noiseFrequency, row * noiseFrequency, noiseSeedOffset), 0, 1, rectDensity - 2, rectDensity));
        numRects = max(1, numRects); 
        
        for (let i = 0; i < numRects; i++) {
          // Apply chaos level to position offsets
          let chaosXFactor = map(noise(col * noiseFrequency * 2, row * noiseFrequency * 2, i + noiseSeedOffset), 0, 1, -chaosLevel, chaosLevel);
          let chaosYFactor = map(noise(row * noiseFrequency * 2, col * noiseFrequency * 2, i + noiseSeedOffset), 0, 1, -chaosLevel, chaosLevel);
          
          // Calculate base position within the cell
          let xOffset = map(noise(col * noiseFrequency, row * noiseFrequency, i + noiseSeedOffset), 0, 1, 0, cellWidth);
          let yOffset = map(noise(row * noiseFrequency, col * noiseFrequency, i + noiseSeedOffset), 0, 1, 0, cellHeight);
          
          // Apply chaos to position
          let x = offsetX + col * cellWidth + xOffset + (chaosXFactor * cellWidth);
          let y = offsetY + row * cellHeight + yOffset + (chaosYFactor * cellHeight);
          
          // Size calculations - smaller sizes for grid view
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
