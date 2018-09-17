var position=document.getElementById("location")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(myPosition){
        var lat = myPosition.coords.latitude
        var lon = myPosition.coords.longitude
        var alt = myPosition.coords.altitude
        var spd = myPosition.coords.speed
        var positionString = lat       
        
position.innerHTML = lat;
    })
}