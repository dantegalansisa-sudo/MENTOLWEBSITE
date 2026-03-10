import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springRingX = useSpring(cursorX, { damping: 20, stiffness: 180 });
  const springRingY = useSpring(cursorY, { damping: 20, stiffness: 180 });

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const ring = document.getElementById('cursor-ring');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
    };

    const handleHoverIn = () => {
      ring?.classList.add('cursor--hover');
    };
    const handleHoverOut = () => {
      ring?.classList.remove('cursor--hover');
    };

    window.addEventListener('mousemove', moveCursor);

    const observer = new MutationObserver(() => {
      const interactives = document.querySelectorAll(
        'a, button, .product-card, .category-card, .btn-primary, .btn-ghost, .magnetic-wrap'
      );
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial bind
    const interactives = document.querySelectorAll(
      'a, button, .product-card, .category-card, .btn-primary, .btn-ghost, .magnetic-wrap'
    );
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        id="cursor-ring"
        className="cursor-ring"
        style={{ x: springRingX, y: springRingY }}
      />
    </>
  );
}
