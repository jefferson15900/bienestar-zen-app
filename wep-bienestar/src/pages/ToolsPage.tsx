// Ubicación: src/pages/ToolsPage.tsx

import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { useWellnessJournal } from '../hooks/useWellnessJournal';

// --- DEFINICIONES ---
interface Routine {
  name: string;
  description: string;
}

// Opciones para nuestros selectores
const OBJECTIVE_OPTIONS = ['Relajarme', 'Tener más energía', 'Concentrarme'];
const TIME_OPTIONS = [5, 10, 15];
const ENERGY_OPTIONS = ['Bajo', 'Medio', 'Alto'];
const LOCATION_OPTIONS = ['En casa', 'La oficina', 'El exterior'];

export function ToolsPage() {
  // --- ESTADOS ---
  const [step, setStep] = useState(1); // Controla el paso actual del "wizard"
  
  // Estados para las selecciones del usuario
  const [selections, setSelections] = useState({
    objective: OBJECTIVE_OPTIONS[0],
    time: TIME_OPTIONS[0],
    energy: ENERGY_OPTIONS[0],
    location: LOCATION_OPTIONS[0],
  });

  // Estados para el resultado de la IA
  const [generatedRoutine, setGeneratedRoutine] = useState<Routine | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Hook del diario
  const { addEntry } = useWellnessJournal();

  // --- LÓGICA ---
  const handleSelection = (field: keyof typeof selections, value: string | number) => {
    setSelections(prev => ({ ...prev, [field]: value }));
    // Avanza al siguiente paso si no es el último
    if (step < 4) {
      setTimeout(() => setStep(s => s + 1), 200); // Pequeño delay para una transición suave
    }
  };

  const handleGenerateRoutine = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedRoutine(null);

    try {
      const response = await fetch('http://localhost:3001/api/generate-routine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selections),
      });

      if (!response.ok) throw new Error('La respuesta del servidor no fue exitosa.');

      const data: Routine = await response.json();
      setGeneratedRoutine(data);
      addEntry({ type: 'routine', title: data.name, description: data.description });

    } catch (err) {
      setError('Lo sentimos, algo salió mal. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const restartGenerator = () => {
    setStep(1);
    setGeneratedRoutine(null);
    setError(null);
  }

  // --- RENDERIZADO ---
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-sans font-bold text-4xl md:text-5xl mb-4 text-[var(--color-text-main)]">
          Tu Coach de Bienestar Personal IA
        </h1>
        <p className="font-serif text-lg max-w-2xl mx-auto text-[var(--color-text-muted)] mb-12">
          Responde unas preguntas y crearemos una rutina perfectamente adaptada para ti.
        </p>

        {/* --- CONTENEDOR DEL WIZARD --- */}
        <div className="bg-[var(--color-surface)] p-8 md:p-12 rounded-xl shadow-soft transition-all duration-500">
          
          {/* Si no hay rutina generada, muestra el wizard */}
          {!generatedRoutine && !isLoading && !error && (
            <div className="space-y-8">
              {/* Paso 1: Objetivo */}
              <div className={`transition-all duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <label className="block font-sans font-semibold text-xl mb-4 text-[var(--color-text-main)]">Mi objetivo es...</label>
                <div className="flex justify-center flex-wrap gap-3">
                  {OBJECTIVE_OPTIONS.map(opt => (
                    <button key={opt} onClick={() => handleSelection('objective', opt)} className={`px-5 py-2 rounded-full font-semibold transition-all ${selections.objective === opt ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 2: Tiempo */}
              <div className={`transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <label className="block font-sans font-semibold text-xl mb-4 text-[var(--color-text-main)]">Tengo disponibles...</label>
                <div className="flex justify-center flex-wrap gap-3">
                  {TIME_OPTIONS.map(opt => (
                    <button key={opt} onClick={() => handleSelection('time', opt)} className={`px-5 py-2 rounded-full font-semibold transition-all ${selections.time === opt ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                      {opt} minutos
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 3: Energía */}
              <div className={`transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <label className="block font-sans font-semibold text-xl mb-4 text-[var(--color-text-main)]">Mi nivel de energía es...</label>
                <div className="flex justify-center flex-wrap gap-3">
                  {ENERGY_OPTIONS.map(opt => (
                    <button key={opt} onClick={() => handleSelection('energy', opt)} className={`px-5 py-2 rounded-full font-semibold transition-all ${selections.energy === opt ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 4: Ubicación y Botón de Generar */}
              <div className={`transition-all duration-500 ${step >= 4 ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <label className="block font-sans font-semibold text-xl mb-4 text-[var(--color-text-main)]">Y estoy en...</label>
                <div className="flex justify-center flex-wrap gap-3">
                  {LOCATION_OPTIONS.map(opt => (
                    <button key={opt} onClick={() => handleSelection('location', opt)} className={`px-5 py-2 rounded-full font-semibold transition-all ${selections.location === opt ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="mt-12">
                  <button onClick={handleGenerateRoutine} className="px-8 py-4 font-sans font-bold text-white text-lg rounded-xl transition-all bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transform hover:scale-105">
                    Crear mi Rutina
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* --- VISTAS DE ESTADO Y RESULTADO --- */}
          {isLoading && <p className="font-serif animate-pulse text-xl">Creando algo especial para ti...</p>}
          {error && <p className="font-serif text-red-500 text-xl">{error}</p>}
          {generatedRoutine && (
            <div className="text-center">
              <h2 className="font-sans font-bold text-3xl mb-3 text-[var(--color-text-main)]">{generatedRoutine.name}</h2>
              <p className="font-serif text-lg leading-relaxed text-[var(--color-text-muted)] mb-8">{generatedRoutine.description}</p>
              <button onClick={restartGenerator} className="font-sans font-semibold text-[var(--color-primary)] hover:underline">
                Crear otra rutina
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}