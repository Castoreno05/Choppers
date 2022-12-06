import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MenuData } from "../../Data/MenuData";
import "./navigation.css";
import { IconContext } from "react-icons";

function Navigation() {
  const [choppersMenu, setChoppersMenu] = useState(false);

  const showMenu = () => setChoppersMenu(!choppersMenu);

  return (
    <>
      <IconContext.Provider value={{ color: "#f5f5f5" }}>
        <div className="navigation">
          <Link to="/">
            <h1 className="title">Choppers</h1>
          </Link>
          <Link to="#" className="menu-bars">
            <FaBars onClick={showMenu} className="thisAmazingIcon" />
          </Link>
        </div>
        <nav className={choppersMenu ? "chop-menu active" : "chop-menu"}>
          <ul className="chop-menu-items" onClick={showMenu}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose className="close" />
              </Link>
            </li>
            {MenuData.map((item, index) => {
              return (
                <li key={index} className={item.class}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navigation;