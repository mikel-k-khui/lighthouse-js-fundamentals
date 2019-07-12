/* Objective: Define a function called ageCalculator. This function should take 3 parameters:

name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year

Return: "Suzie is 32 years old."*/
function ageCalculator(name, yearOfBirth, currentYear){
  let output = "";
  let age = currentYear - yearOfBirth; /* calculate age */
  if(age === 1){
    return name + " is " + age + " year old.";
  }
  else{
    return name + " is " + age + " years old.";
  }
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));