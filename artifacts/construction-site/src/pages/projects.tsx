import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Tag } from "lucide-react";
import { useListProjects } from "@workspace/api-client-react";
import projectRes1 from "@/assets/project-res-1.png";
import projectRes2 from "@/assets/project-res-2.png";
import projectCom1 from "@/assets/project-com-1.png";
import projectCom2 from "@/assets/project-com-2.png";
import projectInd1 from "@/assets/project-ind-1.png";
import projectInd2 from "@/assets/project-ind-2.png";
import { fadeUp } from "@/lib/animations";

type Category = "All" | "Residential" | "Commercial" | "Industrial";

const projectImages: string[] = [projectRes1, projectCom1, projectInd1, projectRes2, projectCom2, projectInd2];

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: number;
  description: string;
  imageUrl?: string | null;
  featured?: boolean;
}

function ProjectModal({ project, onClose, image }: { project: Project; onClose: () => void; image: string }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-[#0d0d0d]/95 backdrop-blur-sm" />
        <motion.div
          className="relative bg-card border border-border w-full max-w-3xl overflow-hidden"
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
          <div className="aspect-video relative">
            <img src={image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-[#0d0d0d] flex items-center justify-center hover:bg-primary transition-colors"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-[10px] font-display font-black uppercase tracking-[0.2em] px-3 py-1.5">
              {project.category}
            </span>
          </div>
          <div className="p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-display font-black uppercase mb-5">{project.title}</h2>
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                {project.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                {project.year}
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-primary" />
                {project.category}
              </div>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">{project.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories: Category[] = ["All", "Residential", "Commercial", "Industrial"];
  const { data: allProjects, isLoading } = useListProjects({});

  const filtered = (allProjects ?? []).filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#0a0a0a] border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-display font-bold text-xs uppercase tracking-[0.35em]">Our Work</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-display font-black text-foreground uppercase mb-5">Portfolio</h1>
            <div className="w-16 h-0.5 bg-primary mb-7 sm:mb-8" />
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              847 completed projects. Each one a testament to what precision engineering and relentless execution can achieve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-display font-black uppercase tracking-[0.15em] px-5 sm:px-6 py-2.5 text-xs transition-all duration-200 border ${activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/3] bg-card animate-pulse" />
              ))}
            </div>
          ) : (
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.imageUrl ?? projectImages[i % projectImages.length]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
                    <span className="inline-block bg-primary text-primary-foreground text-[10px] font-display font-black uppercase tracking-[0.2em] px-3 py-1.5 mb-3 w-fit">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-black uppercase mb-2 text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-white/50 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {!isLoading && filtered.length === 0 && (
            <div className="text-center py-20 sm:py-24">
              <p className="text-muted-foreground font-display font-black uppercase tracking-wider text-lg sm:text-xl">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          image={projectImages[(selectedProject.id - 1) % projectImages.length]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
