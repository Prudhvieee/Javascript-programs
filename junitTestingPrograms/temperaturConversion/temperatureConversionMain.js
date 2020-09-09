const userInput=require('readline-sync');
const blObject=require('./temperatureConversionBl.js');
let a = userInput.questionInt("choose the conversion method "+'\n'+"1.Celsius to Fahrenheit "+'\n'+"2.Fahrenheit to Celsius ");
let result =blObject.temperatureConversion(a);
console.log(result);