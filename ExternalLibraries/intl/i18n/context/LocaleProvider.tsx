import { useState, type PropsWithChildren } from "react";

import { LocaleContext, type LocaleContextType } from "./LocaleContext";
import { LOCALES, type Locale } from "./locale";

export function LocaleProvider({ children }: PropsWithChildren) {
  const [selectedLocale, setSelectedLocale] = useState<Locale>(LOCALES.ENGLISH);

  const setLocale = (locale: Locale) => setSelectedLocale(locale);

  const value: LocaleContextType = {
    selectedLocale,
    setLocale,
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
