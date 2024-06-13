import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, XCircle, Instagram, Facebook, Twitter } from 'react-feather';
import { menuList } from "./navlinks";
import "./navbar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navItems">
      <h1 className="navLogo">
        Media<i className="reColor">Rebrand</i>
      </h1>

      <div className="menuIcon" onClick={toggleMenu}>
        {isMenuOpen ? <XCircle /> : <Menu />}
      </div>

      <ul className={`navMenu ${isMenuOpen ? 'active' : ''}`}>
        {menuList.map((item, index) => {
          const isActive = location.pathname === item.url;
          const itemClassName = `${item.cName} ${isActive ? 'activeItem' : ''}`;

          return (
            <li key={index} className={itemClassName}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
       <ul className="socials">
        <li><Instagram/></li>
        <li><Facebook/></li>
        <li><Twitter/></li>
      </ul>
      </ul>

     
    </nav>
  );
}

export default NavBar;