// Ubicación: src/pages/SingleRecipePage.tsx

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';

interface RecipeDetails {
  title: string;
  imageUrl: string;
  instructions: string[];
  tags: string[];
  youtubeUrl: string;
  ingredients: string[];
}

export function SingleRecipePage() {
  const { slug } = useParams<{ slug: string }>();
  
  const [recipe, setRecipe] = useState<RecipeDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (!slug) return;
      
      setIsLoading(true);
      setError(null);
      try {
        // --- LLAMADA A LA API CORREGIDA ---
        const response = await fetch(`https://bienestar-zen-api.onrender.com/api/recipes/${slug}`); // <-- RUTA CORREGIDA A PLURAL
        if (!response.ok) {
          throw new Error("Receta no encontrada o error en el servidor.");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError("No pudimos cargar los detalles de esta receta.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [slug]);

  if (isLoading) {
    return <MainLayout><p className="text-center font-serif animate-pulse">Cargando receta...</p></MainLayout>;
  }

  if (error || !recipe) {
    return (
      <MainLayout>
        <div className="text-center p-8 bg-[var(--color-surface)] rounded-xl shadow-soft">
          <h1 className="text-4xl font-bold font-sans">Error</h1>
          <p className="text-lg text-[var(--color-text-muted)] font-serif mt-4">{error}</p>
          <Link to="/recetas" className="mt-8 inline-block px-6 py-3 rounded-lg font-sans font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors">
            Volver a todas las recetas
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Link to="/recetas" className="font-sans font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors mb-4 inline-block">
            ← Volver a todas las recetas
          </Link>
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-[var(--color-text-main)] mb-3">
            {recipe.title}
          </h1>
          <div className="flex items-center space-x-2 text-[var(--color-text-muted)] flex-wrap">
            {recipe.tags.map(tag => (
              <span key={tag} className="bg-gray-200 text-xs font-bold px-2 py-1 rounded-full mt-2">{tag}</span>
            ))}
          </div>
        </header>

        <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-96 object-cover rounded-xl mb-12 shadow-soft" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="font-sans font-bold text-2xl border-b-2 border-[var(--color-primary)] pb-2 mb-4">Ingredientes</h2>
            <ul className="space-y-2 font-serif text-[var(--color-text-muted)]">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[var(--color-primary)] mr-2">✓</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-sans font-bold text-2xl border-b-2 border-[var(--color-primary)] pb-2 mb-4">Instrucciones</h2>
            <ol className="space-y-4 font-serif text-[var(--color-text-main)] leading-relaxed list-decimal list-inside">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            {recipe.youtubeUrl && (
              <a href={recipe.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-6 py-3 rounded-lg font-sans font-bold bg-red-600 text-white hover:bg-red-700 transition-colors">
                Ver Vídeo en YouTube
              </a>
            )}
          </div>
        </div>
      </article>
    </MainLayout>
  );
}