import { useContext } from "react";

import { LocaleContext, type LocaleContextType } from "./LocaleContext";

export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext);

  if (context === undefined) {
    throw new Error("LocaleContext was used outside LocaleProvider!");
  }

  return context;
}
