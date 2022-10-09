window.onload=RealTime();
var hour=0;
var min=0;
var sec=0;

function set_hr(value){
    return value <10 ? "0"+value : value
}
function set_min(value){
    return value <10 ? "0"+value : value
}
function set_sec(value){
    return value <10 ? "0"+value : value
}

function RealTime(){
    var date=new Date();
    hour=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();

    document.getElementById("hour").innerHTML=set_hr(hour);
    document.getElementById("min").innerHTML=set_min(min);
    document.getElementById("sec").innerHTML=set_sec(sec);

    var tem= hour >=12 ? "PM" : "AM";
    document.getElementById("D_N").innerHTML=tem;
    
    setTimeout(RealTime, 1000);
}