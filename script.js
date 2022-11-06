let APIKey = "166a433c57516f51dfab1f7edaed8413";
let locations = [];

function getWeatherData(lat, lon, city) {

    var linkURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=,minutely,hourly,alerts&appid=" + APIKey;

    $.ajax({
        url: linkURL,
        method: "GET"
    })

        .then(function (response) {



            showWeatherData(response, city);

        });
};

function loadWeatherZip(zipCpde, isClicked) {

    var linkURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zipCpde + ",us&appid=" + APIKey;
    var weatherContainer = $("#weatherContainer");


    $.ajax({
        url: linkURL,
        method: "GET"
    })

        .then(function (response) {

            console.log(response);

            if (!isClicked) {
                saveLocations(response);
                renderLocations();
            }


            
            getWeatherData(response.city.coord.lat, response.city.coord.lon, response.city.name);

        }).catch(function (response) {
            alert("Not a vaild Zip Code")
        });
}