function abrirYCerrarMenu() {
  const botonAbreVentanaEl = document.querySelector(".boton-abrir");
  const contenidoMenuEl = document.querySelector(".menu-contenido");
  const botonCierraVentanaEl = document.querySelector(".boton-cerrar");

  botonAbreVentanaEl.addEventListener("click", () => {
    contenidoMenuEl.style.display = "inherit";
    document.body.style.overflow = "clip";
  });

  botonCierraVentanaEl.addEventListener("click", () => {
    contenidoMenuEl.style.display = "";
    document.body.style.overflow = "auto";
  });
}

function crearHeader() {
  const header = document.querySelector(".header");

  const headerContent = `
    <nav class="menu-contenido-linksD">
    <ul class="menu-listD">
      <li class="menu-itemD">
        <a class="menu-linkD" href="./portfolio.html">Portfolio</a>
      </li>
      <li class="menu-itemD">
        <a class="menu-linkD" href="./servicios.html">Servicios</a>
      </li>
      <li class="menu-itemD">
        <a class="menu-linkD" href="./contacto.html">Contacto</a>
      </li>
    </ul>
    </nav>
    <button class="boton-abrir">
      <img class="boton-abrir-img" src="./img/header/menu.png" alt="" />
    </button>
    <div class="menu-contenido" style="display: none;"> <!-- Comienza oculto -->
      <div class="boton-cerrar-container">
        <button class="boton-cerrar">
          <img class="boton-cerrar-img" src="./img/header/close.png" alt="" />
        </button>
      </div>
      <nav class="menu-contenido-links">
        <ul class="menu-list">
          <li class="menu-item">
            <a class="menu-link" href="./portfolio.html">Portfolio</a>
          </li>
          <li class="menu-item">
            <a class="menu-link" href="./servicios.html">Servicios</a>
          </li>
          <li class="menu-item">
            <a class="menu-link" href="./contacto.html">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  `;

  header.innerHTML += headerContent;

  abrirYCerrarMenu();
}
