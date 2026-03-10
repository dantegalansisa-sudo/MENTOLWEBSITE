import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { number: 1786, suffix: '+', label: 'Seguidores en Instagram' },
  { number: 6, suffix: '', label: 'Categorías de Productos' },
  { number: 100, suffix: '%', label: 'Transporte Nacional' },
  { number: 7, suffix: '', label: 'Días a la Semana' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function StatsSection() {
  return (
    <section className="stats">
      <motion.div
        className="stats__grid section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} className="stats__item" variants={itemVariants}>
            <div className="stats__number">
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
            </div>
            <div className="stats__label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
