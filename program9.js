// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

function largestSwap(num) {
  let firstnum = num.toString().split("").reverse().join("");
  if (firstnum > num) {
    return false;
  } else {
    return true;
  }
}
const swap = largestSwap(14);
console.log(swap);
