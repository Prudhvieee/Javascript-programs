var notes =[1000,500,100,50,10,5,2,1];
var i=0;
Total=0;
vendingMachine=(money)=>{
    calculate(money,notes);
}
function calculate(money,notes){
    let rem;
    if(money==0){
        return -1;
    }
    else{
        if(money>=notes[i]){
            let callNotes=Math.floor(money/notes[i]);
            rem=money%notes[i];
            money=rem;
            Total += callNotes;
            console.log(notes[i]+   " Notes ---> " +callNotes );
        }
        i++;
        return calculate(money,notes);
    }
};
module.exports={vendingMachine}