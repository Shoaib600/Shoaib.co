import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type PolymorphicProps<TElement extends ElementType> = {
  as?: TElement;
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<TElement>, 'as' | 'children' | 'className'>;

export type SectionId = 'intro' | 'work' | 'about' | 'contact';
export type ComponentSize = 'sm' | 'md' | 'lg';
