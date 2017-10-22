import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav navbar fixed-top nav-pills flex-column flex-sm-row">
      <div className="d-flex container space-between">
        <Link className="flex-sm-fill text-sm-center nav-link text-white lato" to="/" >Clarify</Link>
        <a
          className="flex-sm-fill text-sm-center nav-link active lato"
          href="https://www.fda.gov/safety/medwatch/default.htm"
        >
          Report A Case
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
