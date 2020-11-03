// var map = L.map('map', {
//   center: [51.501342, -0.120205],
//   zoom: 15
// });
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

$(document).ready(function(){

  setTimeout(function(){
    $("#load-screen").css("opacity", "0");
  }, 5000);

  var map = L.eeGeo.map('map', 'c37e45fcb636b61e069d29f30f6cb2d6', {
    center: [40.874723, -73.922199],
    zoom: 15,
    tiltDegrees: 45,
    headingDegrees: 180,
    indoorsEnabled: false,
    displayEntranceMarkers: false,
    minZoom: 15,
    maxZoom: 17
  });

  map.themes.setTheme(
      L.eeGeo.themes.season.Winter,
      L.eeGeo.themes.time.Dawn,
      L.eeGeo.themes.weather.Snowy
  );

  setTimeout(function(){
    console.log("Changing POV");
    map.setView(
      [40.688994, -74.045022], 17.00,
      {
          tiltDegrees: 5,
          tilt: 5,
          headingDegrees: 0,
          animate: true,
          durationSeconds: 60
        }
    );
  }, 2000);

})
