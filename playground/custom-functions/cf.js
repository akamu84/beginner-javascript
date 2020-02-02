function calculateBill() {
  const total = 100 * 1.13;
  return total;
}

const myTotal = calculateBill();
console.log(`Your total is $${myTotal}`);
console.log(`Your total is $${calculateBill()}`);
