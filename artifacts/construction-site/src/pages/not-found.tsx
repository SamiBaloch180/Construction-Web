import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display tracking-[0.4em] uppercase text-sm mb-4">Error 404</p>
          <h1 className="text-[12rem] font-display font-black text-foreground/10 leading-none select-none">
            404
          </h1>
          <h2 className="text-5xl md:text-6xl font-display font-black text-foreground -mt-8 mb-6">
            PAGE NOT FOUND
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed">
            Looks like this page doesn't exist. Even the best blueprints have gaps — let's get you back on track.
          </p>
          <Button asChild size="lg" className="font-display uppercase tracking-widest text-lg px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/">Back to Home <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
