export type ResponsiveImageSource = {
  src: string;
  width: number;
  type?: string;
};

export function createSrcSet(sources: ResponsiveImageSource[]) {
  return sources.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

export function getImagePath(fileName: string) {
  return `/images/${fileName.replace(/^\/+/, '')}`;
}
