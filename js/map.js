google.maps.event.addDomListener(window, 'load', function () {
    var latlng = new google.maps.LatLng(50.487172, 30.470286);

    var options = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), options);

    new google.maps.Marker({
        position: latlng,
        map: map,
        title: markerTitle
    });
});
