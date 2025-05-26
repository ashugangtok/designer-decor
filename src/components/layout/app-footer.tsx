
"use client";

import { useState, useEffect } from 'react';

export function AppFooter() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        {currentYear !== null ? (
          <p>&copy; {currentYear} Designer &amp; Decor. All rights reserved.</p>
        ) : (
          <p>&copy; Designer &amp; Decor. All rights reserved.</p> 
        )}
        <p className="mt-1">Crafting unique interiors with passion and precision.</p>
      </div>
    </footer>
  );
}
