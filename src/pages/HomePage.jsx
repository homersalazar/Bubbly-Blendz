import React from 'react'
import Popular from '../components/Home/Popular'
import Ingredients from '../components/Home/Ingredients'
import Search from '../components/Home/Search'

const HomePage = ({ randomCocktails, onIngredientSelect, onSearch }) => {
  const handleIngredientSelected = (ingredient) => {
    if (onIngredientSelect) {
      onIngredientSelect(ingredient);
    }
  };

  return (
    <>
      <div className="grid justify-items-center">
          <h1 className='pt-14 text-4xl font-semibold'><em>Bubbly Blendz</em></h1>
          <Search onSearch={onSearch}/>
          <Popular 
            randomCocktails={randomCocktails}  
          />
        <Ingredients onIngredientClick={handleIngredientSelected} />
      </div>      
    </>
  )
}

export default HomePage
