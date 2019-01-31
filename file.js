function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
*/
//let result = SCRIPTS.map(a => a.ranges);
//let sub=result.map(x => x[1]-x[0]);
//console.log(result);
const character = SCRIPTS.map(entry => ({...entry, character: entry.ranges.reduce((acc, range) => acc + (range[1] - range[0]), 0)}));
//console.log(character);
function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = character.filter(s => s.character >= 100);
//console.log(rtlScripts);
console.log(map(rtlScripts, s => s.name));