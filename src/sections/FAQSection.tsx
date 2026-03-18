import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';

const faqs = [
  {
    q: '¿Hacen entrega el mismo día?',
    a: 'Sí, en Azua y zonas cercanas realizamos entregas el mismo día de la compra. Para otras provincias, coordinamos el envío lo más rápido posible.',
  },
  {
    q: '¿Realizan envíos a todo el país?',
    a: 'Sí, contamos con transporte disponible a todas las provincias de República Dominicana. El costo de envío varía según la distancia.',
  },
  {
    q: '¿Cuáles son las formas de pago?',
    a: 'Aceptamos efectivo, transferencia bancaria y tarjetas de crédito/débito. También ofrecemos planes de financiamiento para tu comodidad.',
  },
  {
    q: '¿Tienen garantía en los productos?',
    a: 'Todos nuestros productos cuentan con garantía. Muebles con garantía de calidad y electrodomésticos con garantía del fabricante.',
  },
  {
    q: '¿Puedo ver los productos antes de comprar?',
    a: 'Por supuesto. Visítanos en nuestra tienda en Calle Emilio Prudom esq. 30 de Marzo, Azua. Abiertos de Lunes a Domingo, 8AM a 6PM.',
  },
  {
    q: '¿Ofrecen servicio de instalación?',
    a: 'Sí, ofrecemos servicio de instalación y armado de muebles. Nuestro equipo se encarga de que todo quede perfecto en tu hogar.',
  },
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="section-container">
        <div className="faq__layout">
          <div className="faq__header">
            <span className="section-eyebrow">✦ Preguntas Frecuentes</span>
            <RevealText tag="h2" className="section-title">
              ¿Tienes Dudas? Te Ayudamos
            </RevealText>
            <p className="section-subtitle">
              Encuentra respuestas a las preguntas más comunes sobre
              nuestros productos y servicios.
            </p>
          </div>

          <motion.div
            className="faq__list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
                variants={itemVariants}
              >
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.q}</span>
                  <motion.span
                    className="faq__icon"
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      className="faq__answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
