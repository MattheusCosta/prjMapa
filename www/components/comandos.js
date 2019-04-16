// This is a JavaScript file

$(document).on('click', '#btnMapa', function(){
  $("#terra").fadeOut(0);
  $("#mstMapa").fadeIn(200);
  $("#btnMapa").css("display","none");
  $("#btnMapa2").css("display","block");

  function checkConnection(){
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.NONE] = 'Sem conexão por favor conectar a uma rede';

    alert('Connection type: ' + states[networkState], navigator.notification.beep(3), navigator.vibrate(6000));
  }

  navigator.notification.beep(1);

  function mapa(position){
      L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

      var map = L.mapquest.map('map', {
      center: [position.coords.latitude, position.coords.longitude],
      layers: L.mapquest.tileLayer('map'),
      zoom: 15
      });

      L.marker([position.coords.latitude, position.coords.longitude], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).bindPopup('Denver, CO').addTo(map);

        L.circle([position.coords.latitude, position.coords.longitude], { radius: 200 }).addTo(map);

      map.addControl(L.mapquest.control());
    };
    navigator.geolocation.getCurrentPosition(mapa);
  
});

$(document).on('click','#btnMapa2', function(){
  $("#terra").fadeIn(200);
  $("#mstMapa").fadeOut(0);
  $("#btnMapa").css("display","block");
  $("#btnMapa2").css("display","none");
});