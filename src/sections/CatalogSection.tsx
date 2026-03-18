import { useState } from 'react';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import QuickViewModal from '../components/QuickViewModal';
import { useQuote, type Product } from '../context/QuoteContext';
import { allProducts, categories } from '../data/products';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [quickView, setQuickView] = useState<Product | null>(null);
  const { addItem } = useQuote();

  const filtered = activeCategory === 'Todos'
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  return (
    <section className="catalog" id="catalogo">
      <div className="section-container">
        <div className="catalog__header">
          <span className="section-eyebrow">✦ Catálogo Completo</span>
          <RevealText tag="h2" className="section-title">
            Explora Nuestros Productos
          </RevealText>
          <p className="section-subtitle">
            Encuentra exactamente lo que necesitas para tu hogar.
            Agrega productos a tu cotización y envíala por WhatsApp.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="catalog__tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`catalog__tab ${activeCategory === cat ? 'catalog__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          className="catalog__grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              className="catalog-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              layout
            >
              <div className="catalog-card__image-wrap" onClick={() => setQuickView(product)}>
                <img src={product.image} alt={product.name} className="catalog-card__image" loading="lazy" />
                {product.oldPrice && (
                  <span className="catalog-card__badge">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </span>
                )}
                <div className="catalog-card__quick-view">
                  <span>Vista Rápida</span>
                </div>
              </div>

              <div className="catalog-card__body">
                <span className="catalog-card__category">{product.category}</span>
                <h3 className="catalog-card__name">{product.name}</h3>
                <div className="catalog-card__pricing">
                  {product.oldPrice && (
                    <span className="catalog-card__old-price">RD$ {product.oldPrice.toLocaleString()}</span>
                  )}
                  <span className="catalog-card__price">RD$ {product.price.toLocaleString()}</span>
                </div>
                <p className="catalog-card__monthly">
                  💳 Desde RD$ {Math.round(product.price / 12).toLocaleString()}/mes
                </p>
                <button
                  className="catalog-card__add"
                  onClick={() => addItem(product)}
                >
                  + Agregar a Cotización
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </section>
  );
}
