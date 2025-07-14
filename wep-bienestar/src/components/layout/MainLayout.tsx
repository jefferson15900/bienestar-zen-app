// En src/components/layout/MainLayout.tsx
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    // 'flex flex-col min-h-screen' hace que el footer se pegue abajo
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 sm:px-8 py-16 md:py-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}