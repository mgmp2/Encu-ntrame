function initMap() {
  var laboratorialima = {lat:-12.1191427, lng: -77.0349046};
  var map = new google.maps.Map(document.getElementById("map"),{
    zoom:20, center: laboratorialima
  });
  var markadorLaboratoria = new google.maps.Marker ({
    position: laboratorialima,
    map: map
  });
}

function map() {
  
}
