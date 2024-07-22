const text=document.getElementById("myText");
const img=document.getElementById("myImg");



text.addEventListener("click",()=>{
    text.innerText="photo will be updated on double click"
})

img.addEventListener("dblclick", (e) => {
    img.src = 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
});

const mouse =document.getElementById("mouseAction");

mouse.addEventListener("mouseover", ()=>{
    mouse.style.backgroundColor="grey";
    mouse.style.cursor="pointer"
})

mouse.addEventListener("mouseout", ()=>{
    mouse.style.backgroundColor="white";
})

const keyBoard =document.getElementById("keys");
const log = document.getElementById("log");

keyBoard.addEventListener("keydown",(e)=>{
    log.textContent+=`${e.code}`
})

const form = document.getElementById("form");
const submit = document.getElementById("log");

function logSubmit(event) {
    submit.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
    event.preventDefault();
}

form.addEventListener("submit", logSubmit);

const div = document.getElementById("delegationBtn")

div.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.innerText)
  }
})