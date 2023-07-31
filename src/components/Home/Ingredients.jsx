import React, { useState } from 'react';

const Ingredients = ({ onIngredientClick }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null)
  const handleIngredientClick = (ingredients) => {
    setSelectedIngredient(ingredients);
    if (onIngredientClick) {
      onIngredientClick(ingredients);
    }
  }
  return (
    <div>
      <h1 className='text-xl py-5 mt-24 text-center'>Popular Ingredients</h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5 px-5 mb-10">
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
  )
}

export default Ingredients
