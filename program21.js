function countchar(a) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    let data = a[i];
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[j] == data) {
        count++;
      }
    }
    if (!obj[count]) {
      obj[data] = count;
    }
  }
  console.log(obj, "charcount in word");
  return obj;
}
countchar("javascript");
