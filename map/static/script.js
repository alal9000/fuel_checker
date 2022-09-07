function initGoogle() {
    var location = {
        lat: 40.000,
        lng: -79.000
    }
    var options = {
        center: location,
        zoom: 14
    }
    if(navigator.geolocation) {
        console.log('location is here!');
        navigator.geolocation.getCurrentPosition((loc) => {
            location.lat = loc.coords.latitude
            location.lng = loc.coords.longitude

            // Write the map
            map = new google.maps.Map(document.getElementById('map'), options)
            console.log(loc)
        },
        (err) => {
            console.log("User clicked on no")
            map = new google.maps.Map(document.getElementById('map'), options)
        }
        )
    }
    else {
        console.log('geolocation not supported')
        map = new google.maps.Map(document.getElementById('map'), options)
    }
    
}