function a(value) {
  for (let i = 1; i <= value; i++) {
    str = "";
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    console.log(str, "number patterns like stars");
  }
  return;
}
a(5);
