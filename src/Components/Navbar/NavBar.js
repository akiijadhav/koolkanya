import React, {useState} from "react";
//import Link for page change
import { Link } from "react-router-dom";
//SearchBar component
import SearchBar from "../SearchBar/SearchBar";
//logo icon from assets
import Logo from "../../assets/Logo/favicon.webp";
//styles for NavBar
import "./Navbar.scss";

const NavBar = () => {
  //state ofr hamburger
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="NavBar">
      <nav className="NavbarItems ">
        <div className="NavbarLogo">
          <Link to="/">
            <img src={Logo} alt="KoolKanya Logo" className="Logo" />
          </Link>
        </div>

        <div className="NavbarToggleIcon" onClick={(() => setIsOpen(!isOpen) )}>
          <div className="Hamburger" >
            <div className={isOpen ? "HamburgerIcon" : "HamburgerIconBar1"}></div>
            <div className={isOpen ? "HamburgerIcon" : "HamburgerIconBar2"}></div>
            <div className={isOpen ? "HamburgerIcon" : "HamburgerIconBar3"}></div>
          </div>
        </div>

        <ul className={isOpen ? "NavbarUl active" : "NavbarUl"}>
          <div className="NavbarSearchBar">
            <SearchBar />
          </div>
          <div className="NavbarRoutes">
            <Link to="/community">
              <span className="NavLinks">Community</span>
            </Link>
            <Link to="/events">
              <span className="NavLinks">Events</span>
            </Link>
            <Link to="/blogs">
              <span className="NavLinks">Blogs</span>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
