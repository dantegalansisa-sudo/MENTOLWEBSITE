import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const announcements = [
  '🚚 Entrega GRATIS en Azua — Compra hoy, recibe hoy',
  '🔥 Ofertas de la semana — Hasta 25% de descuento',
  '📦 Transporte disponible a TODO el país',
  '⏰ Abiertos Lu–Dom 8AM–6PM — ¡Te esperamos!',
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="announcement-bar">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="announcement-bar__text"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {announcements[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
