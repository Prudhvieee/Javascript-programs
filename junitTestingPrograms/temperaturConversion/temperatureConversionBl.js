const userInput=require('readline-sync');
temperatureConversion=(a)=>{
    switch(a){
        case 1:
            let t= userInput.questionInt("Enter the temperature : ");
            let c=(t *9/5)+32;
            console.log(c+"°F");
            break;
        case 2:
            let b= userInput.questionInt("Enter the temperature : ");
            let f=(b-32)*5/9;
            console.log(f+"°C");
            break;
        default:
            console.log("Choose the correct Method ");
    }
}
module.exports={temperatureConversion}