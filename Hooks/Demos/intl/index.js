import React from 'react'; // 17.0.2
import ReactDOM from 'react-dom'; // 17.0.2
import { Provider } from 'react-redux'; // react-redux

import { store } from './store';
import I18nProvider from './i18n/Provider';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nProvider>
        <App />
      </I18nProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
