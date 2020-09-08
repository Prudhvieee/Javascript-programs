const userInput=require('readline-sync');
const blObject=require('./2dArrayBl.js');
let a= userInput.questionInt("Enter the number of elements you want me to insert into array:");
let result=blObject.arrayData(a);
console.log(result);