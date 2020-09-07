const userInput=require('readline-sync');
const blObject=require('./quadraticBl.js');
let a = userInput.questionInt("Enter a value: ");
let b = userInput.questionInt("Enter b value: ");
let c = userInput.questionInt("Enter c value: ");
console.log("Quadratic expression is "+a+"x*x+"+b+"x+"+c);
result = blObject.findingRoot(a,b,c);
console.log(result);