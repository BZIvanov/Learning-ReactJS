import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { actionCreators } from '../store';
import { LOCALES } from '../i18n/constants';

const Footer = () => {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const { setLanguage } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className='App-footer'>
      <ul>
        <li>
          <button
            disabled={language === LOCALES.ENGLISH}
            onClick={() => setLanguage(LOCALES.ENGLISH)}
          >
            English
          </button>
        </li>
        <li>
          <button
            disabled={language === LOCALES.BULGARIAN}
            onClick={() => setLanguage(LOCALES.BULGARIAN)}
          >
            Bulgarian
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
