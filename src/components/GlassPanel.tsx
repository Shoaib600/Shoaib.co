import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  intensity?: 'subtle' | 'surface' | 'elevated';
};

const intensityClasses: Record<NonNullable<GlassPanelProps['intensity']>, string> = {
  subtle: 'glass-subtle',
  surface: 'glass-surface',
  elevated: 'glass-elevated',
};

export function GlassPanel({ intensity = 'surface', className, children, ...props }: GlassPanelProps) {
  return (
    <div className={cn('rounded-2xl', intensityClasses[intensity], className)} {...props}>
      {children}
    </div>
  );
}
