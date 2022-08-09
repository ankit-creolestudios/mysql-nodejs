import "./style.css";
import React from "react";

const MainHeader = () => {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li>
            <a href="/hoc">HOC</a>
          </li>
          <li>
            <a href="/i18n">Internationalization</a>
          </li>
          <li>
            <a href="/antd">Antd Site</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
