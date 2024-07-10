// This challenge will help you interpret mathematical relationships both algebraically and geometrically.

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

function matchHouses(step) {
  if (step === 0) {
    return 0;
  }
  return step * 5 + 1;
}
const b = matchHouses(0);
console.log(b);
