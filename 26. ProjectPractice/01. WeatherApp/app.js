var apiKey= "ed1cecb64f84b9336fc156080775c832";
var apiURL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector("#search input");
const searchBtn= document.querySelector("#search button");

async function checkWeatherStatus(city) {
    const response = await fetch (apiURL + city+ `&appid=${apiKey}`);

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML= data.name+"";

    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    
    document.querySelector(".wind").innerHTML= data.wind.speed+ " km/h";

    document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
}


searchBtn.addEventListener("click", ()=>{
    checkWeatherStatus(searchBox.value);
})

