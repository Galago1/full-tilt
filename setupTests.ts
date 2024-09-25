// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

// jest.setup.js

// Mock for canvas getContext
(HTMLCanvasElement.prototype as any).getContext = jest.fn(() => ({
  // Add any specific functions your tests might call on the canvas context
  // For example:
  fillRect: () => {},
  clearRect: () => {},
  getImageData: (x, y, w, h) => ({
    data: new Array(w * h * 4)
  }),
  putImageData: () => {},
  createImageData: () => ({}),
  setTransform: () => {},
  drawImage: () => {},
  save: () => {},
  fillText: () => {},
  restore: () => {},
  beginPath: () => {},
  moveTo: () => {},
  lineTo: () => {},
  closePath: () => {},
  stroke: () => {},
  translate: () => {},
  scale: () => {},
  rotate: () => {},
  arc: () => {},
  fill: () => {},
  measureText: () => ({ width: 0 }),
  transform: () => {},
  rect: () => {},
  clip: () => {}
}));

// Mock any other items here as needed
