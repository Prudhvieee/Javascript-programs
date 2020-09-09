const userInput=require('readline-sync');
const blObject=require('./monthlyPaymentBl.js');
let P = userInput.questionInt("Enter the principal loan amount : ");
let Y = userInput.questionInt("Enter the years : ");
let R = userInput.questionInt("Enter the interest rate : ");
let result=blObject.monthlyPayment(P,Y,R);
console.log(result);