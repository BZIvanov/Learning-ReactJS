import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { actionCreators } from './store';
import { RootState } from './store/reducers';

function App() {
  const [inputValue, setInputValue] = useState<number>(5);

  const amount = useSelector((state: RootState) => state.amount);
  const dispatch = useDispatch();

  const { increaseAmount, decreaseAmount, resetAmount } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <div>
        <input type='number' value={inputValue} onChange={handleChange} />
      </div>

      <button onClick={() => increaseAmount(inputValue)}>Increase</button>
      <button onClick={() => decreaseAmount(inputValue)}>Decrease</button>
      <button onClick={resetAmount}>Reset</button>

      <h2>{amount}</h2>
    </div>
  );
}

export default App;
