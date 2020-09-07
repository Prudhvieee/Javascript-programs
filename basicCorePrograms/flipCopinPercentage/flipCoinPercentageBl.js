flipingCoin=(flips)=>{
    heads=0;
    tails=0;
    for(i=1;i<=flips;i++){
        let r=Math.random();
        if(r<0.5)
        tails++;
        else
        heads++;
    }
    console.log("No. of times got heads "+heads);
    console.log("No. of times got tails "+tails);
    let h=heads/flips;
    let t=tails/flips;
    console.log("percentage of heads "+ h);
    console.log("percentage of tails "+ t);
}
module.exports={flipingCoin}