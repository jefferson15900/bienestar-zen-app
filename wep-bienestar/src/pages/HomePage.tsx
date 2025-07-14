// En src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import { MainLayout } from "../components/layout/MainLayout";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { allGuides } from "../data/guides"; // <-- 1. Importamos los mismos datos

export function HomePage() {
  // 2. Seleccionamos solo los primeros 3 artículos para destacar
  const featuredGuides = allGuides.slice(0, 3);

  return (
    <MainLayout>
      {/* --- Sección Hero --- */}
      <section className="text-center flex flex-col items-center mb-24 md:mb-32">
        {/* ... (el contenido del hero no cambia) ... */}
        <h1 className="font-sans font-bold text-4xl md:text-6xl max-w-3xl mb-6 text-[var(--color-text-main)]">
          Encuentra tu Calma, Despierta tu Energía
        </h1>
        <p className="font-serif text-lg md:text-xl max-w-2xl mx-auto mb-10 text-[var(--color-text-muted)] leading-relaxed">
          Una guía personal de bienestar para una vida más consciente y plena. Explora herramientas y recursos diseñados para ti.
        </p>
        <Link to="/herramientas">
        <Button>
          Descubre tu Plan de Bienestar
        </Button>
        </Link>
      </section>

      {/* --- Sección de Guías Destacadas (ahora usa datos dinámicos) --- */}
      <section>
        <h2 className="text-center font-sans font-bold text-3xl md:text-4xl mb-12 text-[var(--color-text-main)]">
          Explora Nuestras Guías
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 3. Mapeamos sobre los artículos destacados */}
          {featuredGuides.map((guide) => (
            <Card 
              key={guide.slug}
              title={guide.title}
              excerpt={guide.excerpt}
              imageUrl={guide.imageUrl}
              link={`/guias/${guide.slug}`}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}