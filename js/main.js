/**
 * Created by user on 14-12-2017.
 */
var White=function(e){
    document.body.style.backgroundColor="White";
document.getElementById("subtitle").style.color="Black";
};
var Black=function(e){
    document.body.style.backgroundColor="Black";
    document.getElementById ("subtitle").style.color="White";
};
document.addEventListener('click',function (e) {
alert("msg"+e.id);
//     if(=="title")
//         alert("title pressed");
})