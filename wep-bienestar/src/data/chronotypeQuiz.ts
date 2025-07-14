// Ubicación: src/data/chronotypeQuiz.ts

export type Chronotype = 'leon' | 'lobo' | 'oso' | 'delfin';

interface AnswerOption { text: string; value: Chronotype; }
export interface QuizQuestion { questionText: string; answers: AnswerOption[]; }

export const chronotypeQuiz: QuizQuestion[] = [
  {
    questionText: 'Si pudieras elegir tu horario ideal, ¿cuándo te despertarías?',
    answers: [
      { text: 'Muy temprano (5-6 AM), para aprovechar la mañana.', value: 'leon' },
      { text: 'Con el sol (7-8 AM), siguiendo un ritmo natural.', value: 'oso' },
      { text: 'Más tarde (9-10 AM), soy más productivo por la noche.', value: 'lobo' },
      { text: 'Mi sueño es ligero, me despierto varias veces de todos modos.', value: 'delfin' },
    ],
  },
  {
    questionText: '¿En qué momento del día sientes tu pico de máxima productividad?',
    answers: [
      { text: 'Justo por la mañana, después de despertarme.', value: 'leon' },
      { text: 'A media mañana, después de un café.', value: 'oso' },
      { text: 'Por la tarde-noche, cuando todo está en calma.', value: 'lobo' },
      { text: 'En ráfagas cortas e impredecibles a lo largo del día.', value: 'delfin' },
    ],
  },
  {
    questionText: '¿Cómo te sientes socialmente por la noche?',
    answers: [
      { text: 'Cansado, prefiero relajarme y acostarme temprano.', value: 'leon' },
      { text: 'Disfruto de una cena tranquila, pero no hasta muy tarde.', value: 'oso' },
      { text: '¡Es cuando mi energía social se activa!', value: 'lobo' },
      { text: 'Depende, a veces social, a veces necesito estar solo.', value: 'delfin' },
    ],
  },
];