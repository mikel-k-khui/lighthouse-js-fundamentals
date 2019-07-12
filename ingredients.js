const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var counter = 0;
while(counter < ingredients.length){
  console.log(ingredients[counter]);
  counter += 1;
}

// Write a for loop that prints out the contents of ingredients:
for(counter = 0; counter < ingredients.length; counter++){
  console.log(ingredients[counter]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(counter = ingredients.length - 1; 0 <= counter; counter--){
  console.log(ingredients[counter]);
}
