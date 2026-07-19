import type { LucideIcon } from 'lucide-react';
import { cn } from '../utils/cn';
import type { ComponentSize } from '../types/common';

type IconProps = {
  icon: LucideIcon;
  size?: ComponentSize;
  className?: string;
  decorative?: boolean;
  label?: string;
};

const sizeClasses: Record<ComponentSize, string> = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
};

export function Icon({ icon: Component, size = 'md', className, decorative = true, label }: IconProps) {
  return (
    <Component
      aria-hidden={decorative || undefined}
      aria-label={!decorative ? label : undefined}
      className={cn('shrink-0', sizeClasses[size], className)}
      strokeWidth={1.75}
    />
  );
}
