import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const language = navigator.language;
let locale, messages;

if (language.startsWith("es")) {
  locale = "es-ES";
  messages = localeEsMessages;
} else if (language.startsWith("en")) {
  locale = "en-US";
  messages = localeEnMessages;
} else {
  locale = "es-ES";
  messages = localeEsMessages;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IntlProvider locale={locale} messages={messages}>
    <App locale={locale} />
  </IntlProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();
