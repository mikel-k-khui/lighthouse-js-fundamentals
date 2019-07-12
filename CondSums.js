const conditionalSum = function(values, condition) {
  let total = 0;

  for(let counter = 0; counter < values.length; counter++){
    //console.log(values[counter] % 2); /* calculation validation */
    if(condition === "even" && values[counter] % 2 === 0){ total += values[counter];
    }else if (condition === "odd" && values[counter] % 2 !== 0){ total += values[counter];
    }
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); /* 6 */
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); /* 9 */
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); /* 144 */
console.log(conditionalSum([], "odd")); /* 0 */
console.log(conditionalSum([13, 88, 12, -44, 99], "even")); /* 56 */