export const typographyVariants = {
  displayXl: 'typography-display-xl',
  displayL: 'typography-display-l',
  displayM: 'typography-display-m',
  headingXl: 'typography-heading-xl',
  headingL: 'typography-heading-l',
  headingM: 'typography-heading-m',
  headingS: 'typography-heading-s',
  bodyLarge: 'typography-body-large',
  body: 'typography-body',
  bodySmall: 'typography-body-small',
  caption: 'typography-caption',
  label: 'typography-label',
  button: 'typography-button',
  navigation: 'typography-navigation',
} as const;

export type TypographyVariant = keyof typeof typographyVariants;
