/*for loop to prints numbers from 100 to 200 with 3 exceptions */
for(let x = 100;x <= 200;x++){
  let x3 = x % 3;
  let x4 = x % 4;
  
  /*If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.*/
  if(x3 === 0 && x4 === 0){ console.log("LoopyLighthouse");
  }
  /*If the number is a multiple of 3, print the string "Loopy" instead of the number.*/
  else if(x3 === 0 && x4 !== 0){ console.log("Loopy");
  }
  /*If the number is a multiple of 4, print the string "Lighthouse" instead of the number.*/
  else if(x3 !== 0 && x4 === 0){ console.log("Lighthouse");
  }
  else{ console.log(x);
  }
}


