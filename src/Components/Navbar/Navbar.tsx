import React from "react";
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={n.nav}>
        <div className={n.item}>
            <NavLink className={n.link}
                     activeClassName={n.active}
                     to="/profile">Profile</NavLink></div>
        <div className={n.item}>
            <NavLink className={n.link}
                     activeClassName={n.active}
                     to="/dialogs">Messages</NavLink></div>
        <div className={n.item}>
            <NavLink className={n.link}
                     activeClassName={n.active}
                     to="/news">News</NavLink></div>
        <div className={n.item}>
            <NavLink className={n.link}
                     activeClassName={n.active}
                     to="/music">Music</NavLink></div>
        <div className={n.item}>
            <NavLink className={n.link}
                     activeClassName={n.active}
                     to="/settings">Settings</NavLink></div>
    </nav>
}

export default Navbar;