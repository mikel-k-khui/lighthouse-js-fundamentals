const sumLargestNumbers = function(data) {
  let sorted = data.sort(function(low, high){return high - low}); /* sort higher number before the lower; as such, the largest number is first or position 0 of array */
  //console.log(sorted); /* Check sorted array */
  return sorted[0]+sorted[1];
};

console.log(sumLargestNumbers([1, 10])); /* 11 */
console.log(sumLargestNumbers([1, 2, 3])); /* 5 */
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); /* 126 */
