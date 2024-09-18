const crearSeccionContacto = () => {
  return `
    <section class="contacto">
      <div class="contacto-container">
        <div class="contacto-container-titulo">
          <div class="contacto-titulo">Escribime</div>
        </div>
        <form id="contact-form">
          <div class="form-container">
            <div class="form-group-input">
              <div class="form-group">
                <label class="nombre-label" for="nombre">Nombre</label>
                <input class="nombre-input" type="text" id="nombre" required placeholder="Tu nombre" />
              </div>
              <div class="form-group">
                <label class="email-label" for="email">Email</label>
                <input class="email-input" type="email" id="email" required placeholder="Tu @mail.com" />
              </div>
            </div>
            <div class="form-group">
              <label class="mensaje-label" for="mensajeTextarea">Mensaje</label>
              <textarea class="mensaje-textarea" id="mensajeTextarea" required></textarea>
            </div>
          </div>
          <button id="enviarButton" type="submit" class="boton">
            <div class="boton-contenido">Enviar</div>
          </button>
          <p id="resultado"></p>
        </form>
      </div>
    </section>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("seccion-contacto");
  contenedor.innerHTML = crearSeccionContacto();

  document
    .getElementById("contact-form")
    .addEventListener("submit", manejarEnvioFormulario);
});

const manejarEnvioFormulario = (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensajeTextarea").value;

  fetch("https://apx.school/api/utils/email-to-student", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      to: email,
      message: `Nombre: ${nombre}\nMensaje: ${mensaje}`,
    }),
  })
    .then((response) => {
      const resultado = document.getElementById("resultado");
      if (!response.ok) {
        throw new Error("Error en la respuesta");
      }
      return response.json();
    })
    .then((data) => {
      const resultado = document.getElementById("resultado");
      resultado.textContent = "Mensaje enviado con éxito!";
      resultado.style.display = "flex";
      resultado.style.color = "green";
      resultado.style.fontWeight = "bold";
      resultado.style.textAlign = "center";
    })
    .catch((error) => {
      const resultado = document.getElementById("resultado");
      resultado.textContent = "Error al enviar el mensaje.";
      resultado.style.display = "flex";
      resultado.style.color = "red";
      resultado.style.fontWeight = "bold";
      resultado.style.textAlign = "left";
    });
};
