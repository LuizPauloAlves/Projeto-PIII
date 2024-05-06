let map;

function initMap() {
  const configuracao = {
    center: { lat: -22.6112963189389, lng: -45.1773373236332 },
    zoom: 14,
    mapTypeId: "roadmap", // Corrigido: mapTypeId com "d" minúsculo
    mapTypeControl: false,
    streetViewControl: false,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  map = new google.maps.Map(document.querySelector(".mapas"), configuracao);
  verMarcadores(); // Chamar a função para exibir os marcadores
}

async function verDados() {
  const conexao = await fetch("https://dengue-em-foco-api-889c311e3d33.herokuapp.com/v1/locations/");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

function createMarker(latitude, longitude) {
  new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
  });
}

async function verMarcadores() {
  const dados = await verDados();
  dados.forEach((element) => {
    if (!element.visitado) { // Se element.visitado for false
      createMarker(element.latitude, element.longitude);
    }
  });
}