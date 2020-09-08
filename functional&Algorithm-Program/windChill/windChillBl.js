windChillOperation=(t,v)=>{
    let w=35.74+0.6215*t+((0.4275*t)-37.75)*Math.pow(v,0.16);
    return w;
}
module.exports={windChillOperation}