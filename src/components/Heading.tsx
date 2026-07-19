import type { ElementType } from 'react';
import { typographyVariants, type TypographyVariant } from '../constants/design-system';
import type { PolymorphicProps } from '../types/common';
import { cn } from '../utils/cn';

type HeadingProps<TElement extends ElementType> = PolymorphicProps<TElement> & {
  eyebrow?: string;
  variant?: Extract<TypographyVariant, 'displayXl' | 'displayL' | 'displayM' | 'headingXl' | 'headingL' | 'headingM' | 'headingS'>;
  accent?: boolean;
};

export function Heading<TElement extends ElementType = 'h2'>({
  as,
  eyebrow,
  variant = 'headingXl',
  accent = false,
  className,
  children,
  ...props
}: HeadingProps<TElement>) {
  const Component = as ?? 'h2';

  return (
    <div className="max-w-4xl">
      {eyebrow ? <p className="typography-label mb-4 text-accent-hover">{eyebrow}</p> : null}
      <Component className={cn(typographyVariants[variant], 'text-balance text-text-primary', accent && 'font-accent', className)} {...props}>
        {children}
      </Component>
    </div>
  );
}
