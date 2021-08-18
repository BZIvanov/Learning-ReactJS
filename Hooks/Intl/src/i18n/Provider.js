import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import flat from 'flat';
import messages from './messages';

const I18nProvider = ({ children }) => {
  const language = useSelector((state) => state.language);

  return (
    <IntlProvider
      textComponent={Fragment}
      locale={language}
      messages={flat(messages[language])}
    >
      {children}
    </IntlProvider>
  );
};

export default I18nProvider;
