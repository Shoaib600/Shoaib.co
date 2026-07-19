import type { ReactNode } from 'react';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-text-primary antialiased selection:bg-accent selection:text-text-primary">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-text-primary focus:px-4 focus:py-2 focus:text-background">
        Skip to content
      </a>
      <main id="main">{children}</main>
    </div>
  );
}
