// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  let minmax = [];
  for (let i = 0; i <= arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  for (let i = 0; i <= arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  minmax.push(min, max);
  return minmax;
}
const a = minMax([1, 4, 0, 3, 9]);
console.log(
  a,
  "function that takes an array of numbers and return both the minimum and maximum numbers, in that order"
);
