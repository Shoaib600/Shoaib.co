import { AppShell } from './layouts/AppShell';
import { Hero, Navigation } from './sections/landing';

export default function App() {
  return (
    <AppShell>
      <Navigation />
      <Hero />
    </AppShell>
  );
}
