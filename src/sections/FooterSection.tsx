export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer__grid">
          {/* Logo + descripción */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-m">M</span>
              <span className="footer__logo-text">entol</span>
              <span className="footer__logo-sub">ELECTRO MUEBLES DELUXE</span>
            </a>
            <p className="footer__desc">
              Donde los precios bajos es lo primero. Tu tienda de confianza
              en Azua para muebles y electrodomésticos.
            </p>
          </div>

          {/* Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navegación</h4>
            <a href="#" className="footer__link">Inicio</a>
            <a href="#categorias" className="footer__link">Categorías</a>
            <a href="#nosotros" className="footer__link">Nosotros</a>
            <a href="#contacto" className="footer__link">Contacto</a>
          </div>

          {/* Categorías */}
          <div className="footer__col">
            <h4 className="footer__col-title">Categorías</h4>
            <a href="#categorias" className="footer__link">Salas & Sofás</a>
            <a href="#categorias" className="footer__link">Cuartos & Camas</a>
            <a href="#categorias" className="footer__link">Comedores</a>
            <a href="#categorias" className="footer__link">Electrodomésticos</a>
          </div>

          {/* Contacto */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <p className="footer__info">📍 Calle Emilio Prudom esq. 30 de Marzo, Azua</p>
            <p className="footer__info">📞 (849) 473-1483</p>
            <p className="footer__info">⏰ Lu–Dom 8AM–6PM</p>
            <a
              href="https://www.instagram.com/mentolelectromueblesazua"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              📸 @mentolelectromueblesazua
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2025 Mentol Electro muebles Deluxe. Todos los derechos reservados.</p>
          <p className="footer__credit">
            Diseñado por{' '}
            <a
              href="https://nexixtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__nexix"
            >
              NEXIX Tech Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
