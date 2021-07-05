import React from "react";
import { Link } from 'react-router-dom';
//SearchBar component
import SearchBar from "../SearchBar/SearchBar";
//logo icon from assets
import Logo from '../../assets/Logo/favicon.webp';

const NavBar = () => {
  return (
    <div className="NavBar" >
      <nav className="NavbarItems ">

        <div className="NavbarLogo">
          <Link to="/">
            <img
              src={Logo}
              alt="KoolKanya Logo"
              className="Logo"
            />
          </Link>
        </div>
        <div className="NavBartoggleIcon" >
        <div className="Hamburger">
            <span className="HamburgerIcon a"></span>
            <span className="HamburgerIcon b"></span>
            <span className="HamburgerIcon c"></span>
        </div>
        </div>

        <ul>
        <React.Fragment>
            <SearchBar />
        </React.Fragment>
          <Link to="/community" >
            <span className="NavLinks">Community</span>
          </Link>
          <Link to="/events" >
            <span className="NavLinks">Events</span>
          </Link>
          <Link to="/blogs" >
            <span className="NavLinks">Blogs</span>
          </Link>
        </ul>
      </nav>
    </div>
  );
};



export default NavBar;
