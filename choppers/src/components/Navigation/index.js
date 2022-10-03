import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Navigation() {

  const [ choppersMenu, setChoppersMenu ] = useState(false)

  const showMenu = () => setChoppersMenu(!choppersMenu)

  return (
    <>
    <div className="navigation">
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showMenu}/>
      </Link>
    </div>
    <nav className={choppersMenu ? 'chop-menu active' : 'chop-menu'}>
      <ul className='chop-menu-items'>
        <li className='nav-toggle'>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose/>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navigation
