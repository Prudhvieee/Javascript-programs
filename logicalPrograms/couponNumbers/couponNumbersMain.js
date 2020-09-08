const userInput=require('readline-sync');
const blObject=require('./couponNumbersBl.js');
let N=userInput.questionInt("Enter N value :")
let result =blObject.couponNumber(N);
console.log(result);