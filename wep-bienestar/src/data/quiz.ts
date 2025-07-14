// Ubicación: src/data/quiz.ts

// 1. AÑADIMOS LA NUEVA CATEGORÍA 'relaciones'
export type EnergyThief = 'mente' | 'cuerpo' | 'entorno' | 'proposito' | 'relaciones';

interface AnswerOption {
  text: string;
  value: EnergyThief;
}

export interface QuizQuestion {
  questionText: string;
  answers: AnswerOption[];
}

// 2. AMPLIAMOS EL QUIZ CON MÁS PREGUNTAS
export const energyQuiz: QuizQuestion[] = [
  {
    questionText: 'Imagina que tienes una hora libre inesperada. ¿Qué te apetece más hacer?',
    answers: [
      { text: 'Finalmente sentarme en silencio y ordenar mis pensamientos.', value: 'mente' },
      { text: 'Echar una siesta o hacer unos estiramientos suaves.', value: 'cuerpo' },
      { text: 'Organizar ese cajón desordenado que me molesta.', value: 'entorno' },
      { text: 'Llamar a un amigo o familiar con quien hace tiempo que no hablo.', value: 'relaciones' },
    ],
  },
  {
    questionText: 'Cuando te sientes abrumado, ¿cuál es tu reacción más común?',
    answers: [
      { text: 'Me pierdo en listas de tareas y me preocupo por el futuro.', value: 'mente' },
      { text: 'Como algo poco saludable o me olvido de beber agua.', value: 'cuerpo' },
      { text: 'Siento que el caos a mi alrededor me sofoca aún más.', value: 'entorno' },
      { text: 'Me aíslo, evitando el contacto con los demás.', value: 'relaciones' },
    ],
  },
  {
    questionText: '¿Qué frase resuena más contigo ahora mismo?',
    answers: [
      { text: '"No estoy haciendo lo suficiente" o "Debería estar más avanzado".', value: 'proposito' },
      { text: '"Estoy agotado físicamente".', value: 'cuerpo' },
      { text: '"No me siento conectado con la gente que me rodea".', value: 'relaciones' },
      { text: '"Mi mente no para, está constantemente acelerada".', value: 'mente' },
    ],
  },
  {
    questionText: 'Piensa en tu última semana. ¿Qué te ha robado más energía?',
    answers: [
      { text: 'La presión por cumplir expectativas o la falta de dirección.', value: 'proposito' },
      { text: 'La falta de sueño o una mala alimentación.', value: 'cuerpo' },
      { text: 'Un conflicto o una conversación difícil con alguien.', value: 'relaciones' },
      { text: 'El desorden de mi casa o el ruido constante de la ciudad.', value: 'entorno' },
    ],
  },
  {
    questionText: 'Si pudieras cambiar una sola cosa de tu día de mañana, ¿cuál sería?',
    answers: [
      { text: 'Tener una meta clara y emocionante que me motive a levantarme.', value: 'proposito' },
      { text: 'Despertarme sintiéndome descansado y con vitalidad.', value: 'cuerpo' },
      { text: 'Pasar tiempo de calidad con alguien que aprecio.', value: 'relaciones' },
      { text: 'Empezar el día en un espacio limpio, ordenado y tranquilo.', value: 'entorno' },
    ],
  },
];