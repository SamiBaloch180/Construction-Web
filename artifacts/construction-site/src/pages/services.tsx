import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Home, Building2, Hammer, Palette, ClipboardList, Wrench } from "lucide-react";
import { useListServices } from "@workspace/api-client-react";
import { fadeUp } from "@/lib/animations";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Home,
  Building2,
  Hammer,
  Palette,
  ClipboardList,
  Wrench,
};

const reasons = [
  { title: "Contract Transparency", body: "Fixed pricing, itemized contracts, and no surprise change orders. What you approve is what you pay." },
  { title: "Safety-First Culture", body: "Zero-incident culture across all job sites. OSHA certified teams, daily safety briefings, and rigorous subcontractor screening." },
  { title: "On-Time Delivery", body: "97.4% on-time delivery rate across 847 projects. We use critical-path scheduling and weekly milestone tracking." },
  { title: "Post-Build Warranty", body: "5-year structural warranty on all new construction. 2-year warranty on renovation work. No fine print." },
];

export default function Services() {
  const { data: services, isLoading } = useListServices();

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#0a0a0a] border-b border-border overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-white/[0.03]" style={{ left: `${(i + 1) * 11.1}%` }} />
          ))}
        </div>
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">What We Offer</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-display font-black text-foreground uppercase mb-5">Our Services</h1>
            <div className="w-16 h-0.5 bg-primary mb-7 sm:mb-8" />
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              From single-family residences to 40-story towers, we bring the same standard of precision and reliability to every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-card p-8 sm:p-10 animate-pulse">
                  <div className="h-12 w-12 bg-muted mb-6" />
                  <div className="h-6 bg-muted w-2/3 mb-4" />
                  <div className="h-4 bg-muted w-full mb-2" />
                  <div className="h-4 bg-muted w-3/4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {(services ?? []).map((service, i) => {
                const Icon = iconMap[service.icon] ?? Wrench;
                return (
                  <motion.div
                    key={service.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="bg-card p-8 sm:p-10 group hover:bg-primary/5 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left" />
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-7 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-black uppercase mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-7 text-sm">{service.description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all duration-300"
                    >
                      Request a Quote <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* WHY IRONCRAFT */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">Our Approach</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-black uppercase mb-8">Built Different.<br />By Design.</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                Every IronCraft project starts with a simple question: what would we build if it were our own? That mindset shapes every spec, every pour, and every final inspection.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                We don't chase shortcuts. We chase excellence — because our name is on every building we leave behind.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              {reasons.map((item, i) => (
                <div key={i} className="border-l-2 border-primary pl-7 py-5 border-b border-border/50 last:border-b-0">
                  <h4 className="font-display font-black text-base uppercase tracking-wide mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 sm:py-20 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-primary-foreground uppercase mb-3">
                Have a Project in Mind?
              </h2>
              <p className="text-primary-foreground/70 text-base sm:text-lg">
                Let's talk scope, timeline, and budget. No obligation.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-display font-black text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-primary-foreground/90 transition-colors whitespace-nowrap"
              >
                Get a Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
