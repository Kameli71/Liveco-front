import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
  <div className='NavBar'>
      <div className="navigation">
          <NavLink to="/">
              <h2 className="nav-title">Home</h2>
          </NavLink>
          <NavLink to="/saints">
              <h2 className="nav-title">Saints</h2>
          </NavLink>
          <NavLink to="/rank">
              <h2 className="nav-title">Rank</h2>
          </NavLink>
      </div>
  </div>
    );
};

export default NavBar;
