const userInput=require('readline-sync');
const blObject=require('./powerOf2Bl');
let N=userInput.questionInt("Enter N value : ");
let result=blObject.findingPowers(N);
console.log(result);