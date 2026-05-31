import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["123 Heavy Industry Way", "Steel City, CA 90210"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["1-800-IRON-BLD", "+1 (555) 476-6253"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["build@ironcraft.com", "projects@ironcraft.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Fri: 7:00 AM – 6:00 PM", "Sat: 8:00 AM – 2:00 PM"],
  },
];

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation & Remodeling",
  "Interior Design",
  "Project Management",
  "Structural Engineering",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

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
              <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">Get in Touch</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-display font-black text-foreground uppercase mb-5">Contact Us</h1>
            <div className="w-16 h-0.5 bg-primary mb-7 sm:mb-8" />
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              Tell us about your project. We'll respond within 24 hours with a qualified assessment and no-obligation estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-14">
            {/* LEFT: Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="border border-border bg-card p-6 hover:border-primary transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                        <Icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-display font-black uppercase tracking-wider mb-1 text-sm">{info.title}</h4>
                        {info.lines.map((line, j) => (
                          <p key={j} className="text-muted-foreground text-xs leading-relaxed">{line}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT: Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-border p-10 sm:p-16 text-center h-full flex flex-col items-center justify-center min-h-[400px] relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
                  <CheckCircle className="w-14 h-14 sm:w-16 sm:h-16 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl sm:text-4xl font-display font-black uppercase mb-4">Message Received</h2>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your project and respond within 24 business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border p-6 sm:p-10 space-y-6 relative">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
                  <h2 className="text-2xl sm:text-3xl font-display font-black uppercase">Project Inquiry</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="font-display font-black uppercase tracking-wider text-xs">
                        Full Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="bg-background border-border h-11"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-display font-black uppercase tracking-wider text-xs">
                        Email Address <span className="text-primary">*</span>
                      </Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="bg-background border-border h-11"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="font-display font-black uppercase tracking-wider text-xs">Phone Number</Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="bg-background border-border h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-display font-black uppercase tracking-wider text-xs">Project Type</Label>
                      <Select onValueChange={(val) => setFormData({ ...formData, projectType: val })}>
                        <SelectTrigger className="bg-background border-border h-11">
                          <SelectValue placeholder="Select service..." />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-display font-black uppercase tracking-wider text-xs">
                      Project Details <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project — scope, timeline, location, budget range..."
                      className="bg-background border-border min-h-[140px] resize-none"
                      required
                    />
                  </div>

                  {errorMsg && (
                    <div className="flex items-center gap-3 text-destructive text-sm font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground font-display font-black text-sm uppercase tracking-[0.2em] py-4 hover:bg-primary/90 transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Submit Project Inquiry"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="bg-[#0a0a0a] border-t border-border">
        <div className="w-full h-64 sm:h-80 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="absolute border-border border" style={{
                left: `${(i % 5) * 25}%`,
                top: `${Math.floor(i / 5) * 25}%`,
                width: "25%",
                height: "25%",
              }} />
            ))}
          </div>
          <div className="relative text-center px-4">
            <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
            <p className="font-display font-black text-sm sm:text-lg uppercase tracking-widest text-muted-foreground">
              123 Heavy Industry Way, Steel City, CA 90210
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
