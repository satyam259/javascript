// power

function power(a, b) {
  var f = 1;
  for (let i = 1; i <= b; i++) {
    f *= a;
  }
  return f;
}
console.log(power(4, 3), "power calculate");
