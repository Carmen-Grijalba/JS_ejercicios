let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 42.81687,
        lng: -1.64323,
      },
      map,
      title: "Pamplona",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 43.7792500,
        lng: 11.2462600,
      },
      map,
      title: "Florencia",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 51.555923,
        lng:  -9.262130,
      },
      map,
      title: "Skibbereen",
    })
  );
}
