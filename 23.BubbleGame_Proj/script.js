function makeBubble() {
    var clutter="";

    for(var i=1;i<217;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#panelBottom").innerHTML=clutter;
}

var timer=10;
function runTimer() {
    var timeInt= setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#timeVal").textContent=timer;
        }else{
            clearInterval(timeInt);
            document.querySelector("#panelBottom").innerHTML=
            `<h1>Game Over; </h1>
            <p></p>
            <h1>Your Score= ${document.querySelector("#scoreVal").textContent}</h1>
            `;
        }
    }, 1000);
}

var hitRN=0;
function getNewHit() {
    hitRN=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hitRN;
}

var score=0;
function updateScorePositive() {
    score+=10;
    document.querySelector("#scoreVal").textContent=score;    
}

function updateScoreNegative() {
    score-=5;
    document.querySelector("#scoreVal").textContent=score;    
}

document.querySelector("#panelBottom").addEventListener("click", function (details) {
    var clickedNum=Number(details.target.textContent);
    if(clickedNum === hitRN){
        updateScorePositive();
        makeBubble();
        getNewHit();
    }else{
        updateScoreNegative();
    }
})
makeBubble();
runTimer();
getNewHit();