var map;
google.maps.event.addDomListener(window, "load", function () {
var map = new google.maps.Map(document.getElementById("map_div"), {
    center: new google.maps.LatLng(33.2209406,-111.5729179),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var infoWindow = new google.maps.InfoWindow();
  function createMarker(options, html) {
    var marker = new google.maps.Marker(options);
    if (html) {
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(options.map, this);
      });
    }
    return marker;
  }
var marker1 = createMarker({
    position: new google.maps.LatLng(33.2209406,-111.5729179),
    map: map
  }, "<h1>American Leadership Academy</h1><p>Come here for more information</p>");

});
