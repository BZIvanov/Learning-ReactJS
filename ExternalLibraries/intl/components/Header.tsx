import { FormattedMessage } from "react-intl";

const menu = {
  home: "https://www.wikipedia.org/",
  blog: "https://www.wikipedia.org/",
  about: "https://www.wikipedia.org/",
  contacts: "https://www.wikipedia.org/",
};

const Header = () => {
  return (
    <header className="App-header">
      <nav>
        <ul>
          {Object.entries(menu).map(([key, href]) => (
            <li key={key}>
              <a href={href} target="_blank" rel="noreferrer">
                <FormattedMessage id={key} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
