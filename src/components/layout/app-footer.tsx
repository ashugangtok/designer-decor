export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Designers and decor. All rights reserved.</p>
        <p className="mt-1">Crafting unique interiors with passion and precision.</p>
      </div>
    </footer>
  );
}
