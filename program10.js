//sort an array of objects on basis of price

function sortDrinkByPrice(drinks) {
  // const a= drinks.sort((p1, p2) =>
  // (p1.price > p2.price) ? 1
  // : (p1.price < p2.price) ? -1 :
  // 0);
  const a = drinks.sort((p1, p2) => p1.price - p2.price);
  return a;
}
const b = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "banana", price: 20 },
];
const c = sortDrinkByPrice(b);
console.log(c, "sort an array of objects on basis of price");
