// En src/pages/GuidesPage.tsx
import { MainLayout } from "../components/layout/MainLayout";
import { Card } from "../components/ui/Card";
import { allGuides } from "../data/guides"; // <-- 1. Importamos los datos centralizados

export function GuidesPage() {
  return (
    <MainLayout>
      <section className="text-center mb-16">
        <h1 className="font-sans font-bold text-4xl md:text-5xl mb-4 text-[var(--color-text-main)]">
          Archivo de Guías
        </h1>
        <p className="font-serif text-lg max-w-2xl mx-auto text-[var(--color-text-muted)]">
          Explora nuestra colección completa de artículos sobre meditación, nutrición, ejercicio y bienestar mental.
        </p>
      </section>

      {/* Grid con todas las tarjetas */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allGuides.map((guide) => (
            <Card 
              key={guide.slug} // La 'key' es crucial para que React optimice la lista
              title={guide.title}
              excerpt={guide.excerpt}
              imageUrl={guide.imageUrl}
              link={`/guias/${guide.slug}`} // Construimos el enlace dinámicamente
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}