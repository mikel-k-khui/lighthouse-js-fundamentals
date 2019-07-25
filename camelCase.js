const camelCase = function(input) {
  let splitted = input.split(" ");

for(let i = 1; i < splitted.length; i++) {
    splitted[i] = splitted[i][0].toUpperCase().concat(splitted[i].substr(1,splitted[i].length - 1));
    //console.log(splitted[i]);
}
console.log(splitted);
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

