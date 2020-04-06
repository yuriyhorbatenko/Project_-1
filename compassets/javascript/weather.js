var key = "b74bf7f1d5d16c47c0c944d106ed4b09";

var iconElement = $(".weather-icon");
var tempElement = $(".temperature-value");
var descElement = $(".temparature-description");
var locationElement = $(".location");


var weather = [];

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition)
}

else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function getWeather (latitude, longitude) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + key;
    
    fetch(queryUrl)
    .then(function(response){
        let data = response.json();
        return data;
    })

    .then(function(data) {

        console.log(data.current.weather[0].icon)
        console.log(data.current.temp)
        console.log(data.current.weather[0].description)
        console.log(data.timezone)

        weatherIcon = data.current.weather[0].icon;
        weatherTemp = Math.floor(data.current.temp);
        weatherDesc = data.current.weather[0].description;
        weatherCity = data.timezone;
    })

    .then(function(){
        displayWeather();
    });
}

function displayWeather(){

    iconElement.html("<img src=compassets/images/icons/" + weatherIcon + ".png>");
    tempElement.html("<p>" + weatherTemp + " °<span>F</span></p>");
    descElement.html("<p>" + weatherDesc + "</p>");
    locationElement.html("<p>" + weatherCity + "</p>");
}


$(document).on("click", ".cityBtn",  function() {
    var city = document.getElementById;
    console.log(city)
    
});   