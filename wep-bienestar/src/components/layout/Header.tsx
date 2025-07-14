// Ubicación: src/components/layout/Header.tsx


import { Link, useLocation } from 'react-router-dom'; // 1. Importa el hook useLocation

export function Header() {
  // 2. Obtenemos la información de la ubicación actual
  const location = useLocation();
  const currentPath = location.pathname;

  // 3. Creamos una función de ayuda para determinar los estilos
  // Esto hace que nuestro JSX sea mucho más limpio
  const getLinkClass = (path: string, isFeatured = false) => {
    const isActive = currentPath === path;
    
    // Clases base para todos los enlaces
    let classes = 'font-sans font-semibold transition-colors';

    if (isActive) {
      // Estilos si el enlace está ACTIVO
      classes += isFeatured ? ' text-[var(--color-accent-dark)]' : ' text-[var(--color-primary)]';
    } else {
      // Estilos si el enlace está INACTIVO
      classes += isFeatured ? ' text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]' : ' text-[var(--color-text-muted)] hover:text-[var(--color-primary)]';
    }
    
    // Hacemos que el generador sea siempre más grueso
    if(isFeatured) {
      classes += ' font-bold';
    }

    return classes;
  };


  return (
    <header className="w-full bg-[var(--color-surface)] shadow-soft sticky top-0 z-50">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-sans text-xl font-bold text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors">
            Bienestar Zen
          </Link>
          
          {/* 4. Aplicamos la función a cada enlace */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/herramientas" className={getLinkClass("/herramientas", true)}>
              Generador
            </Link>
            <Link to="/quizzes" className={getLinkClass("/quizzes")}>
              Quizzes
            </Link>
            <Link to="/mi-diario" className={getLinkClass("/mi-diario")}>
              Mi Diario
            </Link>
            <Link to="/guias" className={getLinkClass("/guias")}>
              Guías
            </Link>
            <Link to="/recetas" className={getLinkClass("/recetas")}>
              Recetas
            </Link>
          </nav>

          <div className="md:hidden">
            {/* Icono de hamburguesa iría aquí */}
          </div>
        </div>
      </div>
    </header>
  );
}