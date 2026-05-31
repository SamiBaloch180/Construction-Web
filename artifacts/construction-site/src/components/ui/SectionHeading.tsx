import { ReactNode } from "react";

export function SectionHeading({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="inline-block text-primary font-bold uppercase tracking-[0.2em] mb-2 text-sm border-l-4 border-primary pl-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-wider text-foreground">
        {title}
      </h2>
    </div>
  );
}
