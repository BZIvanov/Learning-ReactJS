import { Fragment, type PropsWithChildren } from "react";
import { IntlProvider } from "react-intl"; // 7.1.11

import en from "./messages/en-us";
import bg from "./messages/bg-bg";
import { LOCALES } from "./context/locale";
import { useLocale } from "./context/useLocale";

const messages = {
  [LOCALES.ENGLISH]: en,
  [LOCALES.BULGARIAN]: bg,
};

const I18nProvider = ({ children }: PropsWithChildren) => {
  const { selectedLocale } = useLocale();

  return (
    <IntlProvider
      locale={selectedLocale}
      messages={messages[selectedLocale]}
      defaultLocale={LOCALES.ENGLISH}
      textComponent={Fragment}
    >
      {children}
    </IntlProvider>
  );
};

export default I18nProvider;
