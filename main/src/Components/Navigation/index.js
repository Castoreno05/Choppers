import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import {MenuData} from "../../Data/MenuData";
import "./navigation.css";

function Navigation() {
    const [choppersMenu, setChoppersMenu] = useState(false);
    const showMenu = () => setChoppersMenu(!choppersMenu);

    return (
        <>
            <div className="navigation">
                <Link alt="Home" to="/">
                    <h1 className="title">Choppers</h1>
                </Link>
                <Link alt="Menu Bars " className="menu-bars">
                    <FaBars onClick={showMenu}
                        className="thisAmazingIcon"/>
                </Link>
            </div>
            <nav className={
                choppersMenu ? "chop-menu active" : "chop-menu"
            }>
                <ul className="chop-menu-items"
                    onClick={showMenu}>
                    <li className="navbar-toggle">
                        <Link to="#" alt="Closer" className="menu-bars">
                            <AiOutlineClose className="close"/>
                        </Link>
                    </li>
                    {
                    MenuData.map((item, index) => {
                        return (
                            <li key={index}
                                className={
                                    item.class
                            }>
                                <Link to={
                                        item.path
                                    }
                                    alt={
                                        `${
                                            item.path
                                        }`
                                }>
                                    {
                                    item.icon
                                }
                                    <span>{
                                        item.title
                                    }</span>
                                </Link>
                            </li>
                        );
                    })
                } </ul>
            </nav>
        </>
    );
}

export default Navigation;
