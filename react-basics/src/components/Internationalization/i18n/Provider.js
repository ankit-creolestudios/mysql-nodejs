import React from "react";
import flatten from "flat";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./constants";
import messages from "./messages";
const Provider = ({ children, locale }) => {
  console.log(locale);
  return (
    <div>
      <IntlProvider locale={locale} messages={flatten(messages[locale])}>
        {children}
      </IntlProvider>
    </div>
  );
};

export default Provider;
