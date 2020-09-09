monthlyPayment=(P,Y,R)=>{
    let n=12*Y;
    let r=R/(12*100);
    let payment=(P*r)/1-Math.floor(Math.pow((1+r),-n));
    console.log(payment);
}
module.exports={monthlyPayment}