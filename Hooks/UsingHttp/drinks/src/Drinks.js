import Drink from './Drink';

const Drinks = ({ drinks, removeDrink }) => {
  return (
    <section>
      <div className='title'>
        <h2>our drinks</h2>
        <div className='underline'></div>
      </div>

      <div>
        {drinks.map((drink) => (
          <Drink key={drink.idDrink} {...drink} removeDrink={removeDrink} />
        ))}
      </div>
    </section>
  );
};

export default Drinks;
