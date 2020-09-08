const userInput=require('readline-sync');
let activities = [];
arrayData=(a)=>{
    // a.forEach(element => {
    //     let M=userInput.questionInt("Enter M value:");
    //     let N=userInput.questionInt("Enter N value:");
    //     element.push([M,N])
    // });
    for(i=1;i<=a;i++) {
        let M=userInput.question("Enter your name:");
        let N=userInput.questionInt("Enter your age:");
        activities.push([M,N]);
    }
    console.table(activities);
}
module.exports={arrayData}