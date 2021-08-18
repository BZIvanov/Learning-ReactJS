import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const Form = () => {
  const [name, setName] = useState('');
  const [dogs, setDogs] = useState('');

  return (
    <div>
      <p>
        <FormattedMessage
          id='richtext'
          values={{ num: dogs, bold: (chunks) => <b>{chunks}</b> }}
        />
      </p>

      {!!name && (
        <p>
          <FormattedMessage id='subscribe-invite' values={{ name }} />
        </p>
      )}

      <form className='App-form'>
        <div>
          <FormattedMessage id='form.name' defaultMessage='search'>
            {(placeholder) => (
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                type='text'
                placeholder={placeholder}
                name='name'
              />
            )}
          </FormattedMessage>
        </div>

        <select style={{ margin: '20px' }}>
          <FormattedMessage id='form.country.us'>
            {(placeholder) => <option value={1}>{placeholder}</option>}
          </FormattedMessage>

          <FormattedMessage id='form.country.bulgaria'>
            {(placeholder) => <option value={1}>{placeholder}</option>}
          </FormattedMessage>

          <FormattedMessage id='form.country.other'>
            {(placeholder) => <option value={1}>{placeholder}</option>}
          </FormattedMessage>
        </select>

        <div>
          <FormattedMessage id='form.dogs'>
            {(placeholder) => (
              <input
                value={dogs}
                onChange={(event) => setDogs(event.target.value)}
                type='number'
                placeholder={placeholder}
                name='name'
              />
            )}
          </FormattedMessage>
        </div>
      </form>
    </div>
  );
};

export default Form;
