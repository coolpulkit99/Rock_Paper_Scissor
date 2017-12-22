/**
 * Created by user on 14-12-2017.
 */
var White=function(e){
    document.body.style.backgroundColor="White";
    document.getElementById("subtitle").style.color="Black";
    document.getElementById("title").style.color="Black";
    document.getElementById("playerdisplay").style.color="Black";
    document.getElementById("compdisplay").style.color="Black";
    //document.getElementById("start").click();
};
var Black=function(e){
    document.body.style.backgroundColor="Black";
    document.getElementById ("subtitle").style.color="White";
    document.getElementById("title").style.color="White";
    document.getElementById("playerdisplay").style.color="White";
    document.getElementById("compdisplay").style.color="White";
};
var usermove="none";
var compmove="none";
document.addEventListener('click',function (e) {
// alert("msg "+e.target.id);
    //Start function
    if(e.target.id=="start")
    {document.getElementById("startscreen").style.display="none";
        document.getElementById("selectscreen").style.display="block";
        startTimer(5,document.getElementById("timer"));

    }
    if(e.target.id=="rock")
    {usermove="rock";}
    if(e.target.id=="paper")
        usermove="paper";
    if(e.target.id=="scissor")
        usermove="scissor";
    document.getElementById("rock").style.backgroundColor="#add8e6";
    document.getElementById("paper").style.backgroundColor="#add8e6";
    document.getElementById("scissor").style.backgroundColor="#add8e6";
    document.getElementById(""+usermove).style.backgroundColor="Yellow";
})

function startTimer(duration, display) {
    var count=0;
    var timer = duration;
    var minutes, seconds;

    setTimeout(
    setInterval(function () {

        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        --timer;
        if (timer==-1)
            count+=1;
        if (count ==1)
            gotoResult();
        if(timer<2){
            document.getElementById("timer").style.color="Red";
        }
        else if(timer>=2 && timer<4){
            document.getElementById("timer").style.color="Orange";
        }else
        {
            document.getElementById("timer").style.color="Green";
        }
        if (timer < 0) {
            timer = 0;

        }
    }, 1000)
,5000)}


function gotoResult(){
// alert(""+usermove);
    document.getElementById("selectscreen").style.display="none";
    if(usermove!="none")
    {
        document.getElementById("resultsscreen").style.display="block";
    // var
        compmove=Math.floor(Math.random() * 3);
    if(compmove=="0")
    compmove="rock";
else
    if(compmove=="1")
    compmove="paper";
else
    if(compmove=="2")
        compmove="scissor";


    alert(compmove+"");
document.getElementById("usermove").className+=" "+usermove;
        document.getElementById("compmove").className+=" "+compmove;
    if(usermove==compmove)
    {
        // Draw
        alert("Draw");
    }
    else if((usermove=="scissor" && compmove=="paper") || (usermove=="paper" && compmove=="rock") || (usermove=="rock" && compmove=="scissor"))
    {
        // win
        alert("Win");
    }
    else if((compmove=="scissor" && usermove=="paper") || (compmove=="paper" && usermove=="rock") || (compmove=="rock" && usermove=="scissor"))
    {
        // lose
        alert("Lose");
    }

    }

    else
        if(usermove=="none")
            document.getElementById("foulscreen").style.display="block";

}