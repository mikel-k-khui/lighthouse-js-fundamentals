const whichSchool  = function (age) {
  var output;

    /*Elementary School if age is below 13*/
  if (age < 13){
    output = "Elementary School";
  }
    /*Secondary School if age is between 13 and 18 (both inclusive)*/
  else if (age < 18){
    output = "Secondary School";
  }
    /*Lighthouse Labs in all other cases.*/
    else{
    output = "Lighthouse Labs";
  }
  return output;
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));