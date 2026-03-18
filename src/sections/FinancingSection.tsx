import { useState } from 'react';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

const presets = [10000, 20000, 30000, 50000, 75000, 100000];
const terms = [3, 6, 9, 12];

export default function FinancingSection() {
  const [amount, setAmount] = useState(30000);
  const [months, setMonths] = useState(12);

  const monthly = Math.round(amount / months);

  return (
    <section className="financing" id="financiamiento">
      <div className="section-container">
        <div className="financing__grid">
          <div className="financing__info">
            <span className="section-eyebrow">✦ Facilidades de Pago</span>
            <RevealText tag="h2" className="section-title">
              Tu Hogar, A Tu Ritmo
            </RevealText>
            <p className="section-subtitle">
              Calcula tus cuotas mensuales. Ofrecemos planes de financiamiento
              flexibles para que lleves todo lo que necesitas hoy.
            </p>

            <div className="financing__highlights">
              <div className="financing__highlight">
                <span>💳</span>
                <div>
                  <strong>Sin interés</strong>
                  <p>Hasta 12 cuotas*</p>
                </div>
              </div>
              <div className="financing__highlight">
                <span>✅</span>
                <div>
                  <strong>Aprobación rápida</strong>
                  <p>Respuesta en minutos</p>
                </div>
              </div>
              <div className="financing__highlight">
                <span>📋</span>
                <div>
                  <strong>Requisitos mínimos</strong>
                  <p>Cédula y comprobante</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="financing__calc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <h3 className="financing__calc-title">Calculadora de Cuotas</h3>

            <div className="financing__field">
              <label>Monto de la compra</label>
              <div className="financing__presets">
                {presets.map((p) => (
                  <button
                    key={p}
                    className={`financing__preset ${amount === p ? 'financing__preset--active' : ''}`}
                    onClick={() => setAmount(p)}
                  >
                    RD$ {p.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="range"
                min={5000}
                max={150000}
                step={1000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="financing__slider"
              />
              <div className="financing__range-labels">
                <span>RD$ 5,000</span>
                <span className="financing__amount">RD$ {amount.toLocaleString()}</span>
                <span>RD$ 150,000</span>
              </div>
            </div>

            <div className="financing__field">
              <label>Plazo en meses</label>
              <div className="financing__terms">
                {terms.map((t) => (
                  <button
                    key={t}
                    className={`financing__term ${months === t ? 'financing__term--active' : ''}`}
                    onClick={() => setMonths(t)}
                  >
                    {t} meses
                  </button>
                ))}
              </div>
            </div>

            <div className="financing__result">
              <span className="financing__result-label">Tu cuota mensual sería</span>
              <motion.span
                className="financing__result-amount"
                key={`${amount}-${months}`}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                RD$ {monthly.toLocaleString()}
              </motion.span>
              <span className="financing__result-detail">{months} cuotas de RD$ {monthly.toLocaleString()}</span>
            </div>

            <MagneticButton
              href={`https://wa.me/18494731483?text=${encodeURIComponent(`Hola Mentol Deluxe! Me interesa un financiamiento de RD$ ${amount.toLocaleString()} a ${months} meses (RD$ ${monthly.toLocaleString()}/mes).`)}`}
              className="btn-primary financing__cta"
            >
              Solicitar Financiamiento →
            </MagneticButton>
            <p className="financing__disclaimer">*Sujeto a aprobación. Consulta condiciones en tienda.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
