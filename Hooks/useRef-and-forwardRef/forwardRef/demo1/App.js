import { useRef } from 'react';
import CustomInput from './CustomInput';

const App = () => {
  const textFieldRef = useRef();

  const handleClick = () => {
    const textFieldElement = textFieldRef.current;

    if (textFieldElement && textFieldElement.value) {
      console.log(textFieldElement.value);
    } else {
      textFieldElement.focus();
    }
  };

  return (
    <div>
      <CustomInput type='text' ref={textFieldRef} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
