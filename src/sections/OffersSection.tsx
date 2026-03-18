import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

const offers = [
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80',
    tag: 'Oferta',
    name: 'Juego de Sala Moderno',
    oldPrice: 'RD$ 45,900',
    newPrice: 'RD$ 34,900',
    discount: '-24%',
    colors: ['#795548', '#9E9E9E', '#1B5E20'],
  },
  {
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&q=80',
    tag: 'Más Vendido',
    name: 'Set de Dormitorio Completo',
    oldPrice: 'RD$ 38,500',
    newPrice: 'RD$ 28,900',
    discount: '-25%',
    colors: ['#4E342E', '#F5F5DC', '#616161'],
  },
  {
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80',
    tag: 'Nuevo',
    name: 'Comedor 6 Sillas',
    oldPrice: 'RD$ 32,000',
    newPrice: 'RD$ 24,500',
    discount: '-23%',
    colors: ['#5D4037', '#D7CCC8', '#37474F'],
  },
  {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
    tag: 'Oferta',
    name: 'Nevera Inverter 18 cu.ft',
    oldPrice: 'RD$ 42,000',
    newPrice: 'RD$ 33,900',
    discount: '-19%',
    colors: ['#B0BEC5', '#E0E0E0', '#263238'],
  },
];

function useCountdown() {
  const getEndOfWeek = () => {
    const now = new Date();
    const daysUntilSunday = 7 - now.getDay();
    const end = new Date(now);
    end.setDate(now.getDate() + (daysUntilSunday === 0 ? 7 : daysUntilSunday));
    end.setHours(18, 0, 0, 0);
    if (now > end) {
      end.setDate(end.getDate() + 7);
    }
    return end;
  };

  const calcTimeLeft = () => {
    const diff = getEndOfWeek().getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

export default function OffersSection() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section className="offers" id="ofertas">
      <div className="section-container">
        <div className="offers__header">
          <div>
            <span className="section-eyebrow">✦ Ofertas Especiales</span>
            <RevealText tag="h2" className="section-title">
              Ofertas De La Semana
            </RevealText>
            <p className="section-subtitle">
              Aprovecha estos precios especiales por tiempo limitado.
              Entrega el mismo día en Azua.
            </p>
          </div>
          <div className="offers__right">
            <div className="offers__countdown" aria-label="Tiempo restante de la oferta">
              <span className="offers__countdown-label">Termina en:</span>
              <div className="offers__countdown-timer">
                <div className="offers__countdown-unit">
                  <span className="offers__countdown-number">{String(days).padStart(2, '0')}</span>
                  <span className="offers__countdown-text">Días</span>
                </div>
                <span className="offers__countdown-sep">:</span>
                <div className="offers__countdown-unit">
                  <span className="offers__countdown-number">{String(hours).padStart(2, '0')}</span>
                  <span className="offers__countdown-text">Hrs</span>
                </div>
                <span className="offers__countdown-sep">:</span>
                <div className="offers__countdown-unit">
                  <span className="offers__countdown-number">{String(minutes).padStart(2, '0')}</span>
                  <span className="offers__countdown-text">Min</span>
                </div>
                <span className="offers__countdown-sep">:</span>
                <div className="offers__countdown-unit">
                  <span className="offers__countdown-number">{String(seconds).padStart(2, '0')}</span>
                  <span className="offers__countdown-text">Seg</span>
                </div>
              </div>
            </div>
            <MagneticButton
              href="https://wa.me/18494731483?text=Hola%20Mentol%20Deluxe!%20Quiero%20información%20sobre%20las%20ofertas."
              className="btn-primary offers__cta-desktop"
            >
              Ver Todas →
            </MagneticButton>
          </div>
        </div>

        <motion.div
          className="offers__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {offers.map((product) => (
            <motion.div
              key={product.name}
              className="product-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className="product-card__image-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card__image"
                  loading="lazy"
                />
                <span className="product-card__discount">{product.discount}</span>
                <span className="product-card__tag">{product.tag}</span>
              </div>

              <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                <div className="product-card__pricing">
                  <span className="product-card__old-price">{product.oldPrice}</span>
                  <span className="product-card__new-price">{product.newPrice}</span>
                </div>
                <div className="product-card__colors">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="product-card__color"
                      style={{ background: color }}
                    />
                  ))}
                </div>
                <a
                  href={`https://wa.me/18494731483?text=${encodeURIComponent(`Hola Mentol Deluxe! Me interesa: ${product.name} a ${product.newPrice}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-card__cta"
                >
                  Consultar Precio →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="offers__cta-mobile">
          <MagneticButton
            href="https://wa.me/18494731483?text=Hola%20Mentol%20Deluxe!%20Quiero%20información%20sobre%20las%20ofertas."
            className="btn-primary"
          >
            Ver Todas Las Ofertas →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
