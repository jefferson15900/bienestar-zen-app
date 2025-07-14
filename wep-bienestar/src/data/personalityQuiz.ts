// Ubicación: src/data/personalityQuiz.ts

export type ExercisePersonality = 'competitivo' | 'social' | 'rutinario' | 'explorador';

interface AnswerOption {
  text: string;
  value: ExercisePersonality;
}

export interface QuizQuestion {
  questionText: string;
  answers: AnswerOption[];
}

export const personalityQuiz: QuizQuestion[] = [
  {
    questionText: '¿Cómo prefieres pasar un sábado por la tarde?',
    answers: [
      { text: 'Compitiendo en un juego de mesa o deporte.', value: 'competitivo' },
      { text: 'Con un grupo grande de amigos, haciendo algo divertido.', value: 'social' },
      { text: 'Siguiendo mi rutina de limpieza y organización.', value: 'rutinario' },
      { text: 'Explorando un nuevo barrio o yendo de excursión.', value: 'explorador' },
    ],
  },
  {
    questionText: 'Cuando aprendes algo nuevo, ¿cómo lo haces mejor?',
    answers: [
      { text: 'Intentando superar mis propias marcas o a otros.', value: 'competitivo' },
      { text: 'En un taller o clase con más gente.', value: 'social' },
      { text: 'Siguiendo un manual paso a paso, de forma metódica.', value: 'rutinario' },
      { text: 'Experimentando y probando cosas por mi cuenta.', value: 'explorador' },
    ],
  },
  {
    questionText: '¿Qué tipo de vacaciones te recargan más?',
    answers: [
      { text: 'Un retiro deportivo o un campamento con desafíos.', value: 'competitivo' },
      { text: 'Un festival de música o un viaje en grupo.', value: 'social' },
      { text: 'Un resort con todo incluido donde no tenga que pensar en nada.', value: 'rutinario' },
      { text: 'Un viaje de mochila por un país desconocido.', value: 'explorador' },
    ],
  },
];