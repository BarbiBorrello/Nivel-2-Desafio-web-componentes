function LogoComponente(elemento) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
    <div class="logo__container">
     <a href="index.html" class="logo">Barbix</a> 
    </div>`;

  elemento.appendChild(componentEl);
}
