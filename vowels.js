const numberOfVowels = function(data) {
    let count = 0;
    let temp;
    for(let counter = 0; counter < data.length; counter++){
      switch (data[counter]) {
        //iterate through the string passed and assess if it is a vowel
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': count += 1;
      }
    }
    return count;
  };

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou")); // 5