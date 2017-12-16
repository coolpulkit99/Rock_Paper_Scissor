/**
 * Created by user on 14-12-2017.
 */
var White=function(e){
    document.body.style.backgroundColor="White";
    document.getElementById("subtitle").style.color="Black";
    document.getElementById("title").style.color="Black";
};
var Black=function(e){
    document.body.style.backgroundColor="Black";
    document.getElementById ("subtitle").style.color="White";
    document.getElementById("title").style.color="White";
};
document.addEventListener('click',function (e) {
// alert("msg "+e.target.id);
    //Start function
    if(e.target.id=="start")
    {alert("start");
    var timer=5;
        while(timer>0) {
            setInterval(function () {
                alert("Hello");
            }, 1000);
        timer-=1;
            document.getElementById("").innerHTML=timer;
        }
    }
    if(e.target.id=="rock")
        alert("rock");
    if(e.target.id=="paper")
        alert("paper");
    if(e.target.id=="scissor")
        alert("scissor");
})