//count digit
// console.log(digitcount(58958)); 5

function digitcount(num) {
  var count = 0;
  while (num != 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log(digitcount(7484), "digit count in one word");
