import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, HardHat, Layers, Drill } from "lucide-react";
import { mockStats, mockServices, mockProjects, mockTestimonials } from "@/lib/data";
import heroBg from "@/assets/hero-bg.png";
import projectRes1 from "@/assets/project-res-1.png";
import projectCom1 from "@/assets/project-com-1.png";
import projectInd1 from "@/assets/project-ind-1.png";
import { fadeUp } from "@/lib/animations";

const serviceIcon: Record<string, React.ReactNode> = {
  Home: <HardHat className="w-6 h-6" />,
  Building2: <Layers className="w-6 h-6" />,
  Hammer: <Drill className="w-6 h-6" />,
  Palette: <Layers className="w-6 h-6" />,
  ClipboardList: <HardHat className="w-6 h-6" />,
  Wrench: <Drill className="w-6 h-6" />,
};

const projectImages: Record<number, string> = {
  1: projectRes1,
  2: projectCom1,
  3: projectInd1,
};

export default function Home() {
  const stats = mockStats;
  const services = mockServices;
  const projects = mockProjects;
  const testimonials = mockTestimonials;

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredServices = services.filter((s) => s.featured).slice(0, 3);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Warm amber/sepia overlay — matches reference */}
        <div className="absolute inset-0 bg-[#1a0d00]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/50 to-transparent" />

        {/* Vertical EST text on left edge */}
        <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10 hidden md:flex">
          <div className="w-px h-12 bg-primary" />
          <span
            className="text-white/30 font-display font-bold text-[10px] tracking-[0.4em] uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            EST. 1999 / CH
          </span>
          <div className="w-px h-12 bg-white/20" />
        </div>

        {/* Hero content — LEFT ALIGNED */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 sm:pt-40 pb-24">
          {/* Tagline row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-4 mb-8 sm:mb-10"
          >
            <div className="w-10 sm:w-14 h-px bg-primary" />
            <span className="text-primary font-display font-bold text-xs sm:text-sm uppercase tracking-[0.35em]">
              Industrial Construction · Since 1999
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-[clamp(2.2rem,6.5vw,5.5rem)] font-display font-black leading-[0.92] text-white mb-8 sm:mb-10 uppercase"
          >
            WE BUILD<br />
            WHAT <span className="text-primary">STANDS</span><br />
            THE TEST.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-white/65 text-base sm:text-lg max-w-md leading-relaxed mb-10 sm:mb-14 font-light"
          >
            From foundation to finish — three decades engineering residential, commercial, and industrial structures across North America.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display font-black text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-primary/90 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-display font-bold text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-primary hover:text-primary transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Bottom amber gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── STATS ── */}
      <section className="bg-primary py-0">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "Years Experience", value: stats.yearsExperience ?? "25", suffix: "+" },
              { label: "Projects Completed", value: stats.projectsCompleted ?? "847", suffix: "+" },
              { label: "Team Members", value: stats.teamSize ?? "120", suffix: "+" },
              { label: "Countries Served", value: stats.countriesServed ?? "12", suffix: "" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className={`text-center py-8 sm:py-10 px-4 ${i < 3 ? "border-r border-primary-foreground/20" : ""} ${i < 2 ? "border-b border-primary-foreground/20 md:border-b-0" : ""}`}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-primary-foreground leading-none mb-1.5">
                  {s.value}{s.suffix}
                </div>
                <div className="text-primary-foreground/60 font-bold uppercase tracking-[0.2em] text-xs">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVICES ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">What We Do</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-foreground uppercase">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {(featuredServices.length ? featuredServices : Array(3).fill(null)).map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-card p-8 sm:p-10 group hover:bg-primary/5 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                {service ? (
                  <>
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-7 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {serviceIcon[service.icon] ?? <Drill className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-black mb-4 uppercase group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm">{service.description}</p>
                    <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all duration-300">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </>
                ) : (
                  <div className="animate-pulse space-y-4">
                    <div className="h-12 w-12 bg-muted" />
                    <div className="h-6 bg-muted w-3/4" />
                    <div className="h-4 bg-muted w-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 sm:mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border border-primary text-primary font-display font-black text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#111]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">Our Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-foreground uppercase">Featured Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {(featuredProjects.length ? featuredProjects : Array(3).fill(null)).map((project, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group relative overflow-hidden aspect-[4/3]"
              >
                <img
                  src={project?.imageUrl ?? projectImages[i + 1] ?? projectRes1}
                  alt={project?.title ?? "Project"}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                {/* Orange top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  {project ? (
                    <>
                      <span className="inline-block bg-primary text-primary-foreground text-[10px] font-display font-black uppercase tracking-[0.2em] px-3 py-1.5 mb-3 w-fit">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-black text-white mb-2 uppercase">{project.title}</h3>
                      <div className="flex items-center justify-between text-[11px] text-white/50 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                      </div>
                    </>
                  ) : (
                    <div className="animate-pulse space-y-2">
                      <div className="h-5 w-20 bg-primary/50" />
                      <div className="h-7 bg-white/20 w-3/4" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 sm:mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-black text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-primary/90 transition-colors"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">Client Reviews</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-foreground uppercase">What They Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {(testimonials ?? []).slice(0, 4).map((t, i) => (
              <motion.div
                key={t.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-card p-8 md:p-10 relative"
              >
                <Quote className="absolute top-8 right-8 w-9 h-9 text-primary/15" />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating ?? 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-base leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="border-t border-border pt-5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-display font-black text-base">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-display font-black text-sm uppercase tracking-wide">{t.name}</p>
                    <p className="text-muted-foreground text-xs font-semibold tracking-wider">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-primary py-16 sm:py-20 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-primary-foreground uppercase mb-3">
                Ready to Build?
              </h2>
              <p className="text-primary-foreground/70 text-base sm:text-lg max-w-xl leading-relaxed">
                Tell us about your project. We'll respond within 24 hours with a comprehensive evaluation.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-display font-black text-sm uppercase tracking-[0.2em] px-8 sm:px-10 py-4 sm:py-5 hover:bg-primary-foreground/90 transition-colors whitespace-nowrap"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
