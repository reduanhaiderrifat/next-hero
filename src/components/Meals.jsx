"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState(""); // Initialize search as an empty string
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null); // State to track errors

  const loadedData = useCallback(async () => {
    if (search) {
      try {
        const firstLetter = search[0]; // Get the first letter of the search string
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch meals"); // Throw an error if response is not ok
        }
        const data = await res.json();

        // Filter meals based on if the title contains the search string (case-insensitive)
        const filteredMeals = data.meals?.filter((meal) =>
          meal.strMeal.toLowerCase().includes(search.toLowerCase())
        ) || [];

        setMeals(filteredMeals); // Set filtered meals
        setError(null); // Clear any previous errors if the fetch is successful
      } catch (err) {
        setMeals([]); // Clear meals if there's an error
        setError("Could not load meals. Please try again later."); // Set error message
      }
    }
  }, [search]);

  const handle = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadedData();
  }, [search, loadedData]);

  return (
    <div className="container mx-auto mt-12 px-4">
      <div className="flex justify-center mb-6">
        <input
          onChange={handle}
          value={search}
          className="p-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Search meals"
        />
        <button className="ml-4 p-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
          Search
        </button>
      </div>

      <div className="mt-8">
        {error ? ( // If there's an error, display the error message
          <p className="text-red-500">{error}</p>
        ) : meals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meals.map((meal, idx) => (
              <div key={idx} className="border border-gray-300 p-6 rounded-lg shadow-md">
                <Image
                  src={meal.strMealThumb}
                  alt={meal?.strMeal}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <div className="mt-4">
                  <h2 className="text-xl font-semibold mb-2">{meal.strMeal}</h2>
                  <p className="text-gray-700 text-sm">{meal.strInstructions}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No meals found</p> // Display when no meals are found
        )}
      </div>
    </div>
  );
};

export default Meals;
