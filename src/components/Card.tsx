import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

type CardVariant = 'default' | 'glass' | 'feature' | 'project';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  interactive?: boolean;
};

const variantClasses: Record<CardVariant, string> = {
  default: 'border-hairline bg-card shadow-soft',
  glass: 'glass-surface',
  feature: 'border-glass-border bg-surface-elevated shadow-medium before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
  project: 'border-hairline bg-card shadow-large after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-br after:from-white/[0.08] after:to-transparent after:opacity-0 after:transition-opacity after:duration-300',
};

export function Card({ variant = 'default', interactive = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border p-6',
        'interaction-premium',
        interactive && 'hover:border-glass-border hover:shadow-hover hover:after:opacity-100 motion-safe:hover:scale-lift',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
