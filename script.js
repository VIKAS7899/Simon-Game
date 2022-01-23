var ok=1;
var user = [];
var comp = [];
var level=1;

document.addEventListener("keypress",function(){
    if(ok == 1)
    {  
          ok=0;
        nextSequence();
    }
});

function check(b){
    user.push(b);
    press(b);
    checkAnswer(user.length-1);

}

function checkAnswer(index){

    if(user[index] == comp[index])
    {
        if(user.length === comp.length)
        {     
            user = [];
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
       
    }

    else{
        comp = [];
        user = [];
        gameOver();  
    }
}

function gameOver(){
    document.querySelector("h1").textContent = "oops ! press any key to restart";
    playsound("wrong");
    backgroundAnimation();
    ok=1;
    level=1;
}
function nextSequence(){
    
    document.querySelector("h1").innerHTML = "Level "+level;
    level++;
    var random = Math.floor(Math.random()*4)+1; 
    var button = "b"+random;
    comp.push(button);
    press(button);
}

function backgroundAnimation()
{
    document.body.style.backgroundColor="red";
    setTimeout(function(){
        document.body.style.backgroundColor="rgb(25, 25, 65)";  
    },100);
}

function press(classname){
    buttonAnimation("#"+classname);
    playsound(classname);
}

function playsound(classname){
    var c = classname;
    if(c == "b1")
        c = "green";
    else if (c == "b2")
        c = "blue";
    else if (c == "b3")
        c = "red";   
    else if (c == "b4")
        c = "yellow";

    var audio = new Audio("sounds/"+c+".mp3");
    audio.play();
   
}

function buttonAnimation(classname){
    document.querySelector(classname).classList.add("pressed");

    setTimeout(function(){
        document.querySelector(classname).classList.remove("pressed");
    },100);
}






