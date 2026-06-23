import { useState, useEffect } from 'react';

const navLinks = [
{ label: 'Home', href: '#home' },
{ label: 'Gallery', href: '#gallery' },
{ label: 'Shop', href: '#shop' },
{ label: 'About', href: '#about' },
{ label: 'Contact', href: '#contact' },
];

export default function Header() {
const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 10);
};

window.addEventListener('scroll', handleScroll);

return () => {
  window.removeEventListener('scroll', handleScroll);
};

}, []);

return (
<header
className={"fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ scrolled ? 'bg-[#14070d]/80 backdrop-blur-md' : 'bg-transparent' }"}
>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="h-16 flex items-center justify-between">

      {/* Logo */}
      <a
        href="#home"
        className="
        text-white
        font-bold
        text-base
        sm:text-lg
        tracking-[0.2em]
        uppercase
        truncate
        max-w-[70%]
        "
        style={{
        fontFamily: "'Caveat', cursive",
        letterSpacing: "0.05em",
      }}
      >
        NFGALLERY
      </a>

      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white/70 hover:text-white text-sm transition"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile */}
      <button
        className="md:hidden p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </div>
      </button>

    </div>

  </div>

  {/* Mobile Menu */}
  <div
    className={`
      md:hidden
      overflow-hidden
      transition-all
      duration-300
      bg-black/95
      ${menuOpen ? 'max-h-80 py-6' : 'max-h-0'}
    `}
  >
    <nav className="flex flex-col items-center gap-6">

      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className="text-white text-sm"
        >
          {link.label}
        </a>
      ))}

    </nav>
  </div>
</header>

);
}
