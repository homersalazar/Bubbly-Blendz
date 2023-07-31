import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const DrinkPage = ({ drinks, ingredientHistory }) => {

  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon icon={faChevronLeft} className='fa-2x px-5 py-5'/>
      </Link>
      <div className="grid grid-cols-1 justify-items-center pt-14 px-10 py-5">
        {ingredientHistory.map((ingredient, index) => (
          <div key={index}>
            <h1 className="text-center text-5xl mb-3 border-b-4 pb-2">{ingredient.strIngredient}</h1>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 px-5">
        {drinks.map((drink, index) => (
          <Link to={`/info/${drink.idDrink}`}>
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className='p-3 cursor-pointer'>
                <img className="rounded-t-lg" src={drink.strDrinkThumb} alt={drink.strDrinkThumb} />
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {drink.strDrink}
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DrinkPage;
