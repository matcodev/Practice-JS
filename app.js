



function getProperty(obj, key) {
  // your code here
  return obj[key];
}

var car = {
  model: 'Toyota',
  color: 'Red'
};
var output = getProperty(car, 'model');
console.log(output);

getProperty(car, 'color');


function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj
}

var myObj = {};

addProperty(myObj, 'myProperty');

console.log(myObj.myProperty); 

function removeProperty(obj, key) {
  // your code here
  delete obj[key]
}

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');

console.log(obj.name);

