const userInput=require('readline-sync');
const blObject=require('./stopwatchProgramBl.js');
let h= userInput.questionInt("enter the time to stop watch (hours): ");
let m= userInput.questionInt("enter the time to stop watch (minutes): ");
let s= userInput.questionInt("enter the time to stop watch (seconds): ");
let result=blObject.stopwatch(h,m,s);
console.log(result);