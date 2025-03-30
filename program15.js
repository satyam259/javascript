// *
// **
// ***
// ****
// *****

function printstars(a) {
  for (let i = 0; i < a; i++) {
    var str = "";
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
  return a;
}
console.log(printstars(5), "print start");
