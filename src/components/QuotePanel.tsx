import { motion, AnimatePresence } from 'framer-motion';
import { useQuote } from '../context/QuoteContext';
import MagneticButton from './MagneticButton';

export default function QuotePanel() {
  const { items, isOpen, closePanel, removeItem, updateQty, clearAll, totalItems, totalPrice, sendWhatsApp } = useQuote();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="quote-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePanel}
          />

          {/* Panel */}
          <motion.div
            className="quote-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="quote-panel__header">
              <h3 className="quote-panel__title">
                Mi Cotización
                {totalItems > 0 && (
                  <span className="quote-panel__count">{totalItems}</span>
                )}
              </h3>
              <button className="quote-panel__close" onClick={closePanel} aria-label="Cerrar">
                ✕
              </button>
            </div>

            {items.length === 0 ? (
              <div className="quote-panel__empty">
                <span className="quote-panel__empty-icon">🛒</span>
                <p>Tu cotización está vacía</p>
                <span>Agrega productos desde el catálogo</span>
              </div>
            ) : (
              <>
                <div className="quote-panel__items">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      className="quote-item"
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <img src={item.image} alt={item.name} className="quote-item__img" />
                      <div className="quote-item__info">
                        <p className="quote-item__name">{item.name}</p>
                        <p className="quote-item__price">RD$ {(item.price * item.qty).toLocaleString()}</p>
                        <div className="quote-item__qty">
                          <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Menos">−</button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Más">+</button>
                        </div>
                      </div>
                      <button
                        className="quote-item__remove"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Eliminar ${item.name}`}
                      >
                        🗑
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="quote-panel__footer">
                  <div className="quote-panel__total">
                    <span>Total estimado</span>
                    <strong>RD$ {totalPrice.toLocaleString()}</strong>
                  </div>
                  <MagneticButton className="btn-primary quote-panel__send" onClick={sendWhatsApp}>
                    Enviar Cotización por WhatsApp →
                  </MagneticButton>
                  <button className="quote-panel__clear" onClick={clearAll}>
                    Vaciar cotización
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
