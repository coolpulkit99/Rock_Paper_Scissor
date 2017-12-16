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
    {
        startTimer(5,document.getElementById("timer"));
    }
    if(e.target.id=="rock")
    {alert("rock");
        document.getElementById("start").click();}
    if(e.target.id=="paper")
        alert("paper");
    if(e.target.id=="scissor")
        alert("scissor");
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        --timer;
        if(timer<3){
            document.getElementById("timer").style.color="Red";
        }
        else{
            document.getElementById("timer").style.color="Black";
        }
        if (timer < 0) {
            timer = 0;
        }
    }, 1000);
}
