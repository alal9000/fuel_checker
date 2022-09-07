var latlong;
var loc;
var station1;
var price1;
var map;



function initGoogle() {
    var location = {
        lat: 0,
        lng: 0
    }
    var options = {
        center: location,
        zoom: 14
    }

    if(navigator.geolocation) {
        console.log('location is here');

        navigator.geolocation.getCurrentPosition((loc) => {
            location.lat = loc.coords.latitude
            location.lng = loc.coords.longitude
            console.log(location.lat)
            console.log(location.lng)
            map = new google.maps.Map(document.getElementById('map'), options)

            new google.maps.Marker({
                position: location,
                title: 'you are here',
                map: map
            })

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.onegov.nsw.gov.au/FuelPriceCheck/v1/fuel/prices/nearby",
                "method": "POST",
                "headers": {
                  "content-type": "application/json; charset=utf-8",
                  "authorization": "Bearer kNE36vbTAH7piGriN9t3pnBclhqo",
                  "apikey": "LxbJIASJ7cRseNEATGHd0NgvSR8i3H55",
                  "transactionid": "5563375",
                  "requesttimestamp": "28/08/2022 10:12:20 AM"
                },
                "processData": false,
                "data": `{\"fueltype\":\"U91\",\"brand\":[],\"namedlocation\":\"2070\",\"latitude\": \"-33.912293\",\"longitude\": \"150.9277402\",\"radius\":\"2\",\"sortby\":\"price\",\"sortascending\":\"false\"}`
              }
              
              $.ajax(settings).done(function (response) {
                console.log(response);
                var x = JSON.stringify(response);
                console.log(x);
                price1 = response['prices'][0]['price'];
                console.log(price1)
                station1 = response['stations'][0]['name']
                console.log(station1)
                lat = response['stations'][0]['location'];
                latlong = { lat: lat['latitude'], lng: lat['longitude'] };
                console.log(latlong)

                
                const image = {
                    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                    // This marker is 20 pixels wide by 32 pixels high.
                    size: new google.maps.Size(20, 32),
                    // The origin for this image is (0, 0).
                    origin: new google.maps.Point(0, 0),
                    // The anchor for this image is the base of the flagpole at (0, 32).
                    anchor: new google.maps.Point(0, 32),
                  };
              
                  new google.maps.Marker({
                    position: latlong,
                    map,
                    title: `${station1}`,
                    label: `${price1}`,
                    icon: image
                  });
              });

              

            
        },
        (err) => {
            console.log("User clicked no")
            map = new google.maps.Map(document.getElementById('map'), options)
        }
        )
    }
    else {
        console.log('geolocation not supported')
        map = new google.maps.Map(document.getElementById('map'), options)
    }
}