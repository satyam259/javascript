// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}
const thirdedge = nextEdge(3, 4);
console.log(
  thirdedge,
  "function that finds the maximum range of a triangle's third edge, where the side lengths are all integers."
);
