const insideRect=document.querySelector("#center");
insideRect.addEventListener("mousemove", function (details) {
    var rectLocation= insideRect.getBoundingClientRect();
    var mousePositionInsideBox=details.clientX-rectLocation.left;

    if(mousePositionInsideBox<rectLocation.width/2){
        var redColorIntensity=gsap.utils.mapRange(0,rectLocation.width/2,255,0,mousePositionInsideBox);
        gsap.to(insideRect,{
            backgroundColor: `rgb(${redColorIntensity},0,0)`,
            ease: Power4,
        })
    }else{
        var blueColorIntensity=gsap.utils.mapRange(rectLocation.width/2,rectLocation.width, 0, 255, mousePositionInsideBox);
        gsap.to(insideRect,{
            backgroundColor: `rgb(0,0,${blueColorIntensity})`,
            ease: Power4,
        })
    }
})

insideRect.addEventListener("mouseleave",function(){
    gsap.to(insideRect,{
        backgroundColor: "white"
    })
})