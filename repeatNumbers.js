let repeatNumbers = function(data) {
  let output = "";
  for(let outter = 0; outter < data.length; outter++) {
    for (let repeat = data[outter][1] - 1; repeat >= 0; repeat--) {
      output = output.concat(data[outter][0]);
    }
    if( outter < data.length -1) {
      output = output.concat(", ");
    }
  }
  return output;
};

console.log(repeatNumbers([[1, 10]])); //1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); //11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); //10101010, 343434343434, 9292