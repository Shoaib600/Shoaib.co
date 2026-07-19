import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'glass' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; disabled?: boolean };

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-text-primary shadow-glow-crimson hover:bg-accent-hover active:bg-accent-active',
  secondary: 'border border-glass-border bg-surface-elevated text-text-primary shadow-soft hover:border-glass-border hover:bg-card active:bg-surface',
  ghost: 'text-text-secondary hover:bg-glass hover:text-text-primary active:bg-white/10',
  glass: 'glass-subtle text-text-primary shadow-glass hover:border-glass-border hover:bg-glass active:bg-white/10',
  text: 'px-0 text-text-secondary hover:text-text-primary active:text-text-muted',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 gap-2 px-3.5 text-xs',
  md: 'h-11 gap-2.5 px-5 text-sm',
  lg: 'h-12 gap-3 px-6 text-base',
};

export function Button(props: ButtonProps | AnchorProps) {
  const { variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, className, children, ...rest } = props;
  const isDisabled = Boolean(('disabled' in props && props.disabled) || isLoading);
  const styles = cn(
    'typography-button interaction-premium inline-flex select-none items-center justify-center rounded-pill focus-visible:focus-ring focus-visible:focus-ring-visible motion-safe:hover:scale-lift',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45',
    variantClasses[variant],
    variant !== 'text' && sizeClasses[size],
    variant === 'text' && 'h-auto gap-2 py-1',
    className,
  );
  const content = (
    <>
      {isLoading ? <Loader2 aria-hidden className="size-4 animate-spin" /> : leftIcon}
      <span>{children}</span>
      {!isLoading ? rightIcon : null}
    </>
  );

  if ('href' in props) {
    const anchorProps = { ...rest } as AnchorHTMLAttributes<HTMLAnchorElement> & { disabled?: boolean };
    delete anchorProps.disabled;

    return (
      <a aria-disabled={isDisabled || undefined} className={styles} {...anchorProps}>
        {content}
      </a>
    );
  }

  return (
    <button className={styles} disabled={isDisabled} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
