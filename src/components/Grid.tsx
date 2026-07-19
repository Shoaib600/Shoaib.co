import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

type GridProps = HTMLAttributes<HTMLDivElement> & {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
};

const columnClasses: Record<NonNullable<GridProps['columns']>, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4',
};

const gapClasses: Record<NonNullable<GridProps['gap']>, string> = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
};

export function Grid({ columns = 3, gap = 'md', className, children, ...props }: GridProps) {
  return (
    <div className={cn('grid', columnClasses[columns], gapClasses[gap], className)} {...props}>
      {children}
    </div>
  );
}
