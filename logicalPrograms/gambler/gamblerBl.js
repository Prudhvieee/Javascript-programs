gambling=(s,g,n)=>{
    loop:for(let i=0;i<=n;i++){
        let oneOrZero = (Math.random()>=0.5)? 1 : 0;
        oneOrZero===1?s++:s--;
        if(s===g){
            console.log("wins");
            break loop;
        }
        else if(i===n)
            console.log("looser!");
        }
}
module.exports={gambling}