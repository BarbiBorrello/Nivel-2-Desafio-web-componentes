function initPage() {
  crearHeader();

  const logoHeader = document.querySelector(".logo__header");
  LogoComponente(logoHeader);

  const logoFooter = document.querySelector(".logo__footer");
  LogoComponente(logoFooter);

  crearFooter();
}

initPage();
