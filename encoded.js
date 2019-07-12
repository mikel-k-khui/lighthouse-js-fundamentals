const urlEncode = function(text) {
  let encoded = "";
  for(let ctr = 0; ctr < text.length; ctr++){
    if(text.charCodeAt(ctr) === 32 && ctr > 0 && ctr < text.length - 1){
      // if not first or last spot is
        encoded += "%20";
      }else if(text.charCodeAt(ctr) !== 32){
        encoded += text.charAt(ctr);
      }
    } //no add if 1st character is space
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));