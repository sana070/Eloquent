function number(array) {
  return array < 10;
}
 var array1= [1,2,3,4];
 
console.log(array1.every(number));

 

//console.log(every([1, 3, 5], n => n < 10));
// → true
//console.log(every([2, 4, 16], n => n < 10));
// → false
//console.log(every([], n => n < 10));
// → true