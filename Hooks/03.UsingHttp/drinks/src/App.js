import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Drinks from './Drinks';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

function App() {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  const removeDrink = (id) => {
    const newDrinks = drinks.filter((drink) => drink.idDrink !== id);
    setDrinks(newDrinks);
  };

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const drinks = await response.json();
      setLoading(false);
      setDrinks(drinks.drinks);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (drinks.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no drinks left</h2>
          <button className='btn' onClick={() => fetchDrinks()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Drinks drinks={drinks} removeDrink={removeDrink} />
    </main>
  );
}

export default App;
