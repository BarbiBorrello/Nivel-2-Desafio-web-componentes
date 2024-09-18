const urlFondo =
  "https://cdn.contentful.com/spaces/oajnqrmn5by3/environments/master/entries?access_token=PvfTlrVHdT8FYIOvCUuRk3xq2DYATp8b2jvxjftQp0g&content_type=fondo";

fetch(urlFondo)
  .then((response) => response.json())
  .then((data) => {
    const fondoUrl = data.includes.Asset[0].fields.file.url;
    const contenedor = document.querySelector(".fondo");

    contenedor.style.backgroundImage = `url(${fondoUrl})`;
  })
  .catch((error) => console.error("Error al cargar el fondo:", error));
