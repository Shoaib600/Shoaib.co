import type { ElementType } from 'react';
import type { PolymorphicProps } from '../types/common';
import { cn } from '../utils/cn';

type SectionSpacing = 'sm' | 'md' | 'lg';

type SectionProps<TElement extends ElementType> = PolymorphicProps<TElement> & {
  spacing?: SectionSpacing;
};

const spacingClasses: Record<SectionSpacing, string> = {
  sm: 'py-16 sm:py-20 lg:py-24',
  md: 'py-[var(--section-space-mobile)] sm:py-[var(--section-space-tablet)] lg:py-[var(--section-space-desktop)]',
  lg: 'py-28 sm:py-36 lg:py-44',
};

export function Section<TElement extends ElementType = 'section'>({
  as,
  spacing = 'md',
  className,
  children,
  ...props
}: SectionProps<TElement>) {
  const Component = as ?? 'section';

  return (
    <Component className={cn('relative scroll-mt-24', spacingClasses[spacing], className)} {...props}>
      {children}
    </Component>
  );
}
