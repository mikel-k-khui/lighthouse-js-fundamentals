/*const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}
else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/

const temperature = 12;
/* pick out scarf if below 0;
don't waer short sleeves between 0 and 14;
wear short sleeves when 15 and above.
*/
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");