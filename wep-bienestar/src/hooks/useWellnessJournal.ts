// Ubicación: src/hooks/useWellnessJournal.ts

import { useState, useEffect } from 'react';

// Definimos la estructura de una entrada en nuestro diario
export interface JournalEntry {
  id: string; // Un ID único para cada entrada
  type: 'routine' | 'quiz'; // Para saber qué tipo de entrada es
  title: string;
  description: string;
  date: string; // Guardaremos la fecha como un string
}

const JOURNAL_KEY = 'wellnessJournal'; // La clave que usaremos en localStorage

export function useWellnessJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  // Este efecto se ejecuta solo una vez, cuando el componente se monta, para cargar los datos guardados.
  useEffect(() => {
    try {
      const savedEntries = localStorage.getItem(JOURNAL_KEY);
      if (savedEntries) {
        setEntries(JSON.parse(savedEntries));
      }
    } catch (error) {
      console.error("Error al cargar el diario desde localStorage", error);
    }
  }, []);

  // Función para añadir una nueva entrada al diario
  const addEntry = (entry: Omit<JournalEntry, 'id' | 'date'>) => {
    const newEntry: JournalEntry = {
      ...entry,
      id: new Date().toISOString(), // Usamos la fecha como ID único
      date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }),
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(updatedEntries));
  };

  // Función para limpiar el diario
  const clearJournal = () => {
    setEntries([]);
    localStorage.removeItem(JOURNAL_KEY);
  };

  // El hook devuelve el estado (las entradas) y las funciones para manipularlo
  return { entries, addEntry, clearJournal };
}