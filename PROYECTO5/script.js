document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  // Validaciones adicionales

  // Validación: El nombre debe tener al menos 3 caracteres
  if (nombre.length < 3) {
    alert('El nombre debe contener al menos 3 caracteres.');
    return;
  }

  // Validación: El correo debe contener un dominio específico (e.g., @empresa.com)
  const correoRegex = /^[^@\s]+@empresa\.com$/;
  if (!correoRegex.test(correo)) {
    alert('El correo debe ser del dominio @empresa.com');
    return;
  }

  // Validación: El teléfono debe tener 10 dígitos
  const telefonoRegex = /^\d{10}$/;
  if (!telefonoRegex.test(telefono)) {
    alert('El teléfono debe contener 10 dígitos.');
    return;
  }

  // Validación: Al menos un interés debe estar seleccionado
  if (intereses.length === 0) {
    alert('Debes seleccionar al menos un interés.');
    return;
  }

  // Validación: La fecha no debe ser anterior a la fecha actual
  const fechaActual = new Date().toISOString().split('T')[0];
  if (fecha < fechaActual) {
    alert('La fecha no puede ser anterior a la fecha actual.');
    return;
  }

  alert('Registro exitoso. ¡Gracias por registrarte!');
});
