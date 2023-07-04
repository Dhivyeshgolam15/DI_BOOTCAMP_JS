import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link className="navbar-brand text-white text-lg brand-text" to="/">
        MovieSeriesInfo
      </Link>
    </nav>
  );
};

export default Navbar;