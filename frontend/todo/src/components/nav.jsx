import React, { useState } from "react";

import '../components/nav.css';
import { Link, NavLink } from "react-router-dom";

function Nav () {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        i do
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/task">Task</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;