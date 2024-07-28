const btnClick = document.getElementById("btn");
const jokeBox= document.getElementById("box")
const BASE_URL="https://v2.jokeapi.dev/joke/Any";

let getJoke =() => {
    fetch(BASE_URL)
    .then(data => data.json())
    .then(elem => {
        // console.log(elem);
        jokeBox.innerText=elem.setup || elem.joke
    })
}

btnClick.addEventListener("click",getJoke);
getJoke();