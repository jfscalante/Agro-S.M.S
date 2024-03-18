window.onload = function() {
    setTimeout(function() {
      alert("Bienvenido a Agro S.M.S, Aplicativo web donde encontraras todo acerca de tu cultivo!");
    }, 2000);
  };

  // scroll

  // Obtener el contenedor con scroll
var scrollableContent = document.getElementById('scrollable-content');

// Ajustar el tamaño de la barra de scroll al cambiar el tamaño de la ventana
window.addEventListener('resize', function() {
  // Calcular el ancho de la barra de scroll
  var scrollbarWidth = scrollableContent.offsetWidth - scrollableContent.clientWidth;

  // Ajustar el padding derecho del contenedor para evitar que se superponga el contenido
  scrollableContent.style.paddingRight = scrollbarWidth + 'px';
});

// Llamar al evento resize para ajustar el tamaño de la barra de scroll inicialmente
window.dispatchEvent(new Event('resize'));

