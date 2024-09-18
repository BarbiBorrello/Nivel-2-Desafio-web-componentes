function addHeroContent(params = {}) {
  const templateHero = document.querySelector("#hero-template");

  templateHero.content.querySelector(".hero-titulo .barbi").textContent =
    params.titulo;
  templateHero.content.querySelector(".hero-description").textContent =
    params.descripcion;
  templateHero.content.querySelector(".hero-img").src = params.img;

  const containerHero = document.querySelector(".hero-container");

  const clone = document.importNode(templateHero.content, true);
  containerHero.appendChild(clone);
}

function getHero() {
  return fetch(
    "https://cdn.contentful.com/spaces/oajnqrmn5by3/environments/master/entries?access_token=SZk4ZqlDT45iYhPqnEtwQsXAOGJKluxjCsu9vBGhnqs&content_type=hero"
  )
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        const assetId = item.fields.imagenHero.sys.id;

        const asset = data.includes.Asset.find((a) => a.sys.id === assetId);

        return {
          titulo: item.fields.title,
          descripcion: item.fields.descripcion,
          img: asset ? asset.fields.file.url : "",
        };
      });
      return fieldsCollections;
    });
}
getHero().then(function (hero) {
  for (const h of hero) {
    addHeroContent(h);
  }
});
