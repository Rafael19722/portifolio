export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>
          {new Date().getFullYear()} Rafael Rangel. All rights reserved.
        </p>
        <p>
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
