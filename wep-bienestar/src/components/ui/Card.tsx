// En src/components/ui/Card.tsx
import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  excerpt: string;
  link: string;
}

export function Card({ imageUrl, title, excerpt, link }: CardProps) {
  return (
    <a href={link} className="block group bg-[var(--color-surface)] rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Imagen */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        <h3 className="font-sans text-xl font-bold mb-2 text-[var(--color-text-main)]">
          {title}
        </h3>
        <p className="font-serif text-base text-[var(--color-text-muted)] leading-relaxed">
          {excerpt}
        </p>
      </div>
    </a>
  );
}