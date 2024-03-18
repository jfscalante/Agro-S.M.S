window.onload = function() {
    setTimeout(function() {
      alert("Bienvenido a Agro S.M.S, Aplicativo web donde encontraras todo acerca de tu cultivo!");
    }, 2000);
  };

// cards
$(document).ready(function() {
  // Simular datos de plantas (puedes reemplazarlos con tus datos reales)
  var plantas = [
    { nombre: "Planta 1", enfermedad: "Enfermedad 1", resumen: "Resumen de la planta 1", imagen: "imagen1.jpg", sintomas: "Síntomas de la planta 1", recomendaciones: "Recomendaciones para la planta 1", causas: "Causas posibles de la planta 1", medidasPreventivas: "Medidas preventivas para la planta 1" },
    { nombre: "Planta 2", enfermedad: "Enfermedad 2", resumen: "Resumen de la planta 2", imagen: "imagen2.jpg", sintomas: "Síntomas de la planta 2", recomendaciones: "Recomendaciones para la planta 2", causas: "Causas posibles de la planta 2", medidasPreventivas: "Medidas preventivas para la planta 2" },
    { nombre: "Planta 3", enfermedad: "Enfermedad 3", resumen: "Resumen de la planta 3", imagen: "imagen3.jpg", sintomas: "Síntomas de la planta 3", recomendaciones: "Recomendaciones para la planta 3", causas: "Causas posibles de la planta 3", medidasPreventivas: "Medidas preventivas para la planta 3" }
  ];

  // Función para crear una tarjeta de planta
  function crearTarjetaPlanta(planta) {
    var cardHtml = '<div class="col-md-6">' +
                      '<div class="card">' +
                        '<div class="row no-gutters">' +
                          '<div class="col-md-6">' +
                            '<img src="' + planta.imagen + '" class="card-img" alt="' + planta.nombre + '">' +
                          '</div>' +
                          '<div class="col-md-6">' +
                            '<div class="card-body">' +
                              '<h5 class="card-title">' + planta.nombre + '</h5>' +
                              '<p class="card-text">Enfermedad: ' + planta.enfermedad + '</p>' +
                              '<p class="card-text">' + planta.resumen + '</p>' +
                              '<p class="card-text">Síntomas: ' + planta.sintomas + '</p>' +
                              '<p class="card-text">Recomendaciones: ' + planta.recomendaciones + '</p>' +
                              '<p class="card-text">Causas: ' + planta.causas + '</p>' +
                              '<p class="card-text">Medidas Preventivas: ' + planta.medidasPreventivas + '</p>' +
                            '</div>' +
                          '</div>' +
                        '</div>' +
                      '</div>' +
                    '</div>';
    return cardHtml;
  }

  // Función para manejar la búsqueda de plantas
  function buscarPlantas(termino) {
    // Limpiar los resultados anteriores
    $('#resultadosBusqueda').empty();

    // Filtrar las plantas que coincidan con el término de búsqueda
    var resultados = plantas.filter(function(planta) {
      return planta.nombre.toLowerCase().includes(termino.toLowerCase()) ||
             planta.enfermedad.toLowerCase().includes(termino.toLowerCase());
    });

    // Crear tarjetas para los resultados
    resultados.forEach(function(planta) {
      var tarjetaPlanta = crearTarjetaPlanta(planta);
      $('#resultadosBusqueda').append(tarjetaPlanta);
    });
  }

  // Evento de cambio en el campo de búsqueda
  $('#buscarPlantas').on('input', function() {
    var termino = $(this).val();
    buscarPlantas(termino);
  });
});


