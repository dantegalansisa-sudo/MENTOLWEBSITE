# CLAUDE.md — Mentol Electro Muebles
## Proyecto NEXIX Tech Studio — Tienda de Muebles & Electrodomésticos
## ⚡ nexix-taste-skill NIVEL MÁXIMO ACTIVADO

---

## 0. LIMPIEZA INICIAL

```bash
rm -rf src/
npm install framer-motion
npm run dev
```

---

## 1. VISIÓN DE DISEÑO

**Mentol Electro Muebles** es la tienda de referencia en Azua, República Dominicana
para muebles y electrodomésticos. Slogan: *"Donde los precios bajos es lo primero."*
Transporte disponible a todo el país. Entrega el mismo día.

**Concepto visual: MODERN HOME SHOWROOM**
Inspirado en el template Okaso — fondo dark slate elegante (#2A3240),
tipografía bold blanca masiva, productos flotando sobre el fondo con
iluminación dramática. No es una tienda genérica — es un **showroom digital**.

**Paleta derivada del logo Mentol:**
- Verde vibrante del logo `#00C853` como acento primario
- Naranja cálido `#FF6D00` como acento secundario (energía, precios)
- Slate oscuro `#1E2530` como fondo — no negro puro, tiene profundidad

**Lo que la hace única:**
- Hero full viewport con imagen moderna de interior/mueble sobre fondo slate.
  Claude Code puede usar imágenes modernas de Unsplash para el hero —
  **se reemplazarán con fotos reales del showroom de Mentol después.**
- Floating product cards animadas con precio, igual que Okaso
- Badge animado "Entrega Mismo Día" que pulsa
- Sección de categorías con hover reveal
- Contador de productos/clientes atendidos

---

## 2. SISTEMA DE COLORES

```css
:root {
  /* Slate base — del template Okaso */
  --color-bg:           #1E2530;   /* Fondo principal */
  --color-bg-surface:   #252D3A;   /* Cards, navbar */
  --color-bg-elevated:  #2E3848;   /* Hover, inputs */
  --color-bg-light:     #F5F5F0;   /* Secciones alternas crema */

  /* Verde Mentol — del logo */
  --color-green:        #00C853;
  --color-green-dark:   #00A040;
  --color-green-glow:   rgba(0, 200, 83, 0.15);

  /* Naranja acento — precio/energía */
  --color-orange:       #FF6D00;
  --color-orange-light: #FF9100;
  --color-orange-glow:  rgba(255, 109, 0, 0.15);

  /* Gradientes */
  --gradient-green:     linear-gradient(135deg, #00C853 0%, #00E676 100%);
  --gradient-orange:    linear-gradient(135deg, #FF6D00 0%, #FF9100 100%);
  --gradient-hero:      linear-gradient(135deg, #1E2530 0%, #2A3240 100%);
  --gradient-card:      linear-gradient(145deg, #252D3A 0%, #2E3848 100%);

  /* Texto */
  --color-text:         #F0F4F8;
  --color-text-secondary: #8896A8;
  --color-text-muted:   #505A68;

  /* Bordes */
  --color-border:       rgba(255,255,255,0.07);
  --color-border-green: rgba(0,200,83,0.25);

  /* Sombras */
  --shadow-card:        0 8px 32px rgba(0,0,0,0.3);
  --shadow-green:       0 0 32px rgba(0,200,83,0.2);
  --shadow-product:     0 24px 60px rgba(0,0,0,0.5);

  /* RGB para cursor */
  --color-primary-rgb:  0, 200, 83;
}
```

---

## 3. TIPOGRAFÍAS

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Outfit', system-ui, sans-serif;  /* Headings — geométrica moderna */
  --font-body:    'Inter', system-ui, sans-serif;    /* Body — claridad */
}
```

**Escala tipográfica:**
- H1 hero: `clamp(60px, 8vw, 108px); font-weight: 800; letter-spacing: -3px`
- H2 secciones: `clamp(36px, 4.5vw, 64px); font-weight: 700; letter-spacing: -2px`
- Precios: `font-family: var(--font-display); font-weight: 800; color: var(--color-orange)`
- Eyebrows: `11px; letter-spacing: 4px; text-transform: uppercase; color: var(--color-green)`

---

## 4. ESPACIADO

```css
:root {
  --section-padding:   120px 0;
  --container-width:   1280px;
  --container-padding: 0 56px;
}
@media (max-width: 768px) {
  :root {
    --section-padding:   72px 0;
    --container-padding: 0 20px;
  }
}
```

---

## 5. STACK

```bash
npm create vite@latest mentol -- --template react-ts
cd mentol
npm install framer-motion
```

---

## 6. ESTRUCTURA DE ARCHIVOS

```
src/
├── components/
│   ├── CustomCursor.tsx        ← taste-skill Nivel 1
│   ├── RevealText.tsx          ← taste-skill Nivel 2
│   ├── MagneticButton.tsx      ← taste-skill Nivel 4
│   ├── AnimatedCounter.tsx
│   ├── ProductCard.tsx         ← Card de producto flotante
│   ├── CategoryCard.tsx        ← Card de categoría con hover
│   └── WhatsAppButton.tsx
├── hooks/
│   └── useParallax.ts          ← taste-skill Nivel 3
├── utils/
│   └── easings.ts
├── sections/
│   ├── HeroSection.tsx         ← Hero Okaso style
│   ├── TrustBarSection.tsx     ← Entrega mismo día + transporte
│   ├── CategoriesSection.tsx   ← Grid de categorías
│   ├── FeaturedSection.tsx     ← Productos destacados
│   ├── WhyUsSection.tsx        ← Diferenciadores
│   ├── StatsSection.tsx
│   ├── DeliverySection.tsx     ← Transporte a todo el país
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   └── FooterSection.tsx
├── App.tsx
├── App.css
└── index.css
```

---

## 7. COMPONENTES TASTE-SKILL (todos activos)

### utils/easings.ts
```tsx
export const EASINGS = {
  premium:   [0.76, 0, 0.24, 1] as const,
  smooth:    [0.25, 0.8, 0.25, 1] as const,
  bounce:    [0.34, 1.56, 0.64, 1] as const,
  cinematic: [0.86, 0, 0.07, 1] as const,
};
```

### CustomCursor — verde Mentol
```tsx
// Cursor dot: verde #00C853
// Cursor ring: verde con opacity 0.5
// En hover de .product-card → ring se expande + cambia a naranja
// Mobile: desactivado
```

### RevealText — igual que DentaPlan
```tsx
// Aplicar en todos los H1 y H2
// stagger por palabra, ease: EASINGS.premium
```

### useParallax — igual que DentaPlan
```tsx
// Aplicar en imagen hero y sección de delivery
```

### MagneticButton — igual que DentaPlan
```tsx
// En todos los CTAs primarios
```

---

## 8. SECCIONES

---

### 8.1 NAVBAR

```tsx
// Fondo: transparent → rgba(30,37,48,0.95) backdrop-blur al scroll
// Logo: "M" verde + "entol" blanco + "ELECTROMUEBLE" verde pequeño debajo
// Links: Inicio | Categorías | Productos | Nosotros | Contacto
// Iconos derecha: ❤️ (favoritos) + 🛒 (cotización) — estilo Okaso
// CTA: "Pedir Cotización" — gradiente verde

// CSS navbar al scroll:
// background: rgba(30,37,48,0.95); backdrop-filter: blur(20px);
// border-bottom: 1px solid var(--color-border);
```

---

### 8.2 HERO SECTION ← ESTILO OKASO

**Full viewport. Imagen de producto moderno sobre fondo slate.**
Claude Code usa imágenes de Unsplash — se reemplazarán con fotos reales del showroom.

```tsx
<section className="hero">
  {/* Fondo slate con gradiente sutil */}
  <div className="hero__bg" />

  {/* Imagen producto hero — Unsplash moderno interior */}
  <motion.div className="hero__product-image" style={{ y: parallaxY }}>
    <img
      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85"
      alt="Sala moderna Mentol"
      className="hero__img"
    />
  </motion.div>

  {/* Contenido izquierda */}
  <div className="hero__content">
    <motion.span className="hero__eyebrow" ...>
      ✦ Tienda de Muebles & Electrodomésticos · Azua, RD
    </motion.span>

    <RevealText tag="h1" className="hero__title" delay={0.2}>
      Tu Hogar Merece Lo Mejor.
    </RevealText>

    <motion.p className="hero__subtitle" ...>
      "Donde los precios bajos es lo primero."
      Todo lo que necesitas para decorar tu hogar,
      con entrega a todo el país.
    </motion.p>

    <motion.div className="hero__actions" ...>
      <MagneticButton
        href="https://wa.me/18494731483"
        className="btn-primary"
      >
        Ver Catálogo →
      </MagneticButton>
      <MagneticButton href="#categorias" className="btn-ghost">
        Categorías
      </MagneticButton>
    </motion.div>

    {/* Badge entrega mismo día — pulsa */}
    <motion.div
      className="hero__delivery-badge"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ repeat: Infinity, duration: 2.5 }}
    >
      <span>🚚</span>
      <div>
        <strong>Entrega Mismo Día</strong>
        <span>Transporte disponible a todo el país</span>
      </div>
    </motion.div>
  </div>

  {/* Floating product card — estilo Okaso */}
  <motion.div
    className="hero__floating-card"
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
  >
    <div className="fcard__tag">Más Vendido</div>
    <div className="fcard__name">Sala de Estar</div>
    <div className="fcard__price">Precio Especial</div>
    <div className="fcard__colors">
      <span className="fcolor fcolor--green" />
      <span className="fcolor fcolor--brown" />
      <span className="fcolor fcolor--gray" />
    </div>
    <div className="fcard__cta">Ver Precio →</div>
  </motion.div>
</section>
```

```css
.hero {
  min-height: 100vh;
  background: var(--gradient-hero);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-top: 80px;
}
.hero__bg {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 70% 50%,
    rgba(0,200,83,0.06) 0%, transparent 60%);
}
.hero__content {
  position: relative; z-index: 2;
  padding: var(--container-padding);
  padding-left: 80px;
}
.hero__title {
  font-family: var(--font-display);
  font-size: clamp(52px, 7vw, 96px);
  font-weight: 800;
  letter-spacing: -3px;
  line-height: 0.95;
  color: var(--color-text);
  margin-bottom: 24px;
}
.hero__subtitle {
  font-family: var(--font-body);
  font-size: 17px; line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 480px; margin-bottom: 40px;
}
.hero__product-image {
  position: relative; z-index: 1;
  display: flex; justify-content: center; align-items: flex-end;
}
.hero__img {
  width: 100%; max-width: 700px;
  height: 80vh; object-fit: cover;
  border-radius: 32px 0 0 32px;
  display: block;
  box-shadow: var(--shadow-product);
}
.hero__delivery-badge {
  display: flex; align-items: center; gap: 14px;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-green);
  border-radius: 16px; padding: 16px 20px;
  margin-top: 36px; max-width: 340px;
}
.hero__delivery-badge strong {
  font-family: var(--font-display);
  font-size: 15px; color: var(--color-green);
  display: block;
}
.hero__delivery-badge span {
  font-size: 12px; color: var(--color-text-secondary);
}

/* Floating card estilo Okaso */
.hero__floating-card {
  position: absolute;
  top: 28%; left: 48%;
  background: rgba(37,45,58,0.92);
  backdrop-filter: blur(20px);
  border: 1px solid var(--color-border);
  border-radius: 20px; padding: 24px;
  min-width: 200px;
  box-shadow: var(--shadow-card);
  z-index: 10;
}
.fcard__tag {
  background: var(--gradient-green);
  color: #1E2530; font-size: 11px; font-weight: 700;
  letter-spacing: 1px; text-transform: uppercase;
  padding: 4px 12px; border-radius: 100px;
  display: inline-block; margin-bottom: 12px;
}
.fcard__name {
  font-family: var(--font-display);
  font-size: 18px; font-weight: 700;
  color: var(--color-text); margin-bottom: 4px;
}
.fcard__price {
  font-family: var(--font-display);
  font-size: 14px; color: var(--color-orange);
  font-weight: 600; margin-bottom: 14px;
}
.fcard__colors {
  display: flex; gap: 8px; margin-bottom: 16px;
}
.fcolor {
  width: 20px; height: 20px; border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.2);
}
.fcolor--green { background: #4CAF50; }
.fcolor--brown { background: #795548; }
.fcolor--gray  { background: #9E9E9E; }
.fcard__cta {
  font-family: var(--font-body);
  font-size: 13px; color: var(--color-green);
  font-weight: 600; cursor: pointer;
}
```

---

### 8.3 TRUST BAR

Franja entre hero y categorías:
```
🚚 Entrega Mismo Día  |  🏠 Transporte a Todo el País  |  ⏰ Lu–Dom 8AM–6PM  |  💰 Precios Bajos Garantizados
```
Fondo: `var(--gradient-green)`. Texto: `#1E2530` (oscuro sobre verde).

---

### 8.4 CATEGORIES SECTION

ID: `categorias`
Background: `var(--color-bg)`

```tsx
<RevealText tag="h2" className="section-title">
  Todo Para Tu Hogar En Un Solo Lugar
</RevealText>

const categories = [
  {
    icon: '🛋️',
    title: 'Salas & Sofás',
    desc: 'Diseños modernos para tu sala de estar',
    color: '#FF6D00',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80',
  },
  {
    icon: '🛏️',
    title: 'Cuartos & Camas',
    desc: 'Habitaciones completas con estilo',
    color: '#00C853',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&q=80',
  },
  {
    icon: '🍽️',
    title: 'Comedores',
    desc: 'Mesas y sillas para toda la familia',
    color: '#FF6D00',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80',
  },
  {
    icon: '❄️',
    title: 'Electrodomésticos',
    desc: 'Neveras, lavadoras, aires acondicionados',
    color: '#00C853',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
  },
  {
    icon: '🪑',
    title: 'Oficinas',
    desc: 'Escritorios y sillas de trabajo',
    color: '#FF6D00',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80',
  },
  {
    icon: '💡',
    title: 'Decoración',
    desc: 'Lámparas, cuadros y accesorios',
    color: '#00C853',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80',
  },
];
```

**Category Card design — hover reveal:**
```css
.category-card {
  position: relative;
  border-radius: 24px; overflow: hidden;
  height: 280px; cursor: pointer;
  border: 1px solid var(--color-border);
}
.category-card__img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.5s ease;
  filter: brightness(0.5) saturate(0.8);
}
.category-card:hover .category-card__img {
  transform: scale(1.08);
  filter: brightness(0.7) saturate(1.1);
}
.category-card__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(30,37,48,0.9) 0%, transparent 60%);
  display: flex; flex-direction: column;
  justify-content: flex-end; padding: 28px;
}
.category-card__icon { font-size: 36px; margin-bottom: 8px; }
.category-card__title {
  font-family: var(--font-display);
  font-size: 22px; font-weight: 700; color: white;
}
.category-card__desc {
  font-size: 13px; color: rgba(255,255,255,0.7);
  margin-top: 4px;
}
/* Línea de color en hover */
.category-card::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 3px;
  background: var(--gradient-green);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s ease;
}
.category-card:hover::after { transform: scaleX(1); }
```

Usar staggerChildren + cardVariants del taste-skill para entrada.

---

### 8.5 FEATURED / WHY US SECTION

Background: `var(--color-bg-light)` — sección clara en medio del layout dark

Layout: 2 columnas — imagen izquierda (interior moderno Unsplash), texto derecho.

```tsx
<RevealText tag="h2" className="section-title--dark">
  Por Qué Elegir Mentol
</RevealText>

const features = [
  { icon: '💰', title: 'Precios Bajos Garantizados', desc: 'Donde los precios bajos es lo primero. Siempre.' },
  { icon: '🚚', title: 'Entrega Mismo Día', desc: 'Recibe tu compra el mismo día en Azua y zonas cercanas.' },
  { icon: '🏠', title: 'Transporte a Todo el País', desc: 'Llevamos tus muebles a cualquier provincia de RD.' },
  { icon: '⏰', title: 'Abierto Todos los Días', desc: 'Lunes a Domingo de 8:00AM a 6:00PM para servirte.' },
];
```

Imagen: `https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80`
Con `ClipRevealImage` del taste-skill.

---

### 8.6 STATS SECTION

Fondo: `var(--gradient-green)` — fondo verde, números oscuros.

```tsx
const stats = [
  { number: 1786, suffix: '+', label: 'Seguidores en Instagram' },
  { number: 6,    suffix: '',  label: 'Categorías de Productos' },
  { number: 100,  suffix: '%', label: 'Transporte Nacional' },
  { number: 7,    suffix: '',  label: 'Días a la Semana' },
];
```

Números en `var(--color-bg)` oscuro sobre fondo verde. AnimatedCounter con useInView.

---

### 8.7 DELIVERY SECTION

Background: `var(--color-bg-surface)`
Esta sección destaca el diferenciador #1 de Mentol: envío a todo el país.

Layout: izquierda mapa/imagen, derecha puntos de cobertura.

```tsx
<RevealText tag="h2" className="section-title">
  Llevamos Tu Hogar A Donde Estés
</RevealText>

// Imagen: mapa RD o camión de delivery
// src: https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80

const coverage = [
  '✓ Azua (Entrega el mismo día)',
  '✓ Santo Domingo',
  '✓ Santiago',
  '✓ San Cristóbal',
  '✓ Baní',
  '✓ Todo el país — consulta disponibilidad',
];
```

CTA: `MagneticButton` → WhatsApp con mensaje "Quiero información sobre envíos"

---

### 8.8 TESTIMONIALS SECTION

Background: `var(--color-bg)`

```tsx
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
```

Cards dark con borde verde sutil en hover. Estrellas en `var(--color-orange)`.

---

### 8.9 CONTACT SECTION

ID: `contacto`
Background: `var(--color-bg-surface)`

```tsx
// Datos:
// Tel: (849) 473-1483
// WhatsApp: https://wa.me/18494731483
// Dirección: Calle Emilio Prudom esq. 30 de Marzo, Azua 71000, RD
// También: Ctra. Francisco del Rosario Sánchez, Azua 71000
// Instagram: @mentolelectromueblesazua
// Horario: Lu–Dom 8:00AM – 6:00PM

// Mensaje WhatsApp preescrito:
// "Hola Mentol! Me interesa conocer más sobre sus productos y precios."
```

Formulario: Nombre | Teléfono | Producto de interés (select) | Mensaje
CTA: MagneticButton verde

---

### 8.10 FOOTER

```
Fondo: var(--color-bg) — dark
Logo Mentol | Links | Redes | Horario | Contacto

© 2025 Mentol Electro Muebles. Todos los derechos reservados. 
| Diseñado por NEXIX Tech Studio
```

---

## 9. CSS GLOBAL (index.css)

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; cursor: none !important; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  overflow-x: hidden;
}

/* Cursor — verde Mentol */
.cursor-dot {
  position: fixed; top: 0; left: 0;
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--color-green);
  pointer-events: none; z-index: 99999;
}
.cursor-ring {
  position: fixed; top: 0; left: 0;
  width: 36px; height: 36px; border-radius: 50%;
  border: 1.5px solid var(--color-green);
  pointer-events: none; z-index: 99998;
  opacity: 0.5;
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease, border-color 0.3s ease;
}
.cursor-ring.cursor--hover {
  width: 56px; height: 56px; opacity: 1;
  border-color: var(--color-orange);
  background: var(--color-orange-glow);
}

/* Secciones */
.section-container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--container-padding);
}
.section-eyebrow {
  font-size: 11px; letter-spacing: 4px;
  text-transform: uppercase; color: var(--color-green);
  display: block; margin-bottom: 16px;
  font-family: var(--font-body); font-weight: 500;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 4.5vw, 60px);
  font-weight: 700; letter-spacing: -2px;
  color: var(--color-text);
  margin-bottom: 16px;
}
.section-title--dark {
  font-family: var(--font-display);
  font-size: clamp(36px, 4.5vw, 60px);
  font-weight: 700; letter-spacing: -2px;
  color: #1E2530;   /* Para secciones con fondo claro */
  margin-bottom: 16px;
}
.section-subtitle {
  font-size: 17px; line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 560px; margin-bottom: 56px;
  font-family: var(--font-body);
}

/* Buttons */
.btn-primary {
  background: var(--gradient-green);
  color: #1E2530;
  font-family: var(--font-display);
  font-size: 15px; font-weight: 700;
  padding: 14px 32px; border-radius: 100px;
  text-decoration: none; display: inline-block;
  box-shadow: var(--shadow-green);
  transition: transform 0.25s ease;
}
.btn-primary:hover { transform: translateY(-3px); }
.btn-ghost {
  font-family: var(--font-body);
  font-size: 15px; font-weight: 500;
  color: var(--color-text); text-decoration: none;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.btn-ghost:hover { color: var(--color-green); border-color: var(--color-green); }

/* Keyframes */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(0,200,83,0.2); }
  50%       { box-shadow: 0 0 40px rgba(0,200,83,0.45); }
}

/* Mobile */
@media (max-width: 768px) {
  * { cursor: auto !important; }
  .cursor-dot, .cursor-ring { display: none; }
  .hero { grid-template-columns: 1fr; }
  .hero__product-image { display: none; }
  .hero__floating-card { display: none; }
}
```

---

## 10. REGLAS ABSOLUTAS

1. `padding: 120px 0` en todas las secciones
2. `max-width: 1280px; padding: 0 56px` en todos los contenedores
3. **NUNCA Tailwind** — vanilla CSS con variables
4. **CustomCursor verde** — desactivado en mobile
5. **RevealText** en todos los H1 y H2
6. **MagneticButton** en todos los CTAs
7. **Parallax** en imagen hero y sección delivery
8. **Stagger variants** en grids de categorías y features
9. **Floating card** estilo Okaso en el hero — animada con float
10. Imágenes Unsplash modernas de interiores/muebles — se reemplazan con fotos reales
11. WhatsApp flotante verde #25D366 siempre visible
12. `npm run build` sin errores TypeScript

---

## 11. SEO

```html
<title>Mentol Electro Muebles | Azua, República Dominicana</title>
<meta name="description"
  content="Mentol Electro Muebles en Azua, RD. Muebles, salas, cuartos, comedores y electrodomésticos. Donde los precios bajos es lo primero. Entrega mismo día. Transporte a todo el país. (849) 473-1483." />
```

---

## 12. INSTRUCCIÓN EXACTA PARA CLAUDE CODE

```
Lee este CLAUDE.md completo.

Activa todos los niveles del nexix-taste-skill:
1. CustomCursor.tsx — dot y ring verde #00C853
2. RevealText.tsx — reveal word by word en H1 y H2
3. useParallax.ts — en hero product image
4. MagneticButton.tsx — en todos los CTAs
5. staggerChildren variants — en categorías y features

ORDEN DE CONSTRUCCIÓN:
1. index.html → SEO + Google Fonts (Outfit + Inter)
2. index.css → variables CSS + reset + cursor + keyframes
3. utils/easings.ts
4. components/CustomCursor.tsx
5. components/RevealText.tsx
6. hooks/useParallax.ts
7. components/MagneticButton.tsx
8. components/AnimatedCounter.tsx
9. components/WhatsAppButton.tsx
10. sections/HeroSection.tsx
    → Fondo slate #1E2530
    → Imagen Unsplash moderna de sala/interior en lado derecho
    → Floating card estilo Okaso
    → Badge "Entrega Mismo Día" con animación pulse
    → RevealText en H1
    → MagneticButton en CTAs
    ↓ DETENTE AQUÍ. Muéstrame el Hero completo.
    ↓ Espera aprobación antes de continuar.

Continuación después de aprobación:
11. sections/TrustBarSection.tsx
12. sections/CategoriesSection.tsx (6 cards con hover reveal + stagger)
13. sections/WhyUsSection.tsx (imagen + 4 features)
14. sections/StatsSection.tsx (AnimatedCounter)
15. sections/DeliverySection.tsx
16. sections/TestimonialsSection.tsx
17. sections/ContactSection.tsx
18. sections/FooterSection.tsx
19. App.tsx → integrar todo
20. npm run build → cero errores

Skills activas: frontend-design + nexix-taste-skill + taste-skill + webapp-testing
```

---

## 13. DATOS REALES DEL CLIENTE

```
Empresa:     Mentol Electro Muebles
Instagram:   @mentolelectromueblesazua | 1,786 seguidores
Teléfono:    (849) 473-1483
WhatsApp:    https://wa.me/18494731483
Dirección:   Calle Emilio Prudom esq. 30 de Marzo, Azua 71000, RD
             Ctra. Francisco del Rosario Sánchez, Azua 71000
Horario:     Lunes–Domingo 8:00AM – 6:00PM
Slogan:      "Donde los precios bajos es lo primero"
Entrega:     Mismo día en Azua · Transporte a todo el país
Imágenes:    Usar Unsplash modernas — reemplazar con fotos reales del showroom
```

---

*NEXIX Tech Studio — Mentol Electro Muebles*
*Tema: Modern Home Showroom Dark · Paleta: Slate #1E2530 + Verde #00C853 + Naranja #FF6D00*
*Skills: frontend-design + nexix-taste-skill + taste-skill + webapp-testing*