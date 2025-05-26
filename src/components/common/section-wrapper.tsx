import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends PropsWithChildren {
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20 lg:py-24", className)}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
