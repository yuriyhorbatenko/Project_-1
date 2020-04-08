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
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + key;
    
    
    fetch(queryUrl)
    .then(function(response){
        let data = response.json();
        return data;
    })

    .then(function(data) {

        console.log(data.weather[0].icon)
        console.log(data.main.temp)
        console.log(data.weather[0].description)
        console.log(data.name)

        weatherIcon = data.weather[0].icon;
        weatherTemp = Math.floor(data.main.temp);
        weatherDesc = data.weather[0].description;
        weatherCity = data.name;
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



$(".cityBtn").click(function() {

    var city = $(this).attr("id");
    var queryUrlCity = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;
    

        fetch(queryUrlCity)

        .then(function(response){
            let data = response.json();
            return data;
        })
    
        .then(function(data) {

            console.log(data.weather[0].icon)
            console.log(data.main.temp)
            console.log(data.weather[0].description)
            console.log(data.name)
    
            weatherIconCity = data.weather[0].icon;
            weatherTempCity = Math.floor(data.main.temp);
            weatherDescCity = data.weather[0].description;
            weatherCityCity = data.name;
        })
    
        .then(function(){

            iconElement.html("<img src=compassets/images/icons/" + weatherIconCity + ".png>");
            tempElement.html("<p>" + weatherTempCity + " °<span>F</span></p>");
            descElement.html("<p>" + weatherDescCity + "</p>");
            locationElement.html("<p>" + weatherCityCity + "</p>");
        });
});                  