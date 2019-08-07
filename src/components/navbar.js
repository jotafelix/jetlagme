import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/logo-jetlagme.svg"

import headerStyles from '../styles/header.module.scss'


const Navbar = () => {

    return(

    <div className={headerStyles.header_nav}>
        <Link to="/"><img src={logo} alt="Logo Jetlag Me" className={headerStyles.logo} /></Link>
        <nav>
            <ul className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>

    )


}

export default Navbar