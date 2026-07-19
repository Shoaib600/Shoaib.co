import { useEffect, useRef } from 'react';

type CursorPoint = {
  x: number;
  y: number;
};

type UseSmoothCursorOptions = {
  enabled?: boolean;
  ease?: number;
  onUpdate: (point: CursorPoint) => void;
};

const CENTER: CursorPoint = { x: 0.68, y: 0.48 };

export function useSmoothCursor({ enabled = true, ease = 0.16, onUpdate }: UseSmoothCursorOptions) {
  const target = useRef<CursorPoint>(CENTER);
  const current = useRef<CursorPoint>(CENTER);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      onUpdate(CENTER);
      return undefined;
    }

    const updateTarget = (event: PointerEvent) => {
      target.current = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };
    };

    const tick = () => {
      current.current = {
        x: current.current.x + (target.current.x - current.current.x) * ease,
        y: current.current.y + (target.current.y - current.current.y) * ease,
      };

      onUpdate(current.current);
      frameId.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', updateTarget, { passive: true });
    frameId.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', updateTarget);

      if (frameId.current !== null) {
        window.cancelAnimationFrame(frameId.current);
      }
    };
  }, [ease, enabled, onUpdate]);
}
