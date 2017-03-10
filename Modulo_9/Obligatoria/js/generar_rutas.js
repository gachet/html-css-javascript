$(document).ready(function() {
    var map, lat, lng, i = 0,
        puntoInicial = {
            longitud: 0,
            latitud: 0
        };
    console.log(puntoInicial);
    alert("Hola, bienvenido. \n Antes que nada, esta aplicacion funciona utilizando tu Geolocalización por lo cual es importante que le des permiso para acceder a realizar el test. \n Att: Víctor Sánchez");

    function rutaCompleta() {
        map.drawRoute({
            origin: [puntoInicial.latitud, puntoInicial.longitud],
            destination: [lat, lng],
            travelMode: 'driving',
            strokeColor: '#000000',
            strokeOpacity: 0.6,
            strokeWeight: 5
        });
        map.addMarker({
            lat: puntoInicial.latitud,
            lng: puntoInicial.longitud
        });
        map.addMarker({
            lat: lat,
            lng: lng
        });
    }

    function LimpiarMapa() {
        map.cleanRoute();
        map.removeMarkers();
    }

    function enlazarMarcador(e) {
        map.drawRoute({
            origin: [lat, lng],
            destination: [e.latLng.lat(), e.latLng.lng()],
            travelMode: 'driving',
            strokeColor: '#000000',
            strokeOpacity: 0.6,
            strokeWeight: 5
        });
        lat = e.latLng.lat();
        lng = e.latLng.lng();
        map.addMarker({
            lat: lat,
            lng: lng
        });
    }

    function geolocalizar() {
        GMaps.geolocate({
            success: function(position) {
                lat = position.coords.latitude;
                lng = position.coords.longitude;
                map = new GMaps({
                    el: '#map',
                    lat: lat,
                    lng: lng,
                    click: enlazarMarcador,
                    tap: enlazarMarcador
                });
                puntoInicial.latitud = lat;
                puntoInicial.longitud = lng;
                console.log(puntoInicial);
                console.log('Te encuentras en: latitud:' + puntoInicial.latitud + ' longitud:' + puntoInicial.longitud);
                map.addMarker({
                    lat: lat,
                    lng: lng
                });
            },
            error: function(error) {
                alert('Geolocalización fallida: ' + error.message);
            },
            not_supported: function() {
                alert("Su navegador no soporta Geolocalización.");
            }
        });
    }
    geolocalizar();
    $("#compactar").on("click", function() {
        LimpiarMapa();
        rutaCompleta();
        setTimeout(alert("Ruta Compactada!. "), 10000);
    });
});