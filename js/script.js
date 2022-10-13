/*
	Filename: script.js
	Author: Nausheen Salauddin
	Student Number: 0805026
	Date: 7-10-2022
*/

$(function () {
    //check to see if geolocation enabled in system
        if (!(navigator.geolocation)) {
            $('#locationhere').html("<h1>Please enable geolocation!</h1>")
        } else { //runs if geolocation enabled
            navigator.geolocation.getCurrentPosition(success, fail);

            //if position retrieved
            function success(position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                let accuracy = position.coords.accuracy;
                let result = calcDistanceBetweenPoints(localStorage.getItem("lat"), localStorage.getItem("lon"), latitude, longitude);

                //print to screen
                $('#locationhere').html("<p>Your current latitude is: " + latitude + "<br/><p>Your current longitude is: " + longitude + "</p>");
                $('#locationhere').append("<p>The accuracy achieved is: " + accuracy + "</p>");

                //check if position already present (previously visited)
                if(localStorage){
                    $('#locationhere').append("<h1>Welcome Back!</h1>");

                    $('#locationhere').append("<h2>Your previous location was:</h2><p>Your previous latitude: " + localStorage.getItem("lat") + "</p><p>Your previous longitude: " + localStorage.getItem("lon") + "</p>")
                                        .append("<h1>Welcome Back!</h1>")
                                        .after("<h3>You have travelled :</h3>" + result.toFixed(3) + " metres or " + (result/1000).toFixed(2) + " km");
                } else{
                    //visiting app for first time
                    $('#locationhere').append("<h1>Welcome to location app!</h1>");
                }
                localStorage.setItem("lat", latitude);
                localStorage.setItem("lon", longitude);
            };

            //if location cannot be retrieved
            function fail(){
                $('#locationhere').html("<h1>Unable to access geolocation!</h1>")
            }

        }
    
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


