// En src/data/activities.ts

export type ActivityType = 'energia' | 'relax' | 'foco';

export interface Activity {
  id: number;
  name: string;
  type: ActivityType;
  duration: 5 | 10 | 15; // Duraciones fijas en minutos
  description: string;
}

export const allActivities: Activity[] = [
  // --- ACTIVIDADES DE 5 MINUTOS ---
  { id: 1, name: "Respiración Energizante", type: 'energia', duration: 5, description: "Realiza 3 series de respiración de fuego (Bhastrika) para oxigenar tu cuerpo y mente." },
  { id: 2, name: "Estiramiento de Gato-Vaca", type: 'relax', duration: 5, description: "Sincroniza tu respiración con el movimiento para liberar la tensión de tu espalda." },
  { id: 3, name: "Técnica Pomodoro", type: 'foco', duration: 5, description: "Prepara tu temporizador. Dedica estos 5 minutos a planificar tu próxima tarea de 25 minutos." },
  { id: 4, name: "Escaneo Corporal", type: 'relax', duration: 5, description: "Cierra los ojos y lleva tu atención a cada parte de tu cuerpo, desde los pies a la cabeza, sin juzgar." },
  { id: 5, name: "Baile Espontáneo", type: 'energia', duration: 5, description: "Pon tu canción favorita y muévete libremente para sacudir el letargo." },
  { id: 6, name: "Mindful Drinking", type: 'foco', duration: 5, description: "Prepara un té o un vaso de agua y bébelo lentamente, prestando atención a la temperatura, sabor y sensación." },

  // --- ACTIVIDADES DE 10 MINUTOS ---
  { id: 7, name: "Meditación Guiada de Gratitud", type: 'relax', duration: 10, description: "Sigue un audio o simplemente piensa en 5 cosas por las que te sientes agradecido hoy." },
  { id: 8, name: "Workout HIIT Rápido", type: 'energia', duration: 10, description: "Realiza 40 segundos de jumping jacks, sentadillas y plancha, con 20 segundos de descanso. Repite 3 veces." },
  { id: 9, name: "Journaling (Escritura Libre)", type: 'foco', duration: 10, description: "Abre un cuaderno y escribe todo lo que te venga a la mente sin filtro. Despeja tu cabeza." },
  { id: 10, name: "Paseo Consciente", type: 'relax', duration: 10, description: "Sal a caminar y enfócate en tus sentidos: qué ves, qué oyes, qué sientes en tu piel." },

  // --- ACTIVIDADES DE 15 MINUTOS ---
  { id: 11, name: "Yoga Suave para Despertar", type: 'energia', duration: 15, description: "Sigue una secuencia de Saludos al Sol para activar todo tu cuerpo de forma gentil." },
  { id: 12, name: "Meditación de Enfoque (Vipassana)", type: 'foco', duration: 15, description: "Siéntate y concéntrate en tu respiración. Cuando tu mente divague, tráela de vuelta amablemente." },
  { id: 13, name: "Baño de Sonido (Sound Bath)", type: 'relax', duration: 15, description: "Busca un 'sound bath' en YouTube o Spotify y déjate llevar por las vibraciones." },
];