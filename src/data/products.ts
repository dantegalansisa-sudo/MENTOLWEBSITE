import type { Product } from '../context/QuoteContext';

export const allProducts: Product[] = [
  // Salas & Sofás
  { id: 'sala-01', name: 'Juego de Sala Moderno 3 Piezas', price: 34900, oldPrice: 45900, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80', category: 'Salas & Sofás' },
  { id: 'sala-02', name: 'Sofá Seccional en L', price: 28500, oldPrice: 35000, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80', category: 'Salas & Sofás' },
  { id: 'sala-03', name: 'Sofá Reclinable 2 Puestos', price: 19900, image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80', category: 'Salas & Sofás' },

  // Cuartos & Camas
  { id: 'cuarto-01', name: 'Set de Dormitorio Completo', price: 28900, oldPrice: 38500, image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&q=80', category: 'Cuartos & Camas' },
  { id: 'cuarto-02', name: 'Cama Queen con Cabecera', price: 18500, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80', category: 'Cuartos & Camas' },
  { id: 'cuarto-03', name: 'Closet 6 Puertas Espejo', price: 22000, oldPrice: 27500, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80', category: 'Cuartos & Camas' },

  // Comedores
  { id: 'comedor-01', name: 'Comedor 6 Sillas Madera', price: 24500, oldPrice: 32000, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80', category: 'Comedores' },
  { id: 'comedor-02', name: 'Mesa de Comedor Extensible', price: 15900, image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&q=80', category: 'Comedores' },
  { id: 'comedor-03', name: 'Juego de Comedor 4 Sillas', price: 18900, oldPrice: 22000, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80', category: 'Comedores' },

  // Electrodomésticos
  { id: 'electro-01', name: 'Nevera Inverter 18 cu.ft', price: 33900, oldPrice: 42000, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80', category: 'Electrodomésticos' },
  { id: 'electro-02', name: 'Lavadora Automática 20 lb', price: 21500, image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=80', category: 'Electrodomésticos' },
  { id: 'electro-03', name: 'Aire Acondicionado 12,000 BTU', price: 18900, oldPrice: 24000, image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80', category: 'Electrodomésticos' },

  // Oficinas
  { id: 'oficina-01', name: 'Escritorio Ejecutivo', price: 12500, image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80', category: 'Oficinas' },
  { id: 'oficina-02', name: 'Silla Ergonómica Pro', price: 8900, oldPrice: 11500, image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80', category: 'Oficinas' },

  // Decoración
  { id: 'deco-01', name: 'Lámpara de Pie Moderna', price: 4500, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=500&q=80', category: 'Decoración' },
  { id: 'deco-02', name: 'Set de Cuadros Decorativos', price: 3200, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500&q=80', category: 'Decoración' },
];

export const categories = ['Todos', 'Salas & Sofás', 'Cuartos & Camas', 'Comedores', 'Electrodomésticos', 'Oficinas', 'Decoración'];
