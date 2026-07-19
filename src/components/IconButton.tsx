import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'glass';
type IconButtonSize = 'sm' | 'md' | 'lg';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: ReactNode;
  label: string;
};

const variantClasses: Record<IconButtonVariant, string> = {
  primary: 'bg-accent text-text-primary shadow-glow-crimson hover:bg-accent-hover active:bg-accent-active',
  secondary: 'border border-glass-border bg-surface-elevated text-text-primary shadow-soft hover:bg-card',
  ghost: 'text-text-secondary hover:bg-glass hover:text-text-primary',
  glass: 'glass-subtle text-text-primary shadow-glass hover:bg-glass',
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: 'size-9',
  md: 'size-11',
  lg: 'size-12',
};

export function IconButton({ variant = 'ghost', size = 'md', icon, label, className, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn(
        'interaction-premium inline-flex items-center justify-center rounded-pill focus-visible:focus-ring focus-visible:focus-ring-visible motion-safe:hover:scale-lift disabled:pointer-events-none disabled:opacity-45',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
