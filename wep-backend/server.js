// Ubicación: wep-backend/server.js

import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Inicialización del cliente de Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// --- ENDPOINT PARA EL GENERADOR DE RUTINAS ---
app.post('/api/generate-routine', async (req, res) => {
  try {
    const { objective, time, energy, location } = req.body;
    if (!objective || !time || !energy || !location) {
      return res.status(400).json({ error: 'Faltan datos para generar la rutina.' });
    }
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const generationConfig = { temperature: 0.9 };
    const prompt = `
      Eres un coach de bienestar experto en crear micro-rutinas hiper-personalizadas.
      Contexto: Objetivo=${objective}, Tiempo=${time} min, Energía=${energy}, Ubicación=${location}.
      Responde SOLAMENTE con un objeto JSON con el formato {"name": "Título Creativo", "description": "Descripción de la actividad."}.
    `;
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });
    const response = await result.response;
    const text = response.text();
    const jsonResponse = JSON.parse(text.replace(/```json|```/g, '').trim());
    res.json(jsonResponse);
  } catch (error) {
    console.error("Error en /api/generate-routine:", error);
    res.status(500).json({ error: 'No se pudo generar la rutina.' });
  }
});

// --- ENDPOINT GENÉRICO PARA CONSEJOS DE QUIZZES ---
app.post('/api/get-generic-tip', async (req, res) => {
  try {
    const { context, result } = req.body;
    if (!context || !result) {
      return res.status(400).json({ error: 'Faltan el contexto y el resultado del quiz.' });
    }
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const generationConfig = { temperature: 0.8 };
    const prompt = `
      Eres un coach de bienestar empático. El resultado principal de un quiz sobre ${context} es: "${result}".
      Basado en esto, genera un consejo corto, accionable y positivo de 2 a 4 frases.
      Responde SOLAMENTE con un objeto JSON con el formato {"tip": "Tu consejo personalizado aquí."}.
    `;
    const request = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });
    const response = await request.response;
    const text = response.text();
    const jsonResponse = JSON.parse(text.replace(/```json|```/g, '').trim());
    res.json(jsonResponse);
  } catch (error) {
    console.error("Error en /api/get-generic-tip:", error);
    res.status(500).json({ error: 'No se pudo generar el consejo.' });
  }
});

// --- ENDPOINT PARA LISTA DE RECETAS ---
app.get('/api/healthy-recipes', async (req, res) => {
  try {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';
    const apiResponse = await fetch(apiUrl);
    if (!apiResponse.ok) throw new Error('No se pudo obtener la respuesta de la API de recetas.');
    const data = await apiResponse.json();
    const formattedRecipes = data.meals.map(meal => ({
      slug: meal.idMeal,
      title: meal.strMeal,
      excerpt: `Una deliciosa y saludable opción vegetariana.`,
      imageUrl: meal.strMealThumb,
    }));
    res.json(formattedRecipes);
  } catch (error) {
    console.error("Error en /api/healthy-recipes:", error);
    res.status(500).json({ error: 'No se pudieron obtener las recetas.' });
  }
});

// --- ENDPOINT CORREGIDO PARA DETALLE DE RECETA ---
app.get('/api/recipes/:id', async (req, res) => { // <-- RUTA CORREGIDA A PLURAL
  try {
    const { id } = req.params;
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const apiResponse = await fetch(apiUrl);
    if (!apiResponse.ok) throw new Error('No se pudo obtener el detalle de la receta.');
    const data = await apiResponse.json();
    const meal = data.meals ? data.meals[0] : null; // Verificación de seguridad
    if (!meal) return res.status(404).json({ error: 'Receta no encontrada.' });

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${measure} ${ingredient}`.trim());
      }
    }

    const formattedRecipe = {
      title: meal.strMeal,
      imageUrl: meal.strMealThumb,
      instructions: meal.strInstructions.split('\r\n').filter(line => line.trim() !== ""),
      tags: meal.strTags ? meal.strTags.split(',') : [],
      youtubeUrl: meal.strYoutube,
      ingredients: ingredients,
    };
    res.json(formattedRecipe);
  } catch (error) {
    console.error("Error en /api/recipes/:id:", error);
    res.status(500).json({ error: 'No se pudo obtener el detalle de la receta.' });
  }
});

// --- INICIAR EL SERVIDOR ---
app.listen(port, () => {
  console.log(`🤖 Servidor de IA y APIs escuchando en http://localhost:${port}`);
});