// Ubicación: src/router/index.tsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importación de todas las páginas principales
import { HomePage } from "../pages/HomePage";
import { GuidesPage } from "../pages/GuidesPage";
import { RecipesPage } from "../pages/RecipesPage";
import { AboutPage } from "../pages/AboutPage";
import { JournalPage } from "../pages/JournalPage";
import { ToolsPage } from "../pages/ToolsPage";

// Importación de las páginas de detalle (single-item)
import { SingleGuidePage } from "../pages/SingleGuidePage";
import { SingleRecipePage } from "../pages/SingleRecipePage";

// Importación de las nuevas páginas para los Quizzes
import { QuizHubPage } from "../pages/QuizHubPage";
import { GenericQuizPage } from "../pages/GenericQuizPage"; // La página plantilla para cualquier quiz

// Definimos el mapa completo de nuestro sitio web.
const router = createBrowserRouter([
  // --- RUTAS PRINCIPALES ---
  { path: "/", element: <HomePage /> },
  { path: "/herramientas", element: <ToolsPage /> },
  { path: "/mi-diario", element: <JournalPage /> },
  
  // --- SECCIÓN DE GUÍAS ---
  { path: "/guias", element: <GuidesPage /> },
  { path: "/guias/:slug", element: <SingleGuidePage /> }, // Ruta dinámica para una guía específica

  // --- SECCIÓN DE RECETAS ---
  { path: "/recetas", element: <RecipesPage /> },
  { path: "/recetas/:slug", element: <SingleRecipePage /> }, // Ruta dinámica para una receta específica
  
  // --- SECCIÓN DE QUIZZES (NUEVA ESTRUCTURA) ---
  { path: "/quizzes", element: <QuizHubPage /> }, // Página que muestra todos los quizzes
  { path: "/quiz/:quizId", element: <GenericQuizPage /> }, // Ruta dinámica para un quiz específico

  // --- OTRAS PÁGINAS ---
  { path: "/sobre-nosotros", element: <AboutPage /> },

  // Podrías añadir una página para manejar errores 404 aquí
  // { path: "*", element: <NotFoundPage /> }
]);

// Este es el componente que envuelve toda la lógica del router.
// Se importa en App.tsx para activar la navegación en todo el sitio.
export function AppRouter() {
  return <RouterProvider router={router} />;
}