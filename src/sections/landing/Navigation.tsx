import { Menu } from 'lucide-react';
import { Button, Icon } from '../../components';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Navigation() {
  return (
    <header className="landing-nav" aria-label="Primary navigation">
      <a className="landing-nav__brand" href="#top" aria-label="Shoaib.co home">
        <span className="landing-nav__mark" aria-hidden="true" />
        <span>Shoaib.co</span>
      </a>

      <nav className="landing-nav__links" aria-label="Portfolio sections">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="landing-nav__link">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="landing-nav__actions">
        <Button href="#contact" size="sm" className="landing-nav__cta">
          Let&apos;s Talk
        </Button>
        <button className="landing-nav__menu" type="button" aria-label="Open navigation menu">
          <Icon icon={Menu} size="md" />
        </button>
      </div>
    </header>
  );
}
