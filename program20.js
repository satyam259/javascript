function fibonacci(n) {
  var n1 = 0;
  var n2 = 1;
  var count = 2;
  var n3;
  console.log(n1, n2);
  while (count < n) {
    n3 = n1 + n2;
    if (n3 == n) {
      console.log(`element is ${n} is present at index ${count}`);
      //   return;s
    }
    console.log(n3, "fibonaci prints and find index both");
    n1 = n2;
    n2 = n3;
    count++;
  }
}
fibonacci(8);
