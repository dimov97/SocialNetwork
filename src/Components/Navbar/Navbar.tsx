import React from "react";
import n from './Navbar.module.css';


const Navbar = () => {
    return <nav className={n.nav}>
        <div className={n.item}><a className={`${n.link} ${n.active}`} href="src/Components/Navbar/Navbar#">Profile</a></div>
        <div className={n.item}><a className={n.link} href="src/Components/Navbar/Navbar#">Messages</a></div>
        <div className={n.item}><a className={n.link} href="src/Components/Navbar/Navbar#">News</a></div>
        <div className={n.item}><a className={n.link} href="src/Components/Navbar/Navbar#">Music</a></div>
        <div className={n.item}><a className={n.link} href="src/Components/Navbar/Navbar#">Settings</a></div>
    </nav>
}

export default Navbar;