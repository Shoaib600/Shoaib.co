import type { ElementType } from 'react';
import type { PolymorphicProps } from '../types/common';
import { cn } from '../utils/cn';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

type ContainerProps<TElement extends ElementType> = PolymorphicProps<TElement> & {
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-[var(--container-sm)]',
  md: 'max-w-[var(--container-md)]',
  lg: 'max-w-[var(--container-lg)]',
  xl: 'max-w-[var(--container-xl)]',
  full: 'max-w-none',
};

export function Container<TElement extends ElementType = 'div'>({
  as,
  size = 'lg',
  className,
  children,
  ...props
}: ContainerProps<TElement>) {
  const Component = as ?? 'div';

  return (
    <Component className={cn('mx-auto w-full px-5 sm:px-8 lg:px-10', sizeClasses[size], className)} {...props}>
      {children}
    </Component>
  );
}
