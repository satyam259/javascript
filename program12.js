var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];

// function deleteoccurenace(arr) {
//   let b = arr.length;
//   var a = [];
//   for (let i = 0; i < b; i++) {
//     let count = 0;
//     console.log(arr[i], "i");
//     for (let j = 0; j < b; j++) {
//       console.log(arr[j], "j");
//       if (arr[j] == arr[i]) {
//         count++;
//       }
//     }
//     if (count == 1) {
//       a.push(arr[i]);
//     }
//   }
//   return a;
// }

// console.log(deleteoccurenace(arr));

function deleteoccurenace(arr, el) {
  let b = arr.length;
  var a = [];
  for (let i = 0; i < b; i++) {
    if (arr[i] !== el) {
      a.push(arr[i]);
    }
  }
  return a;
}

console.log(deleteoccurenace(arr, 56), "delete duplicates");
