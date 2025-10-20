let densitySlider, sizeSlider, speedSlider, chaosSlider, zoomSlider;
let shapeSelect;
let textInput; 
let inputText = "PERLIN SANS"; 
let noiseOffset = 0;
let gridWidth, gridHeight;
let padding = 100;
const noiseFrequency = 0.7;
let darkMode = false;
let themeToggle;

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
  1: [
    [0,0,1,0,0],
    [0,1,1,0,0],
    [1,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0]
  ],
  2: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1]
  ],
  3: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,1,0],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  4: [
    [0,1,0,0,1],
    [0,1,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [0,0,0,0,1]
  ],
  5: [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,1,1,1,0]
  ],
  6: [
    [0,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]
  ],
  7: [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0]
  ],
  8: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  9: [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,1,1,1,0]
  ],
  ",": [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0]
  ],
  ".": [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,0,0,0,0]
  ],
  ";": [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0]
  ],
  ":": [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,0,0,0,0]
  ],
  "!": [
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [0,0,0,0,0],
    [1,0,0,0,0]
  ],
  "?": [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,0,0,0,1],
    [0,0,1,1,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,1,0,0]
  ],
  "(": [
    [0,1,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [0,1,0,0,0]
  ],
  ")": [
    [0,0,0,1,0],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [0,0,0,1,0]
  ],
  "-": [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ],
  "=": [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,1,1,1,1],
    [0,0,0,0,0],
    [1,1,1,1,1],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ],
  "+": [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,1,1,1,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
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
let showAllLetters = true;
let showInputText = false;

let controlDiv;
let shapeSelectDiv;
let textInputDiv;
let zoomControlDiv;
let themeToggleDiv;

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
  
  // Create a div for text input
  textInputDiv = createDiv('');
  textInputDiv.id('text-input-panel');
  
  // Create a div for zoom controls
  zoomControlDiv = createDiv('');
  zoomControlDiv.id('zoom-control-panel');
  
  // Create a div for theme toggle
  themeToggleDiv = createDiv('');
  themeToggleDiv.id('theme-toggle-panel');
  
  // Create the shape selector in its own div
  const shapeLabel = createElement('span', 'Select Letter:');
  shapeLabel.parent(shapeSelectDiv);
  shapeLabel.style('margin-right', '10px');
  
  shapeSelect = createSelect();
  shapeSelect.parent(shapeSelectDiv);
  shapeSelect.option('All');
  for (const shape in shapes) {
    if (shape !== " ") {
      shapeSelect.option(shape);
    }
  }
  shapeSelect.selected('All');
  shapeSelect.changed(shapeSelectChanged);
  
  // Set initial state to show all letters
  showAllLetters = false;
  showInputText = true;
  
  // Create text input field
  const textLabel = createElement('span', 'Enter Text:');
  textLabel.parent(textInputDiv);
  textLabel.style('margin-right', '10px');
    
  textInput = createInput('PERLIN SANS');
  textInput.parent(textInputDiv);
  textInput.input(textInputChanged);

  // Create zoom controls
  const zoomLabel = createElement('span', 'Zoom:');
  zoomLabel.parent(zoomControlDiv);
  zoomLabel.style('margin-right', '10px');
  
  zoomSlider = createSlider(0.1, 1, 0.5, 0.05);
  zoomSlider.parent(zoomControlDiv);
  
  // Create theme toggle
  const themeLabel = createElement('span', 'Theme:');
  themeLabel.parent(themeToggleDiv);
  themeLabel.style('margin-right', '10px');
  
  themeToggle = createCheckbox('Dark', false);
  themeToggle.parent(themeToggleDiv);
  themeToggle.changed(toggleTheme);

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
  
  if (inputText.length > 0) {
    showInputText = true;
    showAllLetters = false;
  }
}

function shapeSelectChanged() {
  let value = shapeSelect.value();
  if (value === 'All') {
    showAllLetters = true;
    showInputText = false;
  } else {
    showAllLetters = false;
    showInputText = false;
    currentShape = value;
  }
}

function toggleTheme() {
  darkMode = themeToggle.checked();
}

function draw() {
  // Set background and fill colors based on theme
  if (darkMode) {
    background(0);
  } else {
    background(255);
  }
  
  let noiseSpeed = speedSlider.value();
  let rectDensity = densitySlider.value();
  let sizeVariation = sizeSlider.value();
  let chaosLevel = chaosSlider.value();
  
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
  
  const cellWidth = gridWidth / cols;
  const cellHeight = gridHeight / rows;
  
  const offsetX = (width - gridWidth) / 2;
  const offsetY = (height - gridHeight) / 2;
  
  let noiseSeedOffset = noiseOffset;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (activeShape[row][col] === 1) {
        let numRects = Math.floor(map(noise(col * noiseFrequency, row * noiseFrequency, noiseSeedOffset), 0, 1, rectDensity - 5, rectDensity));
        
        for (let i = 0; i < numRects; i++) {
          let chaosXFactor = map(noise(col * noiseFrequency * 2, row * noiseFrequency * 2, i + noiseSeedOffset), 0, 1, -chaosLevel, chaosLevel);
          let chaosYFactor = map(noise(row * noiseFrequency * 2, col * noiseFrequency * 2, i + noiseSeedOffset), 0, 1, -chaosLevel, chaosLevel);
          
          let xOffset = map(noise(col * noiseFrequency, row * noiseFrequency, i + noiseSeedOffset), 0, 1, 0, cellWidth);
          let yOffset = map(noise(row * noiseFrequency, col * noiseFrequency, i + noiseSeedOffset), 0, 1, 0, cellHeight);
          
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
          fill(darkMode ? 255 : 0);
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
  const lettersPerRow = 9;
  const numRows = 3;
  
  const scaleFactor = 0.15;
  const smallGridWidth = gridWidth * scaleFactor;
  const smallGridHeight = gridHeight * scaleFactor;
  
  const spacing = 30;
  const totalWidth = (smallGridWidth * lettersPerRow) + (spacing * (lettersPerRow - 1));
  const totalHeight = (smallGridHeight * numRows) + (spacing * (numRows - 1));
  
  let startX = (width - totalWidth) / 2;
  let startY = (height - totalHeight) / 2;
  
  let smallerDensity = rectDensity * 0.4;
  
  for (let i = 0; i < letterKeys.length; i++) {
    const letterKey = letterKeys[i];
    const row = Math.floor(i / lettersPerRow);
    const col = i % lettersPerRow;
    
    let rowStartX = startX;
    if (row === 2) {
      const lettersInLastRow = letterKeys.length - (lettersPerRow * 2);
      const lastRowWidth = (smallGridWidth * lettersInLastRow) + (spacing * (lettersInLastRow - 1));
      rowStartX = (width - lastRowWidth) / 2;
    }
    
    const x = rowStartX + col * (smallGridWidth + spacing);
    const y = startY + row * (smallGridHeight + spacing);
    
    drawLetterAtPosition(letterKey, x, y, smallGridWidth, smallGridHeight, smallerDensity, sizeVariation, chaosLevel);
  }
}

function drawInputText(rectDensity, sizeVariation, chaosLevel) {
  if (inputText.length === 0) return;
  
  // Use zoom slider value
  const scaleFactor = zoomSlider.value();
  
  const letterWidth = gridWidth * scaleFactor;
  const letterHeight = gridHeight * scaleFactor;
  const spacing = letterWidth * 0.3; 
  
  const startX = (width / 2) - ((letterWidth * inputText.length + spacing * (inputText.length - 1)) / 2);
  const startY = (height - letterHeight) / 2;
  
  let adjustedDensity = rectDensity * 0.6;
  
  let currentX = startX;
  
  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i];
    
    if (shapes[char]) {
      drawLetterAtPosition(char, currentX, startY, letterWidth, letterHeight, adjustedDensity, sizeVariation, chaosLevel);
    } else if (char === ' ') {
      // Space - just advance position
    } else {
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
          let chaosXFactor = map(noise(col * noiseFrequency * 2, row * noiseFrequency * 2, i + noiseSeedOffset), 0, 1, -chaosLevel, chaosLevel);
          let chaosYFactor = map(noise(row * noiseFrequency * 2, col * noiseFrequency * 2, i + noiseSeedOffset), 0, 1, -chaosLevel, chaosLevel);
          
          let xOffset = map(noise(col * noiseFrequency, row * noiseFrequency, i + noiseSeedOffset), 0, 1, 0, cellWidth);
          let yOffset = map(noise(row * noiseFrequency, col * noiseFrequency, i + noiseSeedOffset), 0, 1, 0, cellHeight);
          
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
          fill(darkMode ? 255 : 0);
          rectMode(CENTER);
          rect(0, 0, rectWidth, rectHeight);
          pop();
        }
      }
    }
  }
}
