import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react";
import { mockTeam } from "@/lib/data";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import { fadeUp } from "@/lib/animations";

const teamImages = [team1, team2, team3];

const values = [
  { icon: Shield, title: "Uncompromising Safety", body: "Every worker, every day, goes home safe. Safety is not a compliance checkbox — it's the foundation of everything we do on site." },
  { icon: Clock, title: "Relentless Punctuality", body: "Schedules are promises. We treat every milestone like a contract obligation, because to our clients, it is." },
  { icon: Award, title: "Structural Excellence", body: "We build to exceed code, not just meet it. Every joint, every load-bearing element, every material choice is made to outlast expectations." },
  { icon: Users, title: "Honest Partnership", body: "We're straight-talkers. If there's a problem on your site, you'll hear it from us first — with a solution already in hand." },
];

export default function About() {
  const team = mockTeam;
  const isLoading = false;

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#0a0a0a] border-b border-border overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-white/[0.03]" style={{ left: `${(i + 1) * 14.28}%` }} />
          ))}
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">Our Story</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-display font-black text-foreground uppercase mb-5">About IronCraft</h1>
            <div className="w-16 h-0.5 bg-primary mb-7 sm:mb-8" />
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              25 years of building trust, one structure at a time. IronCraft was founded by tradespeople, for the people who demand more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">How We Started</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-black uppercase mb-8">From the Ground Up</h2>
              <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
                <p>
                  In 1999, Frank Callahan walked off a jobsite in Pittsburgh with a borrowed truck and a conviction: that clients deserved better than excuses. He started IronCraft with three workers, one project, and an uncompromising standard.
                </p>
                <p>
                  That first project — a 12-unit residential build on the South Side — came in eight days early and $40,000 under budget. Word traveled fast. Within two years, IronCraft had expanded to commercial work. Within five, we were operating across three states.
                </p>
                <p>
                  Today, IronCraft is a 120-person construction firm with projects spanning 12 countries. Our structure has grown, but our standard hasn't moved an inch.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="bg-card border border-border p-8 sm:p-12 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 h-px bg-primary" />
                <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">Our Mission</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black uppercase mb-7">What We Stand For</h3>
              <blockquote className="text-lg sm:text-2xl font-display font-bold italic text-foreground/90 leading-snug border-l-4 border-primary pl-6 mb-7">
                "We don't build for the photograph. We build for the generation that inherits it."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Our mission is to deliver construction that endures — structurally, economically, and reputationally. Every project is a statement about what lasting work looks like.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">What Drives Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black uppercase">Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="bg-card p-8 sm:p-10 group hover:bg-primary/5 transition-colors duration-300 relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-black uppercase tracking-wide mb-4">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{v.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">The People</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black uppercase">Our Leadership</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-card mb-4" />
                  <div className="h-5 bg-card w-3/4 mb-2" />
                  <div className="h-4 bg-card w-1/2" />
                </div>
              ))
              : (team ?? []).map((member, i) => (
                <motion.div
                  key={member.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="group"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-card mb-4 relative">
                    <img
                      src={member.imageUrl ?? teamImages[i % teamImages.length]}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-black uppercase tracking-wide mb-0.5 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-wider mb-2">{member.role}</p>
                  {member.bio && <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>}
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0a0a0a] border-t border-border">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10 sm:mb-16">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase">Certifications & Awards</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { award: "LEED Platinum", body: "Green Building Council" },
              { award: "AGC Member", body: "Associated General Contractors" },
              { award: "OSHA 500", body: "Safety Training Certified" },
              { award: "Top Builder", body: "ENR Top 400 Contractors" },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-card p-8 sm:p-10 text-center group hover:bg-primary/5 transition-colors"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-display font-black text-sm sm:text-base uppercase tracking-wide mb-1.5">{c.award}</h4>
                <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 sm:py-20 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-display font-black text-primary-foreground uppercase mb-3">
                Let's Build Together
              </h2>
              <p className="text-primary-foreground/70 text-base sm:text-lg">
                25 years of precision. Your project is next.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-display font-black text-sm uppercase tracking-[0.2em] px-8 py-4 hover:bg-primary-foreground/90 transition-colors whitespace-nowrap"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
