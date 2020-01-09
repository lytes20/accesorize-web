import React from "react";
import "../assets/styles/header.scss";
function Header() {
  return (
    <header>
      <div className="center width-match-parent">
        <input name="text" type="text" placeholder="Search Website" />
      </div>

      <nav>
        <ul>
          <li>Sale</li>
          <li>All New</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
