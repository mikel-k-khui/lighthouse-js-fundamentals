const instructorWithLongestName = function(instructors) {
  let max;
  if(instructors === undefined){
    console.log("undefined parameter");
  }
  else{
    let maxLen = 0;
    for(let counter = 0; counter < instructors.length; counter++){
      if(instructors[counter].name.length > maxLen){
        maxLen = instructors[counter].name.length;
        max = instructors[counter];
      } //update the longest name holders
    }//iterate through the instructors
  }
  return max;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
console.log(instructorWithLongestName());