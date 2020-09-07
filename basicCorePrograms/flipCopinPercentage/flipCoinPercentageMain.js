const userInput=require('readline-sync');
const blObject =require('./flipCoinPercentageBl.js');
let flips=userInput.questionInt("enter the number of times flip coin:");
let result=blObject.flipingCoin(flips);
console.log(result);