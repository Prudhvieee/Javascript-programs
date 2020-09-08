const userInput=require('readline-sync');
const blObject=require('./vendingMachineBl.js');
let money=userInput.questionInt("Enter the amount of money to withdraw: ");
let result=blObject.vendingMachine(money);
console.log(result);