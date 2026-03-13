"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch meal ideas");
    }

    const data = await response.json();

    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    throw error;
  }
}

async function fetchMealDetails(mealId) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch meal details");
    }

    const data = await response.json();

    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadMealIdeas = async () => {
    try {
      setLoading(true);
      setError("");

      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
      setSelectedMeal(null);
    } catch (error) {
      setError("Failed to load meal ideas.");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!ingredient) return;
    loadMealIdeas();
  }, [ingredient]);

  const loadMealDetails = async (mealId) => {
    const mealDetails = await fetchMealDetails(mealId);
    setSelectedMeal(mealDetails);
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
  };
  let ingredients = [];

  if (selectedMeal) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = selectedMeal["strIngredient" + i];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(ingredient);
      }
    }
  }
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      {loading ? (
        <p>Loading meal ideas...</p>
      ) : error ? (
        <p>{error}</p>
      ) : meals.length === 0 ? (
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">No meal ideas found.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="bg-pink-50 dark:bg-slate-900 border-2 border-pink-200 dark:border-teal-500 rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer overflow-hidden"
              onClick={() => loadMealDetails(meal.idMeal)}
            >
              <p className="w-full p-2 mb-4 overflow-hidden rounded-xl border border-pink-200 dark:border-slate-700 bg-white dark:bg-slate-800">{meal.strMeal}</p>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full rounded-xl h-44 sm:h-48 object-cover transition duration-300 hover:scale-105"
              />

              <div className="mt-4">
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-words line-clamp-2">
                  {meal.strMeal}
                </p>

                <p className="mt-2 text-xs sm:text-sm font-medium text-teal-600 dark:text-teal-300">
                  Tap to view ingredients
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedMeal && (
        <div className="mt-8 bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-500 rounded-2xl p-5 sm:p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 dark:text-white break-words">
            Ingredients for {selectedMeal.strMeal}
          </h3>

          {ingredients.length === 0 ? (
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              No ingredients found.
            </p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="bg-pink-50 dark:bg-slate-800 border border-pink-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm sm:text-base font-medium text-slate-800 dark:text-slate-100 shadow-sm hover:shadow-md transition duration-200 break-words">
                  {ingredient}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}