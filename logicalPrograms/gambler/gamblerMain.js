const userInput=require('readline-sync');
const blObject=require('./gamblerBl.js');
let s= userInput.questionInt("Enter the stake : ");
let g= userInput.questionInt("Enter the goal : ");
let n= userInput.questionInt("Enter number of times : ");
let result= blObject.gambling(s,g,n);
console.log(result);