const inputValue = document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");

function addTask() {
    if(inputValue.value===''){
        alert("Task cannot be blank");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputValue.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputValue.value='';
    saveData();
}

listContainer.addEventListener("click",function (elem) {
    if(elem.target.tagName ==="LI"){
        elem.target.classList.toggle("checked");
    }else if (elem.target.tagName ==="SPAN"){
        elem.target.parentElement.remove();
    }
    saveData();
    
},false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayTask() {
    listContainer.innerHTML=localStorage.getItem("data");
}

displayTask();