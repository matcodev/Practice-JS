function checkAge(name, age) {
  // your code here
  if(age > 21) return `Welcome, ${name}!`
  else return `Go home, ${name}!`
}

var output = checkAge('Adrian', 22);
var output2 = checkAge('Adrian', 20);

console.log(output);
console.log(output2); 

