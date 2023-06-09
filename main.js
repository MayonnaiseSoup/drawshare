// script.js

// Get the canvas element from the DOM
const canvas = document.getElementById("canvas");

// Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Initialize drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Get the scaling factor
const scaleFactor = window.devicePixelRatio;

// Set the canvas size
canvas.width = 1400 //* scaleFactor;
canvas.height = 750 //* scaleFactor;

// Scale the context to match the scaling factor
//ctx.scale(scaleFactor, scaleFactor);


// Event listeners for mouse actions
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Function to start drawing
function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to draw on the canvas
function draw(e) {
  if (!isDrawing) return; // Exit if not in drawing state
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false;
}
