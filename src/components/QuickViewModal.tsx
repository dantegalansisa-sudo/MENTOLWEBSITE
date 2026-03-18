import { motion, AnimatePresence } from 'framer-motion';
import { useQuote, type Product } from '../context/QuoteContext';
import MagneticButton from './MagneticButton';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: Props) {
  const { addItem } = useQuote();

  if (!product) return null;

  const monthlyPayment = Math.round(product.price / 12);

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            className="qv-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="qv-modal"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button className="qv-modal__close" onClick={onClose} aria-label="Cerrar">✕</button>

            <div className="qv-modal__grid">
              <div className="qv-modal__image-wrap">
                <img src={product.image} alt={product.name} className="qv-modal__image" />
                {product.oldPrice && (
                  <span className="qv-modal__badge">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </span>
                )}
              </div>

              <div className="qv-modal__info">
                <span className="qv-modal__category">{product.category}</span>
                <h3 className="qv-modal__name">{product.name}</h3>

                <div className="qv-modal__pricing">
                  {product.oldPrice && (
                    <span className="qv-modal__old-price">RD$ {product.oldPrice.toLocaleString()}</span>
                  )}
                  <span className="qv-modal__price">RD$ {product.price.toLocaleString()}</span>
                </div>

                <div className="qv-modal__financing">
                  <span className="qv-modal__financing-icon">💳</span>
                  <div>
                    <strong>Desde RD$ {monthlyPayment.toLocaleString()}/mes</strong>
                    <span>12 cuotas sin interés*</span>
                  </div>
                </div>

                <ul className="qv-modal__features">
                  <li>✓ Entrega el mismo día en Azua</li>
                  <li>✓ Transporte a todo el país</li>
                  <li>✓ Garantía de calidad</li>
                  <li>✓ Instalación disponible</li>
                </ul>

                <div className="qv-modal__actions">
                  <MagneticButton
                    className="btn-primary"
                    onClick={() => { addItem(product); onClose(); }}
                  >
                    Agregar a Cotización
                  </MagneticButton>
                  <a
                    href={`https://wa.me/18494731483?text=${encodeURIComponent(`Hola Mentol Deluxe! Me interesa: ${product.name} a RD$ ${product.price.toLocaleString()}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
