function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const adamTotal = 100;
const adamTaxRate = 0.13;
const myTotal = calculateBill(adamTotal, adamTaxRate);
console.log(`Your total is $${myTotal}`);

console.log(calculateBill(100, undefined, 0.2));

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize('Adam')));
console.log(yell());
