import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { MenuData } from '../MenuData';
import "./navigation.css";
import { IconContext } from "react-icons";
import ChoppersLogo from "../../Images/ChoppersLogo.png"

function Navigation() {

  const [ choppersMenu, setChoppersMenu ] = useState(false)

  const showMenu = () => setChoppersMenu(!choppersMenu)

  return (
    <>
    <IconContext.Provider value={{ color:'#f5f5f5'}}>
    <div className="navigation">
      <Link to="/">
      <img src={ChoppersLogo} alt="Logo" className='choppersLogo'></img>
      </Link>
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showMenu} style={{ color: 'black'}}/>
      </Link>
    </div>
    <nav className={choppersMenu ? 'chop-menu active' : 'chop-menu'}>
      <ul className='chop-menu-items' onClick={showMenu}>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose className='close'/>
          </Link>
        </li>
        {MenuData.map ((item, index) => {
          return(
            <li key={index} className={item.class}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navigation
