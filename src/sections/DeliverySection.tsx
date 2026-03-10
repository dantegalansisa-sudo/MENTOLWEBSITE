import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { useParallax } from '../hooks/useParallax';

const coverage = [
  '✓ Azua (Entrega el mismo día)',
  '✓ Santo Domingo',
  '✓ Santiago',
  '✓ San Cristóbal',
  '✓ Baní',
  '✓ Todo el país — consulta disponibilidad',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function DeliverySection() {
  const { ref, y } = useParallax(50);

  return (
    <section className="delivery">
      <div className="section-container">
        <div className="delivery__grid">
          {/* Imagen izquierda con parallax */}
          <div className="delivery__image-side">
            <div ref={ref} className="delivery__image-wrap">
              <motion.img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=700&q=80"
                alt="Hogar con muebles entregados"
                className="delivery__image"
                style={{ y }}
              />
            </div>

            {/* Badge de cobertura */}
            <motion.div
              className="delivery__badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            >
              <span className="delivery__badge-icon">🇩🇴</span>
              <span className="delivery__badge-text">Cobertura en toda la<br /><strong>República Dominicana</strong></span>
            </motion.div>
          </div>

          {/* Contenido derecha */}
          <div className="delivery__content">
            <span className="section-eyebrow">✦ Cobertura Nacional</span>
            <RevealText tag="h2" className="section-title">
              Llevamos Tu Hogar A Donde Estés
            </RevealText>
            <p className="section-subtitle">
              No importa dónde te encuentres en República Dominicana,
              nosotros te llevamos tus muebles y electrodomésticos.
            </p>

            <motion.ul
              className="delivery__list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {coverage.map((item) => (
                <motion.li
                  key={item}
                  className="delivery__list-item"
                  variants={itemVariants}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <MagneticButton
                href="https://wa.me/18494731483?text=Quiero%20informaci%C3%B3n%20sobre%20env%C3%ADos"
                className="btn-primary"
              >
                Consultar Envío →
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
