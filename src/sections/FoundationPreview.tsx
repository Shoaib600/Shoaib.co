import { Badge, Card, Container, GlassPanel, Heading, Section } from '../components';
import { SECTION_IDS } from '../constants/site';

const foundations = ['Semantic tokens', 'Typography scale', 'Interaction states', 'Layout primitives'];

export function FoundationPreview() {
  return (
    <Section id={SECTION_IDS.INTRO} aria-labelledby="foundation-heading" className="min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(177_18_38_/_0.22),transparent_32%),radial-gradient(circle_at_80%_0%,rgb(255_255_255_/_0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Badge variant="primary">Design System</Badge>
          <Heading id="foundation-heading" as="h1" variant="displayM" className="mt-6">
            A premium design language for Shoaib.
          </Heading>
          <p className="typography-body-large mt-6 max-w-2xl text-pretty text-text-secondary">
            The portfolio now has production-ready tokens, layout primitives, accessibility states, and interaction foundations for future cinematic sections.
          </p>
        </div>
        <GlassPanel className="p-4">
          <div className="grid gap-4">
            {foundations.map((item) => (
              <Card key={item} variant="glass" interactive>
                <p className="typography-heading-s text-text-primary">{item}</p>
              </Card>
            ))}
          </div>
        </GlassPanel>
      </Container>
    </Section>
  );
}
