findingLeapYear=(year)=>{
    year%4===0?year%100===0?year%400===0?console.log(year +" is leap year"):console.log(year +" is not leap year"):console.log(year+" is leap year"):console.log(year+" is not leap year");
}
module.exports={findingLeapYear}