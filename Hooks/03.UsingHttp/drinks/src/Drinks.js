import React from 'react';
import Tour from './Drink';

const Tours = ({ drinks, removeDrink }) => {
  return (
    <section>
      <div className='title'>
        <h2>our drinks</h2>
        <div className='underline'></div>
      </div>
      <div>
        {drinks.map((drink) => {
          return (
            <Tour key={drink.idDrink} {...drink} removeDrink={removeDrink} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
