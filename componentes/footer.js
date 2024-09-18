function crearFooter() {
  const footer = document.querySelector(".footer");

  const footerContent = `   <nav class="footer-navigation">
      <ul class="footer-navigation-list">
        <li class="footer-navigation-item">
          <img class="footer-navigation-img" src="./img/footer/home.png" alt="" />
          <a class="footer-navigation-link" href="index.html">Home</a>
        </li>
        <li class="footer-navigation-item">
          <img class="footer-navigation-img" src="./img/footer/user.png" alt="" />
          <a class="footer-navigation-link" href="#">Servicios</a>
        </li>
        <li class="footer-navigation-item">
          <img class="footer-navigation-img" src="./img/footer/phone.png" alt="" />
          <a class="footer-navigation-link" href="contacto.html">Contacto</a>
        </li>
      </ul>
    </nav>

    <div class="footer-socials">
      <a class="footer-socials-link" href="#" target="_blank">
        <img class="footer-socials-img" src="./img/footer/linkedin.png" alt="" />
      </a>
      <a class="footer-socials-link" href="#" target="_blank">
        <img class="footer-socials-img" src="./img/footer/github.png" alt="" />
      </a>
      <a class="footer-socials-link" href="#" target="_blank">
        <img class="footer-socials-img" src="./img/footer/twitter.png" alt="" />
      </a>
    </div>

    <div class="footer-copyright">
      <span class="footer-copyright-text">©2024 - </span>
      <a class="footer-copyright-link" href="https://apx.school" target="_blank">https://apx.school</a>
    </div>
  
    `;

  footer.innerHTML += footerContent;
}
