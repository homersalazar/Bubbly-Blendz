import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import React, { useState , useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const InfoPage = () => {
 const { id } = useParams();
 const [drinkId, setDrinkId] = useState([]);
  const fetchCocktailsById = async () => {
    const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";
    try {
      const response = await fetch(baseURL + 'lookup.php?i=' + id);
      const data = await response.json();
      const drinks = data.drinks || [];
      setDrinkId(drinks);
      console.log(drinks);
    } catch (error) {
      console.error('Error fetching cocktail:', error);
    }
  };
  useEffect(() => {
    fetchCocktailsById();
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <Link to="/">
        <FontAwesomeIcon icon={faChevronLeft} className='fa-2x px-5 py-5'/>
      </Link>
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
