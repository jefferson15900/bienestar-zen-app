// Ubicación: src/pages/GenericQuizPage.tsx

import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { useWellnessJournal } from '../hooks/useWellnessJournal';
import { chronotypeQuiz, type Chronotype } from '../data/chronotypeQuiz';
import { meditationQuiz, type MeditationStyle } from '../data/meditationQuiz';

// --- Importamos los datos y tipos de TODOS los quizzes ---
import { energyQuiz, type EnergyThief } from '../data/quiz';
import { personalityQuiz, type ExercisePersonality } from '../data/personalityQuiz';


// --- Definiciones de los Quizzes ---
// Un objeto que centraliza la información de cada quiz
const quizRegistry = {
  'ladron-de-energia': {
    title: 'Descubre tu Ladrón de Energía',
    data: energyQuiz,
    resultDescriptions: {
      mente: "Tu energía se ve afectada por un exceso de pensamientos y estrés mental.",
      cuerpo: "Tu bienestar físico es la clave. El sueño, la nutrición y el movimiento son tu enfoque.",
      entorno: "Tu espacio físico influye directamente en tu estado de ánimo.",
      proposito: "Necesitas conectar con tus pasiones y sentir que lo que haces tiene significado.",
      relaciones: "Tus interacciones sociales son una fuente vital de energía.",
    },
    aiPromptContext: "su principal ladrón de energía"
  },
  'personalidad-ejercicio': {
    title: '¿Qué Ejercicio va contigo?',
    data: personalityQuiz,
    resultDescriptions: {
      competitivo: "Te motivan los desafíos y medir tu progreso. Los deportes y las metas claras son para ti.",
      social: "Disfrutas la energía del grupo. Las clases colectivas y los deportes de equipo te mantendrán enganchado.",
      rutinario: "Prefieres la estructura y la predictibilidad. Una rutina fija en el gimnasio o en casa te dará seguridad.",
      explorador: "Amas la variedad y la aventura. El senderismo, la escalada o probar nuevas disciplinas te mantendrán interesado.",
    },
    aiPromptContext: "su personalidad de ejercicio"
  },
    'cronotipo-sueno': {
    title: '¿Cuál es tu Cronotipo?',
    data: chronotypeQuiz,
    resultDescriptions: {
      leon: "Eres una persona madrugadora. Tu pico de energía es por la mañana y necesitas descansar temprano.",
      lobo: "Eres un ser nocturno. Tu creatividad y energía fluyen mejor por la tarde y la noche.",
      oso: "Tu ritmo sigue al sol. Tienes energía constante durante el día y necesitas 8 horas de sueño sólido.",
      delfin: "Tienes un sueño ligero y eres sensible a las interrupciones. Tu energía viene en oleadas."
    },
    aiPromptContext: "su cronotipo de sueño"
  },
  'estilo-meditacion': {
    title: '¿Qué Estilo de Meditación es para Ti?',
    data: meditationQuiz,
    resultDescriptions: {
      mindfulness: "Prefieres la observación y la conciencia del presente. Las prácticas de atención plena son ideales para ti.",
      movimiento: "Encuentras la calma a través del cuerpo. El yoga, el tai chi o caminar conscientemente te centrarán.",
      visualizacion: "Tienes una mente imaginativa. Las meditaciones guiadas que crean imágenes mentales te resultarán fáciles y potentes.",
      compasion: "Te conectas a través del corazón. Las prácticas como el 'loving-kindness' (Metta) resonarán contigo."
    },
    aiPromptContext: "su estilo de meditación ideal"
  }
};

type QuizId = keyof typeof quizRegistry;
type ResultValue = EnergyThief | ExercisePersonality | Chronotype | MeditationStyle;

export function GenericQuizPage() {
  const { quizId } = useParams<{ quizId: string }>();
  
  // --- LÓGICA DE CARGA DEL QUIZ ---
  const currentQuiz = useMemo(() => {
    return quizRegistry[quizId as QuizId] || null;
  }, [quizId]);

  // --- ESTADOS ---
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ResultValue[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<ResultValue | null>(null);
  const [generatedTip, setGeneratedTip] = useState<string | null>(null);
  const [isLoadingTip, setIsLoadingTip] = useState(false);
  const { addEntry } = useWellnessJournal();

  useEffect(() => {
    if (result && currentQuiz) {
      getAITip(result, currentQuiz.aiPromptContext);
    }
  }, [result, currentQuiz]);

  const handleAnswerClick = (value: ResultValue) => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    setAnswers(prev => [...prev, value]);

    if (nextQuestionIndex < (currentQuiz?.data.length || 0)) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      calculateResults([...answers, value]);
      setShowResults(true);
    }
  };

  const calculateResults = (finalAnswers: ResultValue[]) => {
    const counts: { [key: string]: number } = {};
    for (const answer of finalAnswers) {
      counts[answer] = (counts[answer] || 0) + 1;
    }
    const primaryResult = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    setResult(primaryResult as ResultValue);
  };
  
  const getAITip = async (quizResult: ResultValue, context: string) => {
    setIsLoadingTip(true);
    setGeneratedTip(null);
    try {
      // Usamos un endpoint genérico. Lo crearemos en el backend.
      const response = await fetch('https://bienestar-zen-api.onrender.com/api/get-generic-tip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context, result: quizResult }),
      });
      if (!response.ok) throw new Error("Error del servidor");
      const data = await response.json();
      setGeneratedTip(data.tip);
      addEntry({
        type: 'quiz',
        title: `Resultado del Quiz: ${quizResult}`,
        description: data.tip,
      });
    } catch (error) {
      setGeneratedTip("No pudimos generar un consejo. Un buen primer paso es tomar una respiración profunda.");
    } finally {
      setIsLoadingTip(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setResult(null);
    setGeneratedTip(null);
  };

  // --- VISTA DE ERROR SI EL QUIZ ID NO ES VÁLIDO ---
  if (!currentQuiz) {
    return (
      <MainLayout>
        <div className="text-center">
          <h1 className="font-sans font-bold text-4xl">Quiz no encontrado</h1>
          <Link to="/quizzes" className="mt-4 inline-block text-[var(--color-primary)]">Volver al centro de quizzes</Link>
        </div>
      </MainLayout>
    );
  }

  // --- RENDERIZADO PRINCIPAL ---
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto text-center">
        {!showResults ? (
          <div>
            <div className="mb-8">
              <h1 className="font-sans font-bold text-3xl md:text-4xl mb-2">{currentQuiz.title}</h1>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-12">
              <div 
                className="bg-[var(--color-primary)] h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${((currentQuestionIndex + 1) / currentQuiz.data.length) * 100}%` }}
              ></div>
            </div>
            <h2 className="font-sans font-semibold text-2xl mb-8 text-left">
              {currentQuiz.data[currentQuestionIndex].questionText}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuiz.data[currentQuestionIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answer.value as ResultValue)}
                  className="w-full text-left p-6 rounded-xl font-serif text-lg bg-[var(--color-surface)] shadow-soft hover:shadow-lg hover:-translate-y-1 border-2 border-transparent hover:border-[var(--color-primary)] transition-all duration-300 focus:outline-none"
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <h1 className="font-sans font-bold text-3xl mb-4">Tu Resultado</h1>
            <div className="bg-[var(--color-surface)] p-8 rounded-xl shadow-soft mb-8">
              <h2 className="font-sans text-xl mb-2 text-[var(--color-text-muted)]">
                {result && (currentQuiz.resultDescriptions as any)[result]}
              </h2>
              <p className="font-bold text-5xl capitalize text-[var(--color-accent)] mb-6">
                {result}
              </p>
              <div className="border-t border-gray-200 pt-6 min-h-[100px] flex items-center justify-center">
                {isLoadingTip && <p className="font-serif animate-pulse">Tu coach IA está preparando un consejo...</p>}
                {generatedTip && <p className="font-serif text-xl leading-relaxed font-semibold">"{generatedTip}"</p>}
              </div>
            </div>
            <button onClick={restartQuiz} className="font-sans font-semibold text-[var(--color-primary)] hover:underline">
              Hacer otro quiz
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}