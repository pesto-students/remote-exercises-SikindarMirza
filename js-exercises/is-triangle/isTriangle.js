function isTriangle() {
  const [a, b, c] = arguments;
  if (a + b > c && b + c > a && c + a > b) return true;
  return false;
}

export {
  isTriangle,
};
