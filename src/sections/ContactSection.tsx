import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

interface FormErrors {
  nombre?: string;
  telefono?: string;
  producto?: string;
}

export default function ContactSection() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    producto: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = 'Por favor ingresa tu nombre';
    if (!form.telefono.trim()) {
      newErrors.telefono = 'Por favor ingresa tu teléfono';
    } else if (form.telefono.replace(/\D/g, '').length < 7) {
      newErrors.telefono = 'Ingresa un número de teléfono válido';
    }
    if (!form.producto) newErrors.producto = 'Selecciona un producto de interés';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `Hola Mentol Deluxe! Soy ${form.nombre}. Tel: ${form.telefono}. Me interesa: ${form.producto}. ${form.mensaje}`;
    window.open(
      `https://wa.me/18494731483?text=${encodeURIComponent(text)}`,
      '_blank'
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact" id="contacto">
      <div className="section-container">
        <div className="contact__grid">
          {/* Info izquierda */}
          <div className="contact__info">
            <span className="section-eyebrow">✦ Contáctanos</span>
            <RevealText tag="h2" className="section-title">
              Hablemos De Tu Próximo Proyecto
            </RevealText>
            <p className="section-subtitle">
              Visítanos en nuestra tienda o escríbenos por WhatsApp.
              Estamos listos para ayudarte.
            </p>

            <div className="contact__details">
              <motion.div
                className="contact__detail"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="contact__detail-icon">📍</span>
                <div>
                  <strong>Dirección</strong>
                  <p>Calle Emilio Prudom esq. 30 de Marzo, Azua 71000, RD</p>
                </div>
              </motion.div>

              <motion.div
                className="contact__detail"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="contact__detail-icon">📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <p>(849) 473-1483</p>
                </div>
              </motion.div>

              <motion.div
                className="contact__detail"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="contact__detail-icon">⏰</span>
                <div>
                  <strong>Horario</strong>
                  <p>Lunes – Domingo, 8:00AM – 6:00PM</p>
                </div>
              </motion.div>

              <motion.div
                className="contact__detail"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="contact__detail-icon">📸</span>
                <div>
                  <strong>Instagram</strong>
                  <p>@mentolelectromueblesazua</p>
                </div>
              </motion.div>
            </div>

            {/* Google Maps */}
            <motion.div
              className="contact__map"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <iframe
                title="Ubicación de Mentol Electro muebles Deluxe en Azua"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d-70.7289!3d18.4535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea56c1c1c1c1c1c%3A0x0!2sCalle+Emilio+Prudom%2C+Azua+71000!5e0!3m2!1ses!2sdo!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Formulario derecha */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            noValidate
          >
            <h3 className="contact__form-title">Envíanos un mensaje</h3>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="contact__success"
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.3 }}
                  role="alert"
                >
                  <span>✅</span>
                  <p>¡Mensaje enviado! Te redirigimos a WhatsApp para completar tu consulta.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className={`contact__field ${errors.nombre ? 'contact__field--error' : ''}`}>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                aria-invalid={!!errors.nombre}
              />
              {errors.nombre && (
                <span className="contact__error" id="nombre-error" role="alert">
                  {errors.nombre}
                </span>
              )}
            </div>

            <div className={`contact__field ${errors.telefono ? 'contact__field--error' : ''}`}>
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="(809) 000-0000"
                aria-describedby={errors.telefono ? 'telefono-error' : undefined}
                aria-invalid={!!errors.telefono}
              />
              {errors.telefono && (
                <span className="contact__error" id="telefono-error" role="alert">
                  {errors.telefono}
                </span>
              )}
            </div>

            <div className={`contact__field ${errors.producto ? 'contact__field--error' : ''}`}>
              <label htmlFor="producto">Producto de interés</label>
              <select
                id="producto"
                name="producto"
                value={form.producto}
                onChange={handleChange}
                aria-describedby={errors.producto ? 'producto-error' : undefined}
                aria-invalid={!!errors.producto}
              >
                <option value="">Selecciona una categoría</option>
                <option value="Salas & Sofás">Salas & Sofás</option>
                <option value="Cuartos & Camas">Cuartos & Camas</option>
                <option value="Comedores">Comedores</option>
                <option value="Electrodomésticos">Electrodomésticos</option>
                <option value="Oficinas">Oficinas</option>
                <option value="Decoración">Decoración</option>
              </select>
              {errors.producto && (
                <span className="contact__error" id="producto-error" role="alert">
                  {errors.producto}
                </span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="mensaje">Mensaje <span className="contact__optional">(opcional)</span></label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos qué necesitas..."
                rows={4}
              />
            </div>

            <MagneticButton className="btn-primary contact__submit">
              Enviar por WhatsApp →
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
