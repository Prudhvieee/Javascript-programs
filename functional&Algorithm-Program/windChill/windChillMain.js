const userInput=require('readline-sync');
const blObject =require('./windChillBl.js');
let t= userInput.questionInt("Enter the temperature (> 50F): ");
let v= userInput.questionInt("enter the wind speed (>120 OR < 3 miles/hr): ");
let result=blObject.windChillOperation(t,v);
console.log("The wind chill is  "+result);