// var map = L.map('map', {
//   center: [51.501342, -0.120205],
//   zoom: 15
// });
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

var map = L.eeGeo.map('map', 'c37e45fcb636b61e069d29f30f6cb2d6', {
  center: [51.501342, -0.120005],
  zoom: 14,
  tiltDegrees: 45,
  headingDegrees: 204.374,
  tilt: 45,
  indoorsEnabled: false,
  displayEntranceMarkers: false,
});

map.themes.setTheme(
    L.eeGeo.themes.season.Winter,
    L.eeGeo.themes.time.Dawn,
    L.eeGeo.themes.weather.Snowy
);

setTimeout(function(){
  console.log("Changing POV");
  map.setView(
    [51.501342, -0.120005], 16,
    {
        tiltDegrees: 85,
        headingDegrees: 0,
        animate: true,
        durationSeconds: 8
      }
  );
}, 10000);
