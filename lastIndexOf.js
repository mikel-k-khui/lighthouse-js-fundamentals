/* Returns the last position in the array of second parameter or return -1 */

function lastIndexOf(theArray, seek){
  
  let counter = theArray.length;
  while(counter > 0){
    if(seek === theArray[counter]){
      return counter;
    }else if(theArray.length === 1){
      return counter - 1;
    }/* the return of index value for unmatch, single array was not clear */
    counter -= 1;
  }
  return counter - 1;
}
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
