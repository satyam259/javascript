// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
  let arr1max = Math.max(...arr1);
  let arr2max = Math.max(...arr2);
  let arr1min = Math.min(...arr1);
  let arr2min = Math.min(...arr2);
  if (arr1max < arr2max && arr1min > arr2min) {
    return true;
  } else {
    return false;
  }
}
const a = canNest([1, 2, 3, 5], [0, 4]);
console.log(a);
