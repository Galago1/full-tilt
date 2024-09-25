import gcd from './gcd';

interface AspectRatio {
  x: number;
  y: number;
}

const aspectRatio = (x: number, y: number): AspectRatio => {
  const divisor = gcd(x, y);
  return { x: x === 0 ? 0 : x / divisor, y: y === 0 ? 0 : y / divisor };
};

export default aspectRatio;
