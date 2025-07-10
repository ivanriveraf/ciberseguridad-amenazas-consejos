$(document).ready(function() {
  $('#contactoForm').on('submit', function(e) {
    e.preventDefault();
    alert('Formulario enviado correctamente.');
  });

  $('.test-respuesta').click(function() {
    const respuesta = $(this).text();
    if (respuesta === 'No') {
      $('#respuestaTest').text('¡Correcto! Nunca uses la misma contraseña.')
        .addClass('text-success')
        .removeClass('text-danger');
    } else {
      $('#respuestaTest').text('Incorrecto. Es un riesgo usar la misma contraseña.')
        .addClass('text-danger')
        .removeClass('text-success');
    }
  });
});
