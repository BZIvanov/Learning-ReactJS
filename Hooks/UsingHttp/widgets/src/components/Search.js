import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // here we have async function we call, because we are not allowed to use async for the function which is the first parameter to useEffect
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    // call the API once a second, not everytime the term variable is updated
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    // function returned by useEffect is called when the component is unmounted/destroyed
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  // extract list rendering in separate function
  const renderResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target='_blank'
            rel='noreferrer'
          >
            Visit
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label className='label'>Search term</label>
          <input
            className='input'
            type='text'
            value={term}
            onChange={({ target }) => setTerm(target.value.trim())}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderResults}</div>
    </div>
  );
};

export default Search;
