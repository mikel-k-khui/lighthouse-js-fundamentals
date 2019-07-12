/* Define function with start and end that creates array increased by each increment per step variable */
function range(start,end,step){
  let array = [];
  for(let add = start; add <= end; add = add + step){
    array.push(add);
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));