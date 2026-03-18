import { motion } from 'framer-motion';

const brands = [
  { name: 'Samsung', letter: 'S' },
  { name: 'LG', letter: 'LG' },
  { name: 'Whirlpool', letter: 'W' },
  { name: 'Mabe', letter: 'M' },
  { name: 'General Electric', letter: 'GE' },
  { name: 'Frigidaire', letter: 'F' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function BrandsSection() {
  return (
    <section className="brands">
      <div className="section-container">
        <p className="brands__label">Marcas de confianza que encontrarás en nuestra tienda</p>
        <motion.div
          className="brands__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              className="brands__item"
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0,200,83,0.25)' }}
            >
              <span className="brands__letter">{brand.letter}</span>
              <span className="brands__name">{brand.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
