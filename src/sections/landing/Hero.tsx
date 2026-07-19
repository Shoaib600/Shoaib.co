import { Button, Container } from '../../components';
import { RevealLayer } from './RevealLayer';
import './hero.css';

const baseImage = '/images/Base_image.png';
const revealImage = '/images/Reveal_image.png';

export function Hero() {
  return (
    <section id="top" className="landing-hero" aria-labelledby="hero-title">
      <div className="landing-hero__noise" aria-hidden="true" />
      <div className="landing-hero__vignette" aria-hidden="true" />
      <RevealLayer baseImage={baseImage} revealImage={revealImage} />

      <Container className="landing-hero__content">
        <div className="landing-hero__copy">
          <p className="landing-hero__caption">AI Solutions Architect</p>
          <h1 id="hero-title" className="landing-hero__title">
            <span className="landing-hero__title-line landing-hero__title-line--intro">I&apos;m</span>
            <span className="landing-hero__title-line landing-hero__title-line--name">SHOAIB</span>
          </h1>
          <p className="landing-hero__subtitle">Building AI Employees for Modern Businesses</p>
          <p className="landing-hero__description">
            Designing intelligent systems that automate operations, elevate customer experiences, and compound business leverage.
          </p>
          <div className="landing-hero__actions" aria-label="Hero actions">
            <Button href="#contact" size="lg">Start a Conversation</Button>
            <Button href="#projects" variant="glass" size="lg">View Work</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
