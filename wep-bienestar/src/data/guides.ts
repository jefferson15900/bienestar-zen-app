// Ubicación: src/data/guides.ts

// Definimos los tipos de bloques de contenido que podemos tener
type ContentBlock = 
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  content: ContentBlock[];
}

export const allGuides: Guide[] = [
  // --- GUÍA 1: MEDITACIÓN ---
  {
    slug: 'como-empezar-a-meditar',
    title: 'La Guía para Empezar a Meditar',
    excerpt: 'Aprende a calmar tu mente con técnicas sencillas que puedes practicar en solo 10 minutos al día.',
    imageUrl: '/images/meditacion.jpg',
    content: [
      { type: 'paragraph', text: 'La meditación es una práctica milenaria que, lejos de ser un concepto místico reservado para monjes, es una herramienta increíblemente poderosa y accesible para cualquiera que busque reducir el estrés, mejorar la concentración y conectar consigo mismo.' },
      { type: 'paragraph', text: 'Si alguna vez has pensado "mi mente no se calla, no puedo meditar", esta guía es para ti. Desmontaremos los mitos y te daremos pasos prácticos y sencillos para comenzar.' },
      { type: 'heading', text: '¿Qué es realmente la meditación?' },
      { type: 'paragraph', text: 'En su esencia, meditar no es "dejar la mente en blanco". Es el acto de entrenar la atención y la conciencia para lograr un estado de calma y claridad mental. Se trata de observar tus pensamientos sin juzgarlos, como si fueran nubes pasando en el cielo.' },
      { type: 'heading', text: 'Tu Primera Práctica: 5 Minutos' },
      { type: 'list', items: [
          'Encuentra un lugar tranquilo: No necesitas un cojín especial. Una silla cómoda es perfecta.',
          'Adopta una postura cómoda: Espalda recta pero no tensa, manos sobre las rodillas.',
          'Cierra los ojos suavemente y toma tres respiraciones profundas.',
          'Enfócate en tu respiración: Siente cómo tu pecho o abdomen se expanden y contraen.',
          'Tu mente se distraerá. ¡Es normal! Cuando te des cuenta, amablemente, vuelve a llevar tu atención a la respiración. Cada vez que haces esto, fortaleces tu "músculo" de la atención.'
      ]},
    ],
  },
  // --- GUÍA 2: NUTRICIÓN ---
  {
    slug: 'nutricion-consciente',
    title: 'Nutrición Consciente para Principiantes',
    excerpt: 'Construye un plato saludable y delicioso sin necesidad de contar cada caloría. Conéctate con tu comida.',
    imageUrl: '/images/nutricion.jpg',
    content: [
      { type: 'paragraph', text: 'La nutrición consciente o "mindful eating" es el arte de prestar atención plena a la experiencia de comer. No se trata de dietas restrictivas, sino de reconectar con las señales de hambre y saciedad de tu cuerpo, disfrutar más de la comida y mejorar tu digestión.' },
      { type: 'heading', text: 'Claves para una Alimentación Consciente' },
      { type: 'list', items: [
          'Come sin distracciones: Apaga la televisión, deja el teléfono a un lado. Dedica el tiempo de la comida solo a comer.',
          'Usa tus sentidos: Antes de dar el primer bocado, observa los colores, huele los aromas, siente las texturas.',
          'Mastica lentamente: Saborea cada bocado. Intenta masticar entre 20 y 30 veces antes de tragar. Notarás sabores que antes pasabas por alto.',
          'Escucha a tu cuerpo: Come cuando tengas hambre y detente cuando estés satisfecho, no lleno. Aprender a diferenciar el hambre física del hambre emocional es clave.'
      ]},
      { type: 'paragraph', text: 'No hay alimentos "buenos" o "malos", solo hay alimentos. Al comer conscientemente, te das permiso para disfrutar de todo con moderación, eliminando la culpa.'},
    ],
  },
  // --- GUÍA 3: EJERCICIO ---
  {
    slug: 'rutinas-en-casa',
    title: 'Rutinas de 15 Minutos para Gente Ocupada',
    excerpt: 'Mantente activo y con energía incluso en los días más ajetreados con estas rutinas efectivas.',
    imageUrl: '/images/ejercicio.jpg',
    content: [
      { type: 'paragraph', text: 'La excusa "no tengo tiempo" es la más común para no hacer ejercicio. Sin embargo, 15 minutos de movimiento enfocado pueden ser increíblemente efectivos para mejorar tu salud, tu energía y tu estado de ánimo.' },
      { type: 'heading', text: 'Ejemplo de Rutina "Full Body" de 15 Minutos' },
      { type: 'paragraph', text: 'Realiza cada ejercicio durante 45 segundos, seguido de 15 segundos de descanso. Completa el circuito 3 veces.' },
      { type: 'list', items: [
          'Sentadillas (Squats): Mantén la espalda recta y baja como si fueras a sentarte en una silla.',
          'Flexiones (Push-ups): Puedes hacerlas sobre las rodillas si eres principiante.',
          'Plancha (Plank): Mantén tu cuerpo en una línea recta desde la cabeza hasta los talones.',
          'Zancadas (Lunges): Alterna las piernas en cada repetición.',
          'Saltos de Tijera (Jumping Jacks): Un clásico para elevar el ritmo cardíaco.'
      ]},
    ],
  },
  // --- GUÍA 4: SUEÑO ---
  {
    slug: 'mejorar-calidad-sueno',
    title: '7 Hábitos para Mejorar la Calidad de tu Sueño',
    excerpt: 'Descubre pequeños cambios en tu rutina diaria que pueden transformar tus noches y llenarte de energía.',
    imageUrl: '/images/sueno.jpg',
    content: [
      { type: 'paragraph', text: 'Dormir bien es tan importante como comer o respirar. Un buen descanso repara tu cuerpo, consolida la memoria y regula tus emociones. Aquí tienes 7 hábitos para transformar tus noches.' },
      { type: 'heading', text: 'Rituales para un Descanso Reparador' },
      { type: 'list', items: [
        'Establece un horario regular: Acuéstate y levántate a la misma hora todos los días, incluso los fines de semana.',
        'Crea un santuario del sueño: Tu habitación debe ser oscura, silenciosa y fresca.',
        'Evita las pantallas una hora antes de dormir: La luz azul de teléfonos y televisores interfiere con la producción de melatonina, la hormona del sueño.',
        'Limita la cafeína y el alcohol: Evita la cafeína después del mediodía y el alcohol por la noche, ya que fragmenta el sueño.',
        'Haz ejercicio regularmente, pero no justo antes de acostarte.',
        'Establece una rutina relajante: Lee un libro, toma un baño caliente o escucha música suave.',
        'No te quedes en la cama si no puedes dormir: Si llevas más de 20 minutos despierto, levántate y haz algo relajante hasta que te sientas somnoliento.',
      ]}
    ],
  },
  // --- GUÍA 5: RESPIRACIÓN ---
  {
    slug: 'gestion-estres',
    title: 'Técnicas de Respiración para Gestionar el Estrés',
    excerpt: 'El poder de calmar tu sistema nervioso está en tus pulmones. Aprende 3 técnicas infalibles.',
    imageUrl: '/images/respiracion.jpg',
    content: [
      { type: 'paragraph', text: 'Tu respiración es el ancla al momento presente y una de las herramientas más rápidas para cambiar tu estado de ánimo. Cuando te sientes estresado, tu respiración se vuelve rápida y superficial. Al controlarla, le envías una señal a tu cerebro de que todo está bien.'},
      { type: 'heading', text: 'Tres Técnicas para Probar Ahora Mismo' },
      { type: 'list', items: [
          'Respiración Cuadrada (Box Breathing): Inhala durante 4 segundos, sostén el aire durante 4 segundos, exhala durante 4 segundos y mantén los pulmones vacíos durante 4 segundos. Repite.',
          'Respiración Diafragmática (Abdominal): Coloca una mano en tu pecho y otra en tu abdomen. Inhala profundamente por la nariz, sintiendo cómo solo tu abdomen se expande. Exhala lentamente por la boca.',
          'Respiración 4-7-8: Inhala por la nariz durante 4 segundos, sostén la respiración durante 7 segundos y exhala ruidosamente por la boca durante 8 segundos. Es un potente tranquilizante natural.'
      ]}
    ],
  },
  // --- GUÍA 6: DESAYUNOS ---
  {
    slug: 'desayunos-energeticos',
    title: '5 Ideas de Desayunos Energéticos en 5 Minutos',
    excerpt: 'Empieza tu día con el pie derecho con estas recetas rápidas, deliciosas y llenas de nutrientes.',
    imageUrl: '/images/desayuno.jpg',
    content: [
        { type: 'paragraph', text: 'Un buen desayuno puede marcar la diferencia en tus niveles de energía y concentración para el resto del día. Pero "saludable" no tiene por qué significar "complicado". Aquí tienes 5 ideas para empezar el día con fuerza.'},
        { type: 'heading', text: 'Recetas Express' },
        { type: 'list', items: [
          'Avena Nocturna (Overnight Oats): La noche anterior, mezcla 1/2 taza de avena, 1/2 taza de leche y 1 cda de chía en un frasco. Por la mañana, solo añade fruta fresca y frutos secos.',
          'Tostada de Aguacate y Huevo: Tuesta una rebanada de pan integral, úntala con 1/4 de aguacate machacado y coloca un huevo cocido o a la plancha encima.',
          'Yogur Griego con Frutos Rojos: Un bol de yogur griego natural, un puñado de frutos rojos congelados y unas pocas nueces. Proteína, antioxidantes y grasas saludables.',
          'Batido de Proteínas Rápido: Mezcla en la licuadora 1 scoop de proteína en polvo (del sabor que prefieras), 1/2 plátano y 1 taza de leche o agua. ¡Listo!',
          'Manzana con Mantequilla de Almendras: Simplemente corta una manzana en gajos y úntalos con mantequilla de almendras natural. Crujiente, dulce y saciante.'
        ]}
    ],
  },
];