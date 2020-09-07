findingPowers=(N)=>{
    var result = 1;
	for(var i=1; i<=N; i++) {
        result = result * 2;
    }
	return result;
    console.log("2 * "+N+" = "+value);
}
module.exports={findingPowers}