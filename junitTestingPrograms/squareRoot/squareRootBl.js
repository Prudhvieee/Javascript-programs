squareRoot=(c)=>{
    let t=c;
    let epsilon=1e-15;
    while(Math.abs(t-c/t)>epsilon*t){
        t=(c/t+t)/2.0;
    }
    console.log(t);
}
module.exports={squareRoot}