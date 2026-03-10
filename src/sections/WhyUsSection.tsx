import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

const features = [
  { icon: '💰', title: 'Precios Bajos Garantizados', desc: 'Donde los precios bajos es lo primero. Siempre.' },
  { icon: '🚚', title: 'Entrega Mismo Día', desc: 'Recibe tu compra el mismo día en Azua y zonas cercanas.' },
  { icon: '🏠', title: 'Transporte a Todo el País', desc: 'Llevamos tus muebles a cualquier provincia de RD.' },
  { icon: '⏰', title: 'Abierto Todos los Días', desc: 'Lunes a Domingo de 8:00AM a 6:00PM para servirte.' },
];

export default function WhyUsSection() {
  return (
    <section className="whyus" id="nosotros">
      <div className="section-container">
        <div className="whyus__grid">
          {/* Imagen izquierda con decoración */}
          <div className="whyus__image-side">
            {/* Imagen principal */}
            <motion.div
              className="whyus__image-wrap"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
            >
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80"
                alt="Interior moderno de hogar"
                className="whyus__image"
              />
            </motion.div>

            {/* Imagen secundaria superpuesta */}
            <motion.div
              className="whyus__image-secondary"
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
            >
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80"
                alt="Decoración de hogar"
                className="whyus__image-small"
              />
            </motion.div>

            {/* Badge de experiencia */}
            <motion.div
              className="whyus__badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
            >
              <span className="whyus__badge-number">1786+</span>
              <span className="whyus__badge-label">Seguidores en Instagram</span>
            </motion.div>

            {/* Acento decorativo verde */}
            <div className="whyus__accent-bar" />
          </div>

          {/* Contenido derecha */}
          <div className="whyus__content">
            <span className="section-eyebrow whyus__eyebrow">✦ Por Qué Elegirnos</span>
            <RevealText tag="h2" className="section-title--dark">
              Por Qué Elegir Mentol
            </RevealText>
            <p className="whyus__intro">
              Más de miles de familias en Azua y todo el país confían en nosotros
              para transformar sus hogares con los mejores muebles y electrodomésticos.
            </p>

            <motion.div
              className="whyus__features"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  className="whyus__feature"
                  variants={itemVariants}
                >
                  <span className="whyus__feature-icon">{f.icon}</span>
                  <div>
                    <h4 className="whyus__feature-title">{f.title}</h4>
                    <p className="whyus__feature-desc">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
