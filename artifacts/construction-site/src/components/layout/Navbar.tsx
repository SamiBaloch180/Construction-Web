import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-[#0d0d0d] border-b border-white/10"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">

          <img className="h-9 w-auto object-contain" src="/logo.png" alt="IronCraft Logo" />
          <span className="text-white font-display font-black text-xl tracking-widest uppercase leading-none">
            IRON<span className="text-white/50">/</span>CRAFT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-white/70"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block shrink-0">
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground font-display font-black text-xs uppercase tracking-[0.2em] px-6 py-3 hover:bg-primary/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-b border-white/10">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-base font-display font-bold uppercase tracking-wider py-3 px-2 border-b border-white/10 last:border-b-0 transition-colors ${isActive(link.path) ? "text-primary" : "text-white/70 hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block text-center bg-primary text-primary-foreground font-display font-black text-sm uppercase tracking-widest py-3 hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
