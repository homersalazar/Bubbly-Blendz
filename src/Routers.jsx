import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DrinkPage from './Layouts/DrinkPage';
import InfoPage from './Layouts/InfoPage';
import LoadingPage from './Layouts/LoadingPage';

const Router = () => {
  const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  //random cocktail
  const [randomCocktails, setRandomCocktails] = useState([]);
  const [drinks, setDrinks] = useState([]);

  //ingredients cocktail
  const [ingredientsCocktails, setIngredientsCocktails] = useState([]);
  const [ingredientHistory, setIngredientHistory] = useState([]);

  //homepage component
  const fetchDrinksByIngredient = async (ingredient) => {
    try {
      const response = await fetch(baseURL + 'search.php?i=' + ingredient);
      const data = await response.json();
      const ingredientHistory = data.ingredients || [];
      setIngredientHistory(ingredientHistory);
    } catch (error) {
      console.error('Error fetching ingredient:', error);
    }
  };

  const handleIngredients = async (ingredient) => {
    setIngredientsCocktails(ingredient);
    try {
      const response = await fetch(baseURL + 'search.php?s=' + ingredient);
      const data = await response.json();
      const drinks = data.drinks || [];
  
      if (drinks.length === 0) {
        // If there are no drinks found, redirect to the home page
        navigate('/');
      } else {
        setDrinks(drinks);
        fetchDrinksByIngredient(ingredient);
        navigate('/drinks'); // Redirect to the drinks page after successful search
      }
    } catch (error) {
      console.error('Error fetching cocktail:', error);
      // Redirect to the home page if there's an error with the search
      navigate('/');
    }
  };
  

  useEffect(() => {
    const fetchRandomCocktails = async () => {
      try {
        const cocktails = [];
        for (let i = 0; i < 8; i++) {
          const response = await fetch(baseURL + 'random.php');
          const data = await response.json();
          const drinks = data.drinks || [];
          if (drinks.length > 0) {
            cocktails.push(drinks[0]);
          }
        }
        setRandomCocktails(cocktails);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false); 
      }
    };
  
    fetchRandomCocktails();
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route
            path='/'
            element={<HomePage 
              randomCocktails={randomCocktails}
              onIngredientSelect={handleIngredients}
              onSearch={handleIngredients}
            />}
          />
          <Route 
            path='/drinks'
            element={<DrinkPage 
              drinks={drinks}
              ingredientHistory={ingredientHistory}
            />}
          />
          <Route 
            path='/info/:id'
            element={<InfoPage
            />}
          />
        </Routes>
      )}
    </div>
  );
};

export default Router;
