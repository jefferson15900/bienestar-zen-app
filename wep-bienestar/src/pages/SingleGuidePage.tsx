// Ubicación: src/pages/SingleGuidePage.tsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { allGuides } from '../data/guides';

export function SingleGuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = allGuides.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <MainLayout>
        <div className="text-center">
          <h1 className="text-4xl font-bold font-sans">Guía no encontrada</h1>
          <p className="text-lg text-[var(--color-text-muted)] font-serif mt-4">
            Lo sentimos, no pudimos encontrar la guía que estás buscando.
          </p>
          <Link to="/guias" className="mt-8 inline-block px-6 py-3 rounded-lg font-sans font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors">
            Ver todas las guías
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <Link to="/guias" className="font-sans font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors mb-4 inline-block">
            ← Volver a todas las guías
          </Link>
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-[var(--color-text-main)] mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] font-serif">
            Publicado el 15 de Julio, 2025
          </p>
        </header>

        {/* La imagen ahora se mostrará correctamente */}
        <img 
          src={guide.imageUrl} 
          alt={guide.title}
          className="w-full h-auto aspect-video object-cover rounded-xl mb-12 shadow-soft"
        />

        {/* --- RENDERIZADOR DE CONTENIDO DINÁMICO --- */}
        <div className="font-serif text-[var(--color-text-main)] leading-relaxed space-y-6 text-lg">
          {guide.content.map((block, index) => {
            switch (block.type) {
              case 'heading':
                return (
                  <h2 key={index} className="font-sans font-bold text-3xl mt-12 mb-4 border-b-2 border-[var(--color-primary-light)] pb-2">
                    {block.text}
                  </h2>
                );
              case 'paragraph':
                return (
                  <p key={index}>
                    {block.text}
                  </p>
                );
              case 'list':
                return (
                  <ul key={index} className="list-disc list-inside space-y-3 pl-4">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>
      </article>
    </MainLayout>
  );
}