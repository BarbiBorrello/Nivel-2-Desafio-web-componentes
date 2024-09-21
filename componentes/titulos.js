const agregarTitulos = async () => {
  try {
    const response = await fetch(
      "https://cdn.contentful.com/spaces/oajnqrmn5by3/environments/master/entries?access_token=KD3qjA5djqjXhM8P0RCHcThgepUXS8UmRxQmfOmh64U&content_type=titulos"
    );

    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }

    const data = await response.json();

    if (data.items.length === 0) {
      throw new Error("No se encontraron títulos en la respuesta");
    }

    const serviciosTitulo =
      data.items[0].fields.titulo + data.items[0].fields.titulo2;
    const portfolioTitulo =
      data.items[1].fields.titulo + data.items[1].fields.titulo2;

    const path = window.location.pathname;

    if (path === "/servicios.html" || path === "/index.html") {
      const serviciosContainer = document.querySelector(
        ".servicios-titulos-container"
      );
      const template = document.getElementById("servicios-titulo");

      if (serviciosContainer && template) {
        const clone = document.importNode(template.content, true);

        clone.querySelector(".titulo1").textContent =
          data.items[0].fields.titulo;
        clone.querySelector(".titulo2").textContent =
          data.items[0].fields.titulo2;

        serviciosContainer.appendChild(clone);
      }
    }

    console.log(path);

    if (path === "/portfolio.html") {
      const portfolioContainer = document.querySelector(
        ".portfolio-titulos-container"
      );

      const template = document.getElementById("portfolio-titulo");

      if (portfolioContainer && template) {
        const clone = document.importNode(template.content, true);

        clone.querySelector(".titulo1").textContent =
          data.items[1].fields.titulo;
        clone.querySelector(".titulo2").textContent =
          data.items[1].fields.titulo2;

        portfolioContainer.appendChild(clone);
      } else {
        console.error("El contenedor de portfolio o el template no existen");
      }
    }
  } catch (error) {
    console.error("Error al agregar títulos:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  agregarTitulos();
});
