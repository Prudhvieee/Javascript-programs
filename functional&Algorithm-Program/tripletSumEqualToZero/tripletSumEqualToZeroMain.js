const userInput=require('readline-sync');
const blObject=require('./tripletSumEqualToZeroBl.js')
let N=userInput.questionInt("Enter the size of the array:");
blObject.array(N);
let result = blObject.tripletSum(blObject.numbers);
console.log(result);