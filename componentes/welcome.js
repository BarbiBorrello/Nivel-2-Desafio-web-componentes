function addWelcomeContent(params = {}) {
  const templateWelcome = document.querySelector("#welcome-template");

  templateWelcome.content.querySelector(".welcome-titulo").textContent =
    params.title;
  templateWelcome.content.querySelector(".welcome-subtitulo").textContent =
    params.subtitle;

  const containerWelcome = document.querySelector(".welcome-container");

  const clone = document.importNode(templateWelcome.content, true);
  containerWelcome.appendChild(clone);
}

function getlWelcome() {
  return fetch(
    "https://cdn.contentful.com/spaces/oajnqrmn5by3/environments/master/entries?access_token=bhKiiCtV0VpjefOkKT04D-E22FqzKfSnYnXvyCB-dto&content_type=welcome"
  )
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      const fieldsCollections = data.items.map((item) => {
        return {
          title: item.fields.title.content[0].content[0].value,
          subtitle: item.fields.subTitle.content[0].content[0].value,
        };
      });
      return fieldsCollections;
    });
}

getlWelcome().then(function (welcome) {
  for (const w of welcome) {
    addWelcomeContent(w);
  }
});
