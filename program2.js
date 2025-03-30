// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
  return voltage * current;
}
const power = circuitPower(400, 10);
console.log(
  power,
  "function that takes voltage and current and returns the calculated power."
);
