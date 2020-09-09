const userInput=require('readline-sync');
const blObject=require('./squareRootBl.js');
let c = userInput.questionInt("Enter the number : ");
let result =blObject.squareRoot(c);
console.log(result);