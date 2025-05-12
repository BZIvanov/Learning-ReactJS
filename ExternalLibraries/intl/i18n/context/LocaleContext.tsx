import { createContext } from "react";

import type { Locale } from "./locale";

export type LocaleContextType = {
  selectedLocale: Locale;
  setLocale: (locale: Locale) => void;
};

export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined
);
