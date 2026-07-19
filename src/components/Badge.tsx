import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

type BadgeVariant = 'primary' | 'outline' | 'glass' | 'success';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'border-accent/30 bg-accent/12 text-accent-hover shadow-glow-crimson',
  outline: 'border-hairline bg-transparent text-text-secondary',
  glass: 'glass-subtle text-text-primary',
  success: 'border-success/30 bg-success/10 text-success',
};

export function Badge({ variant = 'glass', className, children, ...props }: BadgeProps) {
  return (
    <span className={cn('typography-label inline-flex items-center rounded-pill border px-3 py-1', variantClasses[variant], className)} {...props}>
      {children}
    </span>
  );
}
