const userInput=require('readline-sync');
var numbers=[]
let counter=0;
array=(N)=>{
    for(a=1;a<=N;a++){
        let b=userInput.questionInt("Enter the "+a+" value:");
        numbers.push(b);
    }
}
tripletSum=(numbers) => {
    for(i=0;i<numbers.length;i++){
        firstNumber = numbers[i];
        for(j=i+1;j<numbers.length;j++){
            secondNumber = numbers[j];
            for(k=j+1;k<numbers.length;k++){
                thirdNumber = numbers[k];
                sum= firstNumber+secondNumber+thirdNumber;
                sum===0?counter++:console.log("sum not equal to zero");
            }
        }
    }
    console.log("number of distinct triplets is " +counter);
}
module.exports ={tripletSum,array,numbers}