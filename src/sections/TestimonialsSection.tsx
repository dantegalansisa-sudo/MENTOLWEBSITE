import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

const testimonials = [
  {
    name: 'Ana Martínez',
    location: 'Azua',
    text: 'Compré mi sala completa y la entregaron el mismo día. Los precios son los mejores de la zona. ¡Totalmente recomendado!',
    rating: 5,
  },
  {
    name: 'Carlos Reyes',
    location: 'Baní',
    text: 'Me enviaron los muebles hasta Baní sin problema. Excelente servicio y calidad increíble por el precio.',
    rating: 5,
  },
  {
    name: 'María López',
    location: 'Santo Domingo',
    text: 'La mejor tienda de muebles. Variedad, buenos precios y atención personalizada. Mi casa quedó hermosa.',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="testimonial__stars" role="img" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="testimonial__star" aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="section-container">
        <span className="section-eyebrow">✦ Testimonios</span>
        <RevealText tag="h2" className="section-title">
          Lo Que Dicen Nuestros Clientes
        </RevealText>
        <p className="section-subtitle">
          Miles de hogares transformados con la calidad y precios de Mentol Deluxe.
        </p>

        <motion.div
          className="testimonials__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <Stars count={t.rating} />
              <p className="testimonial__text">"{t.text}"</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial__name">{t.name}</div>
                  <div className="testimonial__location">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
