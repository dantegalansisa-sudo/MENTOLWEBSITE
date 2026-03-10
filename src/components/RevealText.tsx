import { motion } from 'framer-motion';
import { EASINGS } from '../utils/easings';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  immediate?: boolean;
}

export default function RevealText({
  children,
  className = '',
  delay = 0,
  tag: Tag = 'h1',
  immediate = false,
}: RevealTextProps) {
  const words = children.split(' ');

  const animateProps = immediate
    ? { animate: { y: 0, rotate: 0 } }
    : {
        whileInView: { y: 0, rotate: 0 },
        viewport: { once: true, amount: 0.3 },
      };

  return (
    <Tag
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', rotate: 2 }}
            {...animateProps}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.07,
              ease: EASINGS.premium,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
