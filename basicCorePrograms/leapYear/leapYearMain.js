const userInput=require('readline-sync')
const blObject=require('./leapYearBl.js')
let year=userInput.questionInt("Enter the year : ");
let result=blObject.findingLeapYear(year);
console.log(result);