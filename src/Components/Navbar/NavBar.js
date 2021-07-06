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
    <div className="NavBar" style={{ boxShadow: isOpen ? "none" : "0px 1px 10px #999"}}>
      <nav className="NavbarItems">
        <div className="NavbarLogo">
          <Link to="/">
            <img src={Logo} alt="KoolKanya Logo" className="Logo" />
          </Link>
        </div>

        <div className="NavbarToggleIcon" onClick={(() => setIsOpen(!isOpen) )} style={{ display: isOpen ? "flex" : "", justifyContent: "flex-end"}}>
          <div className="Hamburger" >
            <div className={isOpen ?  "HamburgerIconBar1" : "HamburgerIcon"}></div>
            <div className={isOpen ?  "HamburgerIconBar2" : "HamburgerIcon"}></div>
            <div className={isOpen ?  "HamburgerIconBar3" : "HamburgerIcon"}></div>
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
