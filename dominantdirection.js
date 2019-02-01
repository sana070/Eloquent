function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");


  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));