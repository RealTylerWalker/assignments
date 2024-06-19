import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function FooterComp() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <footer className={`${theme}-footer`}>
      <p className="footer__copyright">
        © 2024 All Rights Reserved Tyler Walker
      </p>
    </footer>
  );
}

export default FooterComp;
