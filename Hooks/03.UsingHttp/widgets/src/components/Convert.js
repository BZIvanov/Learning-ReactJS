import { useState, useEffect } from 'react';

const translator = {
  bg: {
    hello: 'Zdrasti',
    day: 'Den',
  },
  de: {
    hello: 'Hallo',
    day: 'Tag',
  },
  es: {
    hello: 'Hola',
    day: 'Dia',
  },
};

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const run = async () => {
      await setTimeout(() => {
        if (text && (text === 'hello' || text === 'day')) {
          setTranslated(translator[language.value][text]);
        } else {
          setTranslated('Unknown');
        }
      }, 1000);
    };

    run();
  }, [language, text]);

  return (
    <div>
      <h1 className='ui header'>{translated}</h1>
    </div>
  );
};

export default Convert;
