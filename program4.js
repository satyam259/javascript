// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
  const b = "something ";
  return b.concat(a);
}
const get = giveMeSomething("give me");
console.log(
  get,
  "  function that returns the string {something} joined with a space { } and the given argument a"
);

// another method

// function giveMeSomething(a) {
//   return `something ${a}`;
// }
// const take = giveMeSomething("give me");
// console.log(
//   take,
//   "    function that returns the string {something} joined with a space { } and the given argument a"
// );
