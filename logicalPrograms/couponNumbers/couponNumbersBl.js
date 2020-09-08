couponNumber=(N)=>{
    var arr = [];
    while(arr.length < N){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
}
module.exports={couponNumber}