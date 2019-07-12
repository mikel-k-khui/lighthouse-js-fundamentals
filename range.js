function range(start,end,step){
  let array = [];
  if(start === null || end === null || step === null){
    array = [];
  }else if(start > end){
    array = [];
  }else if(step <= 0){
    array = [];
  }else{
    for(let add = start; add <= end; add = add + step){
      array.push(add);
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));