function digitcount(num) {
  let count = 0;
  while (num !== 0) {
    count += num % 10;
    num = Math.floor(num / 10);
    console.log(num, "nume");
  }
  return count;
}
console.log(digitcount(7484), "calculate sum of digits");
