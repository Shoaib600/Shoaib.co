import { useCallback, useRef, type CSSProperties } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useSmoothCursor } from './useSmoothCursor';

type RevealLayerProps = {
  baseImage: string;
  revealImage: string;
};

const SPOTLIGHT_SIZE = 'clamp(12rem, 28vw, 28rem)';

export function RevealLayer({ baseImage, revealImage }: RevealLayerProps) {
  const revealRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleUpdate = useCallback(({ x, y }: { x: number; y: number }) => {
    const percentX = `${x * 100}%`;
    const percentY = `${y * 100}%`;

    if (revealRef.current) {
      revealRef.current.style.setProperty('--spotlight-x', percentX);
      revealRef.current.style.setProperty('--spotlight-y', percentY);
    }

    if (glowRef.current) {
      glowRef.current.style.setProperty('--spotlight-x', percentX);
      glowRef.current.style.setProperty('--spotlight-y', percentY);
    }
  }, []);

  useSmoothCursor({ enabled: !prefersReducedMotion, onUpdate: handleUpdate });

  return (
    <div className="hero-portrait" aria-hidden="true">
      <div className="hero-portrait__image hero-portrait__image--base" style={{ backgroundImage: `url(${baseImage})` }} />
      <div
        ref={revealRef}
        className="hero-portrait__image hero-portrait__image--reveal"
        style={{ backgroundImage: `url(${revealImage})`, '--spotlight-size': SPOTLIGHT_SIZE } as CSSProperties}
      />
      <div ref={glowRef} className="hero-portrait__glow" />
    </div>
  );
}
