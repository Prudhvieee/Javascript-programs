findingRoot=(a,b,c)=>{
    let delta=(b*b)-(4*a*c);
    let root1=(-b+Math.sqrt(delta))/(2*a);
    let root2=(-b-Math.sqrt(delta))/(2*a);
    console.log("Value of Root1 is: " + root1);
    console.log("Value of Root2 is: " + root2);
}
module.exports={findingRoot}