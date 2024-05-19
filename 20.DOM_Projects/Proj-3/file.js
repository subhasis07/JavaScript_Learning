let time= document.getElementById("clock");

setInterval(function() {
    let date = new Date();
    // console.log(date);
    
    time.innerHTML=date.toLocaleTimeString();;
}, 1000)