import { LOCALES } from "../i18n/context/locale";
import { useLocale } from "../i18n/context/useLocale";

const Footer = () => {
  const { selectedLocale, setLocale } = useLocale();

  return (
    <div className="App-footer">
      <ul>
        <li>
          <button
            disabled={selectedLocale === LOCALES.ENGLISH}
            onClick={() => setLocale(LOCALES.ENGLISH)}
          >
            EN
          </button>
        </li>
        <li>
          <button
            disabled={selectedLocale === LOCALES.BULGARIAN}
            onClick={() => setLocale(LOCALES.BULGARIAN)}
          >
            BG
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
