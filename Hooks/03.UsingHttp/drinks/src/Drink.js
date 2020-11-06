import React, { useState } from 'react';

const SHORT_TEXT_LENGTH = 70;

const Drink = ({
  idDrink,
  strDrinkThumb,
  strInstructions,
  strDrink,
  strAlcoholic,
  removeDrink,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-drink'>
      <img src={strDrinkThumb} alt={strDrink} />
      <footer>
        <div className='drink-info'>
          <h4>{strDrink}</h4>
          <h4 className='drink-alcoholic'>{strAlcoholic}</h4>
        </div>
        <p>
          {readMore || strInstructions.length < SHORT_TEXT_LENGTH
            ? strInstructions
            : `${strInstructions.substring(0, SHORT_TEXT_LENGTH)}...`}
          {strInstructions.length >= SHORT_TEXT_LENGTH ? (
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : '  read more'}
            </button>
          ) : null}
        </p>
        <button className='delete-btn' onClick={() => removeDrink(idDrink)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Drink;
