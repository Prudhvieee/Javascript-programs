const userInput=require('readline-sync');
const blObject=require('./euclideanDistanceBl.js');
let x=userInput.questionInt("Enter X value: ");
let y=userInput.questionInt("Enter Y value: ");
let result=blObject.euclideanDistance(x,y);
console.log(result);