
import React from 'react';
import { Link } from 'react-router-dom';
import "./news.css"

const Header = () => {
  return (
    <header>
      <nav>
        <Link className="names" to="/">Home</Link>
        <Link className="names" to="/login">Login</Link>
        <Link className="names" to="/signup">Signup</Link>
      </nav>
    </header>
  );
};

export default Header;
