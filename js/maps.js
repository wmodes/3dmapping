// var map = L.map('map', {
//   center: [51.501342, -0.120205],
//   zoom: 15
// });
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

var map = L.eeGeo.map('map', 'c37e45fcb636b61e069d29f30f6cb2d6', {
  center: [51.501342, -0.120005],
  zoom: 16,
  tiltDegrees: 5,
  tilt: 5,
  indoorsEnabled: false,
  displayEntranceMarkers: false,
});

map.themes.setTheme(
    L.eeGeo.themes.season.Winter,
    L.eeGeo.themes.time.Dawn,
    L.eeGeo.themes.weather.Foggy
);
