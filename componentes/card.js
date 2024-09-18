const urlCard =
  "https://cdn.contentful.com/spaces/oajnqrmn5by3/environments/master/entries?access_token=T4Ropit0fz7VbZvGV86pmT5yxNRDLgEKxBq-SB1S5zA&content_type=card"; // Reemplaza con tu URL de Contentful

function renderCards(cards, page) {
  const container = document.querySelector(`.${page}-cards-container`);

  if (!container) {
    console.error(`El contenedor para ${page} no se encontró.`);
    return;
  }

  cards.forEach((card) => {
    const cardClone = document
      .getElementById("cards-template")
      .content.cloneNode(true);

    const img = cardClone.querySelector(".card-imagen");
    const titulo1 = cardClone.querySelector(".card-titulo");
    const descripcion = cardClone.querySelector(".card-text");

    fetch(
      `https://cdn.contentful.com/spaces/oajnqrmn5by3/environments/master/assets/${card.fields.imagen.sys.id}?access_token=T4Ropit0fz7VbZvGV86pmT5yxNRDLgEKxBq-SB1S5zA`
    )
      .then((response) => response.json())
      .then((imageData) => {
        img.src = imageData.fields.file.url;
        titulo1.textContent = card.fields.titulo;
        descripcion.textContent = card.fields.descripcion;

        container.appendChild(cardClone);
      })
      .catch((error) => console.error("Error al cargar la imagen:", error));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch(urlCard)
    .then((response) => response.json())
    .then((data) => {
      const indexCards = data.items.slice(3, 6);
      const serviciosCards = data.items.slice(3, 6);
      const portfolioCards = data.items.slice(0, 3);

      const currentPage = document.body.dataset.page;

      if (currentPage === "index") {
        renderCards(indexCards, "index");
      } else if (currentPage === "servicios") {
        renderCards(serviciosCards, "servicios");
      } else if (currentPage === "portfolio") {
        renderCards(portfolioCards, "portfolio");
      }
    })
    .catch((error) => console.error("Error al cargar las cards:", error));
});
