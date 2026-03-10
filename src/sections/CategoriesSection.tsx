import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

const categories = [
  {
    icon: '🛋️',
    title: 'Salas & Sofás',
    desc: 'Diseños modernos para tu sala de estar',
    color: '#FF6D00',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80',
  },
  {
    icon: '🛏️',
    title: 'Cuartos & Camas',
    desc: 'Habitaciones completas con estilo',
    color: '#00C853',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&q=80',
  },
  {
    icon: '🍽️',
    title: 'Comedores',
    desc: 'Mesas y sillas para toda la familia',
    color: '#FF6D00',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80',
  },
  {
    icon: '❄️',
    title: 'Electrodomésticos',
    desc: 'Neveras, lavadoras, aires acondicionados',
    color: '#00C853',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
  },
  {
    icon: '🪑',
    title: 'Oficinas',
    desc: 'Escritorios y sillas de trabajo',
    color: '#FF6D00',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80',
  },
  {
    icon: '💡',
    title: 'Decoración',
    desc: 'Lámparas, cuadros y accesorios',
    color: '#00C853',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80',
  },
];

export default function CategoriesSection() {
  return (
    <section className="categories" id="categorias">
      <div className="section-container">
        <span className="section-eyebrow">✦ Nuestras Categorías</span>
        <RevealText tag="h2" className="section-title">
          Todo Para Tu Hogar En Un Solo Lugar
        </RevealText>
        <p className="section-subtitle">
          Desde muebles de sala hasta electrodomésticos, todo con la mejor calidad
          y a precios que no encontrarás en otro lugar.
        </p>

        <motion.div
          className="categories__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              className="category-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="category-card__img"
                loading="lazy"
              />
              <div className="category-card__overlay">
                <span className="category-card__icon">{cat.icon}</span>
                <h3 className="category-card__title">{cat.title}</h3>
                <p className="category-card__desc">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
