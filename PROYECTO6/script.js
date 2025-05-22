// Importamos Zod desde el objeto global
const { z } = window.Zod;

//Validación
const registerSchema = z.object({
  name: z.string().nonempty("El nombre es obligatorio."),
  email: z.string().email("El correo electrónico no es válido."),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
  };

  try {
    registerSchema.parse(formData);
    document.getElementById("errors").textContent = "";
    alert("¡Registro exitoso!");
    // Envío al servidor
  } catch (error) {
    if (error.errors) {
      const errorMessages = error.errors.map(e => e.message);
      document.getElementById("errors").textContent = errorMessages.join(" | ");
    }
  }
});
