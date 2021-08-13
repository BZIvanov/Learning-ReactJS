import { useState } from 'react';
import DropDown from './DropDown';
import Convert from './Convert';

const options = [
  { label: 'Bulgarian', value: 'bg' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
];

const Translate = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Type a word</label>
          <input
            type='text'
            value={text}
            onChange={({ target }) => setText(target.value)}
          />
        </div>
      </div>
      <DropDown
        label='Select a language'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />

      <hr />

      <h3 className='ui header'>Result</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
