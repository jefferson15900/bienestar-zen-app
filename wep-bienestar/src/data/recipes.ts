// Ubicación: src/data/recipes.ts

export interface Recipe {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  prepTime: number; // en minutos
  dietaryTags: ('Vegano' | 'Sin Gluten' | 'Alto en Proteína')[];
  ingredients: string[];
  instructions: string[];
}

export const allRecipes: Recipe[] = [
  {
    slug: 'ensalada-quinoa-energetica',
    title: 'Ensalada de Quinoa Energética',
    excerpt: 'Una explosión de sabor y nutrientes para recargar tu tarde. Ligera, saciante y muy fácil de preparar.',
    imageUrl: 'https://www.frutamare.com/wp-content/uploads/Ensalada-de-Quinoa.webp', // Necesitarás añadir esta imagen
    prepTime: 15,
    dietaryTags: ['Vegano', 'Sin Gluten'],
    ingredients: [
      '1 taza de quinoa cocida',
      '1 pepino, en cubos',
      '1 pimiento rojo, en cubos',
      '1/2 taza de garbanzos cocidos',
      '1/4 taza de perejil fresco, picado',
      'Jugo de 1 limón',
      '2 cdas de aceite de oliva',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'En un bol grande, combina la quinoa cocida, el pepino, el pimiento rojo y los garbanzos.',
      'Añade el perejil fresco picado.',
      'En un pequeño recipiente, mezcla el jugo de limón, el aceite de oliva, la sal y la pimienta para hacer el aderezo.',
      'Vierte el aderezo sobre la ensalada y mezcla todo suavemente.',
      'Sirve inmediatamente o refrigera para más tarde. ¡Está aún más rica fría!',
    ],
  },
  {
    slug: 'batido-verde-detox',
    title: 'Batido Verde Detox',
    excerpt: 'Un vaso lleno de vitalidad para empezar el día. Ideal para limpiar tu cuerpo y darle un impulso a tu sistema inmune.',
    imageUrl: 'https://www.iberochef.com/blog/wp-content/uploads/2019/05/zumo-manzana-espinaca.jpg', // Necesitarás añadir esta imagen
    prepTime: 5,
    dietaryTags: ['Vegano', 'Sin Gluten'],
    ingredients: [
      '1 taza de espinacas frescas',
      '1/2 plátano congelado',
      '1/2 manzana verde',
      '1 cda de semillas de chía',
      '1 taza de agua o leche de almendras',
      'Un chorrito de jugo de limón',
    ],
    instructions: [
      'Añade todos los ingredientes a una licuadora de alta velocidad.',
      'Licúa hasta obtener una consistencia suave y cremosa.',
      'Si está muy espeso, añade un poco más de agua.',
      'Sirve inmediatamente y disfruta de tu dosis de energía verde.',
    ],
  },
  {
    slug: 'tacos-lentejas-proteina',
    title: 'Tacos de Lentejas y Aguacate',
    excerpt: 'Una versión saludable y llena de proteína del clásico mexicano. Perfectos para una cena rápida y deliciosa.',
    imageUrl: 'https://s3.abcstatics.com/abc/www/multimedia/gurme/2025/05/09/4-RYm9sQcnPcr4nET5fWqFQuM-1200x840@diario_abc.png', // Necesitarás añadir esta imagen
    prepTime: 20,
    dietaryTags: ['Vegano', 'Alto en Proteína'],
    ingredients: [
      '1 taza de lentejas cocidas',
      '1/2 cebolla roja, picada',
      '1 cdta de comino en polvo',
      '1/2 cdta de chile en polvo',
      '4 tortillas de maíz',
      '1 aguacate, en rodajas',
      'Cilantro fresco para decorar',
      'Limón para servir',
    ],
    instructions: [
      'En una sartén, saltea la cebolla roja hasta que esté transparente.',
      'Añade las lentejas cocidas, el comino y el chile en polvo. Cocina por 5 minutos, aplastando algunas lentejas con una cuchara para crear una textura más compacta.',
      'Calienta las tortillas de maíz en una sartén seca o en el microondas.',
      'Rellena cada tortilla con la mezcla de lentejas.',
      'Decora con rodajas de aguacate, cilantro fresco y un chorrito de jugo de limón.',
    ],
  },
];