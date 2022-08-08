import "./style.css";
import React from "react";
import { FormattedMessage } from "react-intl";

const Header = () => {
  const menu = {
    home: "/",
    about: "i18n/about",
    blog: "i18n/blog",
    contacts: "i18n/contacts",
  };
  return (
    <header className="App-header">
      <nav>
        <ul>
          {Object.keys(menu).map((key) => (
            <li key={key}>
              <a href={menu[key]}>
                <FormattedMessage id={`menu.${key}`} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
