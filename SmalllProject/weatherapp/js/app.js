const apiKey = "9195c5119cd60ca8fa72090b95be8876";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (respone.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await respone.json();



        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://static.vecteezy.com/system/resources/previews/014/392/000/non_2x/illustration-of-cloud-icon-on-transparent-background-free-png.png";

        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://openclipart.org/image/2400px/svg_to_png/208526/sunicon.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://static.vecteezy.com/system/resources/previews/009/700/808/original/cloud-rain-icon-eps-10-free-vector.jpg"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://cdn1.iconfinder.com/data/icons/weather-filled-line-8/64/drizzle_weather_forecast_climate_meteorology-512.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://cdn0.iconfinder.com/data/icons/weather-346/64/fog-weather-mist-1024.png"
        }
        document.querySelector(".weather").style.display = "block";
    }


}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})