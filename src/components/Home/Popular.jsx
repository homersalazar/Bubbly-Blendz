import { Link } from 'react-router-dom'
function Popular({ randomCocktails }) {

  return (
    <div>
      <h1 className='text-xl py-5 text-center'>Popular Drinks</h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 px-5">
        {randomCocktails.map((cocktail, index) => (
          <figure key={index} className="max-w-lg border cursor-pointer">
            <Link to={`/info/${cocktail.idDrink}`}>
              <img className="h-auto max-w-full rounded-lg" 
                src={cocktail.strDrinkThumb} alt={cocktail.strDrink}
              />
              <figcaption className="mt-2 text-lg text-center text-gray-500 dark:text-gray-400">
                {cocktail.strDrink}
              </figcaption>
            </Link>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Popular;
