function howManyHundreds(syrups){
  //console.log(syrups);
  let rawQuotient = syrups / 100;
  //console.log(rawQuotient);
  let remainder = rawQuotient % 1;
  //console.log(remainder);
  let quotient = rawQuotient - remainder;
  //console.log(quotient);
  return quotient;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
console.log(howManyHundreds(1234), "=?", 0);
console.log(howManyHundreds(123456), "=?", 0);