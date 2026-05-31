import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-border pt-14 sm:pt-20 pb-8 sm:pb-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-primary flex items-center justify-center font-display font-black text-primary-foreground text-lg leading-none">
                B
              </div>
              <span className="text-white font-display font-black text-xl tracking-widest uppercase">
                IRON<span className="text-white/40">/</span>CRAFT
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              We build the foundations of tomorrow with uncompromising precision. Industrial-grade construction for those who demand excellence.
            </p>
            <div className="flex gap-2.5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors text-white/50">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-black uppercase tracking-[0.2em] mb-5 text-white">Quick Links</h4>
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Portfolio", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors uppercase text-xs font-bold tracking-wider">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-display font-black uppercase tracking-[0.2em] mb-5 text-white">Contact Us</h4>
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-xs leading-relaxed">123 Heavy Industry Way<br />Steel City, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground text-xs">1-800-IRON-BLD</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground text-xs">build@ironcraft.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-display font-black uppercase tracking-[0.2em] mb-5 text-white">Newsletter</h4>
            <div className="w-8 h-0.5 bg-primary mb-5" />
            <p className="text-muted-foreground mb-4 text-xs leading-relaxed">Subscribe for industry news and company updates.</p>
            <form className="flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-xs px-4 py-3 focus:outline-none focus:border-primary transition-colors font-sans"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground font-display font-black text-xs uppercase tracking-[0.2em] px-4 py-3 hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-bold uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} IronCraft Construction. All rights reserved.</p>
          <div className="flex gap-5 sm:gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
