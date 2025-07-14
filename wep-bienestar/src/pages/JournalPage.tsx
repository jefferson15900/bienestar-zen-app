// Ubicación: src/pages/JournalPage.tsx


import { MainLayout } from '../components/layout/MainLayout';
import { useWellnessJournal } from '../hooks/useWellnessJournal'; // 1. Importamos nuestro hook


export function JournalPage() {
  // 2. Usamos el hook para obtener las entradas y la función para limpiar
  const { entries, clearJournal } = useWellnessJournal();

  return (
    <MainLayout>
      <section className="flex justify-between items-center mb-12">
        <div>
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-[var(--color-text-main)]">
            Mi Diario de Bienestar
          </h1>
          <p className="font-serif text-lg text-[var(--color-text-muted)] mt-2">
            Un registro de tus rutinas y descubrimientos.
          </p>
        </div>
        {entries.length > 0 && (
          <button 
            onClick={clearJournal}
            className="font-sans font-semibold text-sm text-red-500 hover:text-red-700"
          >
            Limpiar Diario
          </button>
        )}
      </section>

      {/* 3. Mostramos las entradas o un mensaje si está vacío */}
      <section>
        {entries.length === 0 ? (
          <div className="text-center py-16 bg-[var(--color-surface)] rounded-xl shadow-soft">
            <p className="font-serif text-xl text-[var(--color-text-muted)]">Tu diario está vacío.</p>
            <p className="mt-2 text-[var(--color-text-muted)]">Usa el Generador o el Quiz para añadir tu primera entrada.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {entries.map((entry) => (
              <div 
                key={entry.id} 
                className="bg-[var(--color-surface)] p-6 rounded-xl shadow-soft border-l-4"
                style={{ borderLeftColor: entry.type === 'routine' ? 'var(--color-accent)' : 'var(--color-primary)' }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-sans font-bold text-xl text-[var(--color-text-main)]">{entry.title}</h2>
                  <span className="font-sans text-sm text-[var(--color-text-muted)]">{entry.date}</span>
                </div>
                <p className="font-serif text-[var(--color-text-muted)]">{entry.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
}