// En src/components/layout/Footer.tsx
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--color-background)] border-t border-t-[var(--color-primary)]/20">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-6">
        <p className="font-serif text-center text-sm text-[var(--color-text-muted)]">
          © {currentYear} Bienestar Zen. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}