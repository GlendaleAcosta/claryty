import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-faded fixed-top">
      <Link to="/" className="navbar-brand">Claryty</Link>
    </nav>
  );
};

export default Navbar;
