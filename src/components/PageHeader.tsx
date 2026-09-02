import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({
  title,
  subtitle,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-sage-50 to-cream-50",
        className
      )}
    >
      <div className="container-custom">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-700 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-sage-500 leading-relaxed text-balance">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
