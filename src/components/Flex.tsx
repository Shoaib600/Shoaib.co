import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

type FlexProps = HTMLAttributes<HTMLDivElement> & {
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'between' | 'end';
  gap?: 'sm' | 'md' | 'lg';
  wrap?: boolean;
};

const alignClasses: Record<NonNullable<FlexProps['align']>, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyClasses: Record<NonNullable<FlexProps['justify']>, string> = {
  start: 'justify-start',
  center: 'justify-center',
  between: 'justify-between',
  end: 'justify-end',
};

const gapClasses: Record<NonNullable<FlexProps['gap']>, string> = {
  sm: 'gap-3',
  md: 'gap-5',
  lg: 'gap-8',
};

export function Flex({ align = 'center', justify = 'start', gap = 'md', wrap = false, className, children, ...props }: FlexProps) {
  return (
    <div className={cn('flex', alignClasses[align], justifyClasses[justify], gapClasses[gap], wrap && 'flex-wrap', className)} {...props}>
      {children}
    </div>
  );
}
