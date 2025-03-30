function largest(arr) {
  var max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largest([1, 2, 5, 3, 4]), "largest number in array");
