//homepage 
import React from 'react'
import NavbarPage from '../Layouts/NavbarPage'
import Search from '../components/Home/Search'
import Popular from '../components/Home/Popular'
import Ingredients from '../components/Home/Ingredients'

function HomePage({randomCocktails , onIngredientSelect , onCocktailIdSelect }) {
  const handleIngredientSelection = (ingredient) => {
    if (onIngredientSelect) {
      onIngredientSelect(ingredient);
    }
  };

  const handleCocktailIdClick = (idDrink) => {
    if (onCocktailIdSelect) {
      onCocktailIdSelect(idDrink);
    }
  };
  return (
    <div>
      <div className="grid justify-items-center">
        <h1 className='pt-14 text-4xl'>Bubbly Blendz</h1>
        <Search/>
        <Popular randomCocktails={randomCocktails} onCocktailClick={handleCocktailIdClick} />
        <Ingredients onIngredientClick={handleIngredientSelection} />
      </div>      
      <NavbarPage />
    </div>
  )
}

export default HomePage

//drink page 
import React from 'react';

const DrinkPage = ({ drinks, ingredientHistory }) => {
 
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center pt-14 px-10 py-5">
        {ingredientHistory.map((ingredient, index) => (
          <div key={index}>
            <h1 className="text-center text-5xl mb-3 border-b-4 pb-2">{ingredient.strIngredient}</h1>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 px-5">
        {drinks.map((drink, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='p-3 cursor-pointer'>
              <img className="rounded-t-lg" src={drink.strDrinkThumb} alt={drink.strDrinkThumb} />
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {drink.strDrink}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkPage;

// info page 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

const InfoPage = ({ drinkId }) => {
  return (
    <div className='overflow-x-hidden'>
      {drinkId.map((drink, index) => (
        <div key={index} className="grid grid-cols-1 gap-5 px-5 py-5">
          <div className="flex flex-col items-center">
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}  
              className="h-64 rounded-xl"
            />
          </div>
          <h1 className="text-3xl">{drink.strDrink}</h1>
          <p>{drink.strInstructions}</p>
          <h2>
            <em>Ingredients</em>
          </h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper grid grid-cols-4 justify-items-center sm:grid-cols-2 lg:grid-cols-4"
          >
            {(() => {
              const ingredientItems = [];
              for (let i = 0; i < 15; i++) {
                const ingredientKey = `strIngredient${i + 1}`;
                const measurementKey = `strMeasure${i + 1}`;
                const ingredient = drink[ingredientKey];
                const measurement = drink[measurementKey];

                if (ingredient && measurement) {
                  ingredientItems.push(
                    <SwiperSlide key={i}>
                      <div className="bg-white border max-sm:h-40 max-sm:w-18 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center"> {/* Added 'flex' and 'items-center' */}
                        <img
                          className="rounded-t-lg pt-2 "
                          src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}
                          alt={drink.strDrink}
                        />
                        <h5 className="mb-2 font-bold tracking-tight text-center text-white "> {/* Added 'text-center' */}
                          {ingredient}
                        </h5>
                      </div>
                    </SwiperSlide>
                  );
                }
              }
              return ingredientItems;
            })()}
          </Swiper>
          {(() => {
              const ingredientItems = [];
              for (let i = 0; i < 15; i++) {
                const ingredientKey = `strIngredient${i + 1}`;
                const measurementKey = `strMeasure${i + 1}`;
                const ingredient = drink[ingredientKey];
                const measurement = drink[measurementKey];

                if (ingredient && measurement) {
                  ingredientItems.push(
                    <div className="flex justify-between px-5" key={i}>
                      <div>{ingredient}</div>
                      <div>{measurement}</div>
                    </div>

                  );
                }
              }
              return ingredientItems;
            })()}
        </div>
      ))}
    </div>
  );
};

export default InfoPage;

// ingredients
import React, { useState } from 'react';

const Ingredients = ({onIngredientClick}) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
    // Call the callback function with the selected ingredient
    if (onIngredientClick) {
      onIngredientClick(ingredient);
    }
  };
  return (
    <div>
      <h1 className='text-xl py-5 mt-24 text-center'>Popular Ingredients</h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5 px-5">
        <div className="text-center cursor-pointer" onClick={() => handleIngredientClick('Vodka')}>
          <img 
            src="https://www.thecocktaildb.com/images/ingredients/vodka-Medium.png" 
            alt="Vodka" 
            className='py-5'
          />
          <span>Vodka</span>
        </div>
        <div className="text-center cursor-pointer" onClick={() => handleIngredientClick('Gin')}>
          <img 
            src="https://www.thecocktaildb.com/images/ingredients/gin-Medium.png" 
            alt="Gin" 
            className='py-5'
          />
          <span>Gin</span>
        </div>
        <div className="text-center cursor-pointer" onClick={() => handleIngredientClick('Rum')}>
          <img 
            src="https://www.thecocktaildb.com/images/ingredients/rum-Medium.png" 
            alt="Rum" 
            className='py-5'
          />
          <span>Rum</span>
        </div>
        <div className="text-center cursor-pointer" onClick={() => handleIngredientClick('Tequila')}>
          <img 
            src="https://www.thecocktaildb.com/images/ingredients/tequila-Medium.png" 
            alt="Tequila" 
            className='py-5'
          />
          <span>Tequila</span>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;


// popular 
import React, { useState } from 'react';

function Popular({ randomCocktails , onCocktailClick }) {
  const [selectedById, setSelectedById] = useState(null);

  const handleIdClick = (idDrink) => {
    setSelectedById(idDrink);
      // Send back the selected idDrink to the parent component (HomePage)
    if (onCocktailClick) {
      onCocktailClick(idDrink);
    }
  };

  return (
    <div>
      <h1 className='text-xl py-5 text-center'>Popular Drinks</h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 px-5">
        {randomCocktails.map((cocktail, index) => (
          <figure key={index} className="max-w-lg border cursor-pointer" onClick={() => handleIdClick(cocktail.idDrink)}>
            <img className="h-auto max-w-full rounded-lg" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <figcaption className="mt-2 text-lg text-center text-gray-500 dark:text-gray-400">{cocktail.strDrink}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Popular;



//router
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DrinkPage from './Layouts/DrinkPage';
import InfoPage from './Layouts/InfoPage';

const Router = () => {
  const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";
  //random coctail in home page 
    const [randomCocktails, setRandomCocktails] = useState([]);

  // select ingridients from ingredients components in home page
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [drinks, setDrinks] = useState([]);


  // select ingridients from drinks components in home page
  const [ingredientHistory, setIngredientHistory] = useState([]);

  // select id from popular components in home page
  const [cocktailId, setCocktailId] = useState(null);
  const [drinkId, setDrinkId] = useState([]);

  const navigate = useNavigate();

  // Function to fetch random cocktail data
  const fetchRandomCocktail = async () => {
    try {
      const response = await fetch(baseURL + 'random.php');
      const data = await response.json();
      return data.drinks[0];
    } catch (error) {
      console.error('Error fetching cocktail:', error);
      return null;
    }
  };

  // Function to fetch drinks based on an ingredient
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

  // Callback function to handle ingredient selection
  const handleIngredientSelect = async (ingredient) => {
    setSelectedIngredient(ingredient);
    try {
      const response = await fetch(baseURL + 'search.php?s=' + ingredient);
      const data = await response.json();
      const drinks = data.drinks || [];
      setDrinks(drinks);
      // console.log(drinks);
    } catch (error) {
      console.error('Error fetching cocktail:', error);
    }

    // Fetch ingredient information
    fetchDrinksByIngredient(ingredient);

    // Redirect to the drink page after selecting the ingredient
    navigate('/drinks');
  };


  // Callback function to handle id cocktail selection
  const handleCocktailIdClick =  async (idDrink) => {
    setCocktailId(idDrink);
    try {
      const response = await fetch(baseURL + 'lookup.php?i=' + idDrink);
      const data = await response.json();
      const drinks = data.drinks || [];
      setDrinkId(drinks);
      console.log(drinks);
    } catch (error) {
      console.error('Error fetching cocktail:', error);
    }

    // Redirect to the search page after selecting the ingredient
    navigate(`/info/${idDrink}`);
  };

  useEffect(() => {
    // Fetch 8 different random cocktails
    const fetchCocktails = async () => {
      const cocktails = [];
      for (let i = 0; i < 8; i++) {
        const randomCocktail = await fetchRandomCocktail();
        if (randomCocktail) {
          cocktails.push(randomCocktail);
        }
      }
      setRandomCocktails(cocktails);
    };

    fetchCocktails();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<HomePage 
            randomCocktails={randomCocktails} 
            onIngredientSelect={handleIngredientSelect}          
            onCocktailIdSelect={handleCocktailIdClick} 
          />}
        />
        <Route 
          path='/search'
          element={<SearchPage />}
        />
        <Route 
          path='/drinks'
          element={<DrinkPage 
            drinks={drinks} 
            ingredientHistory={ingredientHistory}
          />}
        />
        <Route 
          path='/info'
          element={<InfoPage
            drinkId={drinkId}
          />}
        />
      </Routes>
    </div>
  );
};

export default Router;
