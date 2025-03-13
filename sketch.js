let densitySlider, sizeSlider, speedSlider, chaosSlider;
let shapeSelect;
let textInput; // Text input field
let inputText = ""; // Store the user's input text
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
  // Add space character
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
let showInputText = false; // Flag to show input text

let controlDiv;
let shapeSelectDiv;
let textInputDiv; // Div for text input

function windowScrolled() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const controlPanels = document.querySelectorAll('#control-panel, #shape-select-panel, #text-input-panel');
  
  // Show panels only when scrolled past the landing page
  if (scrollY >= windowHeight * 0.7) {
    controlPanels.forEach(panel => {
      panel.style.opacity = '1';
      panel.style.pointerEvents = 'auto'; // Enable interaction
    });
  } else {
    controlPanels.forEach(panel => {
      panel.style.opacity = '0';
      panel.style.pointerEvents = 'none'; // Disable interaction when hidden
    });
  }
}

// Call the function immediately on page load to set initial state
window.addEventListener('load', windowScrolled);

// Add scroll event listener
window.addEventListener('scroll', windowScrolled);

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noiseDetail(4, 0.5);
  
  gridWidth = 400;
  gridHeight = 600;
  
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
  
  textInput = createInput('');
  textInput.parent(textInputDiv);
  textInput.input(textInputChanged);
  textInput.attribute('maxlength', '20'); // Limit text length
  
  // Add a button to toggle text display mode
  const showTextBtn = createButton('');
  showTextBtn.parent(textInputDiv);
  showTextBtn.style('margin-left', '10px');
  showTextBtn.mousePressed(toggleTextDisplay);
  
  // Create a table structure for the slider controls
  const table = createElement('table');
  table.parent(controlDiv);
  
  // Add each control as a row in the table
  addControlRow(table, 'Speed', speedSlider = createSlider(0, 0.1, 0.01, 0.001));
  addControlRow(table, 'Quantity', densitySlider = createSlider(5, 50, 10, 1));
  addControlRow(table, 'Size', sizeSlider = createSlider(0.1, 1.5, 0.5, 0.01));
  addControlRow(table, 'Chaos', chaosSlider = createSlider(0, 5, 0, 0.1));
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function textInputChanged() {
  inputText = textInput.value().toUpperCase(); // Convert to uppercase
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

function drawAllLetters(rectDensity, sizeVariation, chaosLevel) {
  const letterKeys = Object.keys(shapes).filter(key => key !== " "); // Skip space
  const lettersPerRow = 7;
  const numRows = 4;
  
  const scaleFactor = 0.2;
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
  
  // Calculate the scale based on text length
  let scaleFactor = 0.2;
  if (inputText.length <= 5) {
    scaleFactor = 0.5;
  } else if (inputText.length <= 10) {
    scaleFactor = 0.3;
  } else {
    scaleFactor = 0.2;
  }
  
  const letterWidth = gridWidth * scaleFactor;
  const letterHeight = gridHeight * scaleFactor;
  const spacing = letterWidth * 0.3; // Space between letters
  
  // Calculate total width of the text
  const totalWidth = (letterWidth * inputText.length) + (spacing * (inputText.length - 1));
  
  // Center the text horizontally
  let startX = (width - totalWidth) / 2;
  const startY = (height - letterHeight) / 2;
  
  // Adjust density for text display
  let adjustedDensity = rectDensity * 0.6;
  
  // Draw each letter in the input text
  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i];
    // Check if the character exists in our shapes
    if (shapes[char]) {
      drawLetterAtPosition(char, startX, startY, letterWidth, letterHeight, adjustedDensity, sizeVariation, chaosLevel);
    } else if (char === ' ') {
      // Handle space character
      // Just move to the next position
    } else {
      // For unknown characters, you could draw a default shape or skip
      // Here we'll draw the 'A' shape as a fallback
      drawLetterAtPosition('A', startX, startY, letterWidth, letterHeight, adjustedDensity, sizeVariation, chaosLevel);
    }
    
    // Move to the next letter position
    startX += letterWidth + spacing;
  }
}

function drawLetterAtPosition(letterKey, offsetX, offsetY, letterWidth, letterHeight, rectDensity, sizeVariation, chaosLevel) {
  const activeShape = shapes[letterKey];
  const rows = activeShape.length;      
  const cols = activeShape[0].length;   
  
  // Calculate cell dimensions based on the grid size
  const cellWidth = letterWidth / cols;
  const cellHeight = letterHeight / rows;
  
  let noiseSeedOffset = noiseOffset;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (activeShape[row][col] === 1) {
        let numRects = Math.floor(map(noise(col * noiseFrequency, row * noiseFrequency, noiseSeedOffset), 0, 1, rectDensity - 2, rectDensity));
        numRects = max(1, numRects); // Ensure at least 1 rectangle
        
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
