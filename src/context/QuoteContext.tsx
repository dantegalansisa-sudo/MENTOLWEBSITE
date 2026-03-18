import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
}

interface QuoteItem extends Product {
  qty: number;
}

interface Toast {
  id: number;
  message: string;
}

interface QuoteContextType {
  items: QuoteItem[];
  isOpen: boolean;
  toasts: Toast[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearAll: () => void;
  togglePanel: () => void;
  closePanel: () => void;
  totalItems: number;
  totalPrice: number;
  sendWhatsApp: () => void;
}

const QuoteContext = createContext<QuoteContextType | null>(null);

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be used within QuoteProvider');
  return ctx;
}

let toastId = 0;

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        showToast(`${product.name} — cantidad actualizada`);
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      showToast(`${product.name} agregado a cotización`);
      return [...prev, { ...product, qty: 1 }];
    });
  }, [showToast]);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }, []);

  const clearAll = useCallback(() => setItems([]), []);

  const togglePanel = useCallback(() => setIsOpen((prev) => !prev), []);
  const closePanel = useCallback(() => setIsOpen(false), []);

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const sendWhatsApp = useCallback(() => {
    const lines = items.map(
      (i) => `• ${i.name} (x${i.qty}) — RD$ ${(i.price * i.qty).toLocaleString()}`
    );
    const text = `Hola Mentol Deluxe! Quiero cotizar:\n\n${lines.join('\n')}\n\nTotal estimado: RD$ ${totalPrice.toLocaleString()}\n\n¡Gracias!`;
    window.open(`https://wa.me/18494731483?text=${encodeURIComponent(text)}`, '_blank');
  }, [items, totalPrice]);

  return (
    <QuoteContext.Provider
      value={{
        items, isOpen, toasts,
        addItem, removeItem, updateQty, clearAll,
        togglePanel, closePanel,
        totalItems, totalPrice, sendWhatsApp,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}
