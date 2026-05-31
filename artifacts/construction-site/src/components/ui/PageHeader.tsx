import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  imagePath: string;
}

export function PageHeader({ title, description, imagePath }: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img src={imagePath} alt={title} className="w-full h-full object-cover opacity-30 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-black uppercase tracking-widest text-foreground mb-4"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-24 h-1 bg-primary mx-auto mb-4" 
          />
        )}
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
