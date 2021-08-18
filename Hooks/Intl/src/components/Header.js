import { FormattedMessage } from 'react-intl';

const Header = () => {
  const menu = {
    home: 'https://www.wikipedia.org/',
    blog: 'https://www.wikipedia.org/',
    about: 'https://www.wikipedia.org/',
    contacts: 'https://www.wikipedia.org/',
  };

  return (
    <header className='App-header'>
      <nav>
        <ul>
          {Object.keys(menu).map((key) => (
            <li key={key}>
              <a href={menu[key]} target='_blank' rel='noreferrer'>
                <FormattedMessage id={`menu.${key}`} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
