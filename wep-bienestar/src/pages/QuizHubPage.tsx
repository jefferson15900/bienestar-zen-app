// Ubicación: src/pages/QuizHubPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { Card } from '../components/ui/Card'; // Reutilizaremos nuestras tarjetas

export function QuizHubPage() {
  return (
    <MainLayout>
      <section className="text-center mb-16">
        <h1 className="font-sans font-bold text-4xl md:text-5xl mb-4">
          Centro de Autodescubrimiento
        </h1>
        <p className="font-serif text-lg max-w-2xl mx-auto text-[var(--color-text-muted)]">
          Elige uno de nuestros quizzes para aprender más sobre ti mismo y tu bienestar.
        </p>
      </section>

      {/* --- AHORA CON 4 TARJETAS --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Fila 1 */}
        <Card
          title="¿Cuál es tu Ladrón de Energía?"
          excerpt="Descubre qué agota tus reservas y obtén un consejo personalizado de nuestra IA para solucionarlo."
          imageUrl="/images/quiz-energia.jpg"
          link="/quiz/ladron-de-energia"
        />
        <Card
          title="¿Qué Ejercicio va contigo?"
          excerpt="Tu personalidad es la clave para encontrar una actividad física que realmente disfrutes y mantengas."
          imageUrl="/images/quiz-ejercicio.jpg"
          link="/quiz/personalidad-ejercicio"
        />
        
        {/* Fila 2 - NUEVAS TARJETAS */}
        <Card
          title="¿Cuál es tu Cronotipo?"
          excerpt="Aprende sobre tu reloj biológico interno para optimizar tus horarios de sueño, trabajo y descanso."
          imageUrl="/images/quiz-cronotipo.jpg" // Necesitarás esta imagen
          link="/quiz/cronotipo-sueno"
        />
        <Card
          title="¿Qué Estilo de Meditación es para Ti?"
          excerpt="No todas las meditaciones son iguales. Encuentra la práctica que mejor se adapta a tu forma de ser."
          imageUrl="/images/quiz-meditacion.jpg" // Necesitarás esta imagen
          link="/quiz/estilo-meditacion"
        />
      </section>
    </MainLayout>
  );
}