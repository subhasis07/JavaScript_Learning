function makeBubble() {
    var clutter="";

    for(var i=1;i<217;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#panelBottom").innerHTML=clutter;
}

var timer=0;
function runTimer() {
    var timeInt= setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#timeVal").textContent=timer;
        }else{
            clearInterval(timeInt);
        }
    }, 1000);
}

function getNewHit() {
    var rn=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=rn;
}

var score=0;
function updateScore() {
    score+=10;
    document.querySelector("#scoreVal").textContent=score;    
}

makeBubble();
runTimer();
getNewHit();
updateScore();