// Ubicación: src/pages/RecipesPage.tsx

import React, { useState, useEffect } from 'react';
import { MainLayout } from "../components/layout/MainLayout";
import { Card } from "../components/ui/Card";

// Definimos la estructura de la receta que recibiremos de nuestra API
interface ApiRecipe {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export function RecipesPage() {
  // Estados para manejar la llamada a la API
  const [recipes, setRecipes] = useState<ApiRecipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect para llamar a la API una sola vez cuando la página carga
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:3001/api/healthy-recipes');
        if (!response.ok) {
          throw new Error("Error al cargar las recetas.");
        }
        const data = await response.json();
        setRecipes(data);
        
      } catch (err) {
        setError("No pudimos cargar las recetas en este momento. Por favor, intenta de nuevo más tarde.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []); // El array vacío asegura que se ejecute solo una vez

  return (
    <MainLayout>
      <section className="text-center mb-16">
        <h1 className="font-sans font-bold text-4xl md:text-5xl mb-4 text-[var(--color-text-main)]">
          Recetario Saludable
        </h1>
        <p className="font-serif text-lg max-w-2xl mx-auto text-[var(--color-text-muted)]">
          Descubre recetas deliciosas, fáciles y llenas de nutrientes para cada momento del día.
        </p>
      </section>

      <section>
        {isLoading && <p className="text-center font-serif animate-pulse">Cargando recetas deliciosas...</p>}
        {error && <p className="text-center text-red-500 font-serif">{error}</p>}
        
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Card 
                key={recipe.slug}
                title={recipe.title}
                excerpt={recipe.excerpt}
                imageUrl={recipe.imageUrl}
                // La página de detalle aún no funcionará, lo arreglaremos después
                link={`/recetas/${recipe.slug}`}
              />
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
}