// Base de dato
const mesasDisponibles = 5;

// Función disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`Reserva confirmada para ${mesasSolicitadas} mesas.`);
      } else {
        reject(`Lo siento, no hay suficientes mesas disponibles. Mesas solicitadas: ${mesasSolicitadas}, Mesas disponibles: ${mesasDisponibles}`);
      }
    }, 2000);  //(2 segundos)
  });
}

//correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const envioExitoso = Math.random() > 0.3;

      if (envioExitoso) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
      } else {
        reject(`Error al enviar el correo a ${nombreCliente}.`);
      }
    }, 1500);  //(1.5 segundos)
  });
}

// Función para manejar reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    console.log("Enviando confirmación por correo...");
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);

  } catch (error) {
    console.log("Error:", error);
  }
}

//Prueba
hacerReserva("Angel Islas", 3);  
hacerReserva("Dayane Lucia", 6);  
hacerReserva("Alexis Islas", 9);