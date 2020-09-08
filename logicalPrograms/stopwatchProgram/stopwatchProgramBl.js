stopwatch=(h,m,s)=>{
    var hours = Math.floor(( (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((1000 * 60 * 60)/(1000 * 60));
    var seconds = Math.floor((1000 * 60)/ 1000);
    var H = hours-h;
    var M = minutes-m;
    var S = seconds-s;
    console.log(H+"h "+ M +"m "+S+"s");
}
module.exports={stopwatch}