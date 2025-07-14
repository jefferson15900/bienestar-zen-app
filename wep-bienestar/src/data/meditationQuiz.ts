// Ubicación: src/data/meditationQuiz.ts

export type MeditationStyle = 'mindfulness' | 'movimiento' | 'visualizacion' | 'compasion';

interface AnswerOption { text: string; value: MeditationStyle; }
export interface QuizQuestion { questionText: string; answers: AnswerOption[]; }

export const meditationQuiz: QuizQuestion[] = [
  {
    questionText: 'Cuando te enfrentas a un problema, ¿cuál es tu enfoque?',
    answers: [
      { text: 'Observo la situación desde fuera para entenderla mejor.', value: 'mindfulness' },
      { text: 'Necesito moverme, caminar o hacer algo físico para pensar.', value: 'movimiento' },
      { text: 'Imagino diferentes soluciones y escenarios en mi mente.', value: 'visualizacion' },
      { text: 'Pienso en cómo afecta a los demás y busco una solución amable.', value: 'compasion' },
    ],
  },
  {
    questionText: '¿Qué te ayuda más a relajarte después de un día estresante?',
    answers: [
      { text: 'Concentrarme en una sola cosa, como la música o mi respiración.', value: 'mindfulness' },
      { text: 'Salir a correr, practicar yoga o simplemente bailar.', value: 'movimiento' },
      { text: 'Soñar despierto o planificar unas vacaciones ideales.', value: 'visualizacion' },
      { text: 'Hablar con un ser querido o acariciar a mi mascota.', value: 'compasion' },
    ],
  },
  {
    questionText: '¿Qué tipo de arte disfrutas más?',
    answers: [
      { text: 'La fotografía o el arte minimalista que me hace reflexionar.', value: 'mindfulness' },
      { text: 'La danza o la escultura, que expresan con el cuerpo.', value: 'movimiento' },
      { text: 'El cine o la pintura surrealista, que crean mundos nuevos.', value: 'visualizacion' },
      { text: 'La poesía o las historias que me conectan con las emociones humanas.', value: 'compasion' },
    ],
  },
];