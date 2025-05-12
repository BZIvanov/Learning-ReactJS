import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LocaleProvider } from "./i18n/context/LocaleProvider";
import I18nProvider from "./i18n/I18nProvider";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </LocaleProvider>
  </StrictMode>
);
