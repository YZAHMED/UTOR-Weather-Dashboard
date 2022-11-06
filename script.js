let APIKey = "166a433c57516f51dfab1f7edaed8413";
let locations = [];

function getWeatherData(lat, lon, city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=,minutely,hourly,alerts&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {



            showWeatherData(response, city);

        });
};
