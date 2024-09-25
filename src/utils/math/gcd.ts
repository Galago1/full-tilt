/**
 * the greatest common divisor of two numbers
 * @param x
 * @param y
 * @returns
 */
const gcd = (x: number, y: number): number => {
  x = Math.abs(x);
  y = Math.abs(y);
  // break once y gets to 0
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
};

export default gcd;
