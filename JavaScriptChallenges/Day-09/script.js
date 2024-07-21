const selectID=document.getElementById("domID");
const list=document.getElementById("list");
const selectClass=document.getElementsByClassName("domClass")[0];


selectID.innerText= "Updated ID";

selectClass.style.backgroundColor="red";

const newElem=document.createElement("h3");
// newElem.innerHTML="hi";
newElem.innerText="hi";
selectID.appendChild(newElem);


const newLi=document.createElement("ul");
// newElem.innerHTML="hi";
newLi.innerText="4";
list.appendChild(newLi);

// list.appendChild(document.createElement("ul").innerText = "4"

selectClass.remove();
list.removeChild(list.lastElementChild);

const btnSelector= document.getElementById("btn");
const contentSelector= document.getElementById("content");
btnSelector.addEventListener("click", ()=>{
    // alert("Searched!")
    contentSelector.innerHTML="<h3>Text updated</h3>"
    btnSelector.style.backgroundColor="yellow"
    btnSelector.innerText="Changed!!!!!!!!"
})



